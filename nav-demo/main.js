/**
 * date：2020年9月29日16:31:46
 * 
 * author: xiong
 */


const listObj = JSON.parse(localStorage.getItem("list"))
let map = listObj || [
    { logo: 'A', url: "http://www.acfun.cn/" },
    { logo: 'B', url: "https://www.bilibili.com/" },
]

console.log(map)
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
        </li> `).insertBefore(last)
        $li.on('click', () => {
            window.open(node.url)
        })
        $li.on('click', '.close', (e) => {
            e.stopPropagation()
            map.splice(index, 1)
            render()

        })
    })
}
render()



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

window.onbeforeunload = () => {
    const string = JSON.stringify(map)
    localStorage.setItem("list", string)

}

$(document).on("keypress", (e) => {
    let key = e.key
    for (let i = 0; i < map.length; i++) {
        if (key.toUpperCase() === map[i].logo.toUpperCase()) {
            window.open(map[i].url)
        }
    }


})