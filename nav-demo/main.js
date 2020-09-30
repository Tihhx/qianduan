/**
 * date：2020年9月29日16:31:46
 * 
 * author: xiong
 */


// 读取localStorage Json字符串 转对象
const listObj = JSON.parse(localStorage.getItem("list"))
let map = listObj || [
    { logo: 'A', url: "http://www.acfun.cn/" },
    { logo: 'B', url: "https://www.bilibili.com/" },
]

console.log(map)

//url 字符处理 去掉https:// 等
const removeX = (url) => {
    return url.replace("https://", '').replace("http://", '').replace("www.", '').replace(/\/.*/, '')
}

function render() {
    let $siteList = $(".siteList")
    $siteList.find("li:not(.last)").remove()
    map.forEach((node, index) => {
        if (node.url === '') { return }
        let last = $(".last")
        const $li = $(`<li>
            <div class="site">
                <div class="logo">${node.logo}</div>
                <div class="link">${removeX(node.url)}</div>
                <div class="close"><svg class="icon" >
                <use xlink:href="#icon-close"></use>
            </svg></div>
            </div>
        </li> `).insertBefore(last)         //在last 之前插入

        //监听 li 点击事件
        $li.on('click', () => {
            window.open(node.url)
        })

        // 监听 li 下 close 点击事件
        // 先阻止冒泡
        $li.on('click', '.close', (e) => {
            e.stopPropagation()
            map.splice(index, 1)
            render()

        })
    })
}
render()


// 添加点击事件到 addButton 上 获取网址
$(".addButton").on("click", () => {
    let $siteList = $(".siteList")
    console.log($siteList)
    let url = window.prompt("请输入要新增的网址:")
    if (url === '') { return }
    if (url.indexOf('http') !== 0) {
        url = 'https://' + url
    }
    let logo = removeX(url)[0].toUpperCase()
    map.push({ logo: logo, url: url })
    render()
})
// 页面关闭事件 存储 map数据到localStorage 本地存储
window.onbeforeunload = () => {
    const string = JSON.stringify(map)
    localStorage.setItem("list", string)

}
//监听键盘事件 
$(document).on("keypress", (e) => {
    let key = e.key
    for (let i = 0; i < map.length; i++) {
        if (key.toUpperCase() === map[i].logo.toUpperCase()) {
            window.open(map[i].url)
        }
    }


})