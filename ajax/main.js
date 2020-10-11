
getCss.onclick = () => {
    const rs = new XMLHttpRequest()
    rs.open("GET", "/style.css")
    rs.onload = () => {
        const style = document.createElement("style")
        style.innerHTML = rs.response
        document.body.appendChild(style)
    }
    rs.send()
}



getJs.onclick = () => {
    const rs = new XMLHttpRequest()
    rs.open("GET", "/2.js")
    rs.onload = () => {
        const script = document.createElement("script")
        script.innerHTML = rs.response
        document.body.appendChild(script)
    }
    rs.send()
}

getHtml.onclick = getText("GET", "3.html")
//=> {
//     const rs = new XMLHttpRequest()
//     rs.open("GET", "3.html")
//     rs.onload = () => {
//         const html = document.createElement("html")
//         html.innerHTML = rs.response
//         document.body.appendChild(html)
//     }
//     rs.send()
// }

getXml.onclick = () => {
    const rs = new XMLHttpRequest()
    rs.open("GET", "/4.xml")
    rs.onreadystatechange = () => {
        if (rs.readyState === 4 && rs.status === 200) {
            const xml = rs.responseXML
            console.log(xml.getElementsByTagName('to')[0].textContent)
        }
    }
    rs.send()
}

getJson.onclick = () => {
    const rs = new XMLHttpRequest()
    rs.open("GET", "/5.json")
    rs.onreadystatechange = () => {
        if (rs.readyState === 4 && rs.status === 200) {
            let json = rs.response
            json = JSON.parse(json)
            console.log(typeof json)
            console.log(json.name)
        }
    }
    rs.send()
}

function getText(type, url) {
    const rs = new XMLHttpRequest()
    rs.open(type, url)
    rs.onload = () => {
        const script = document.createElement("html")
        script.innerHTML = rs.response
        document.body.appendChild(script)
    }
    rs.send()
}
let n = 1
getPage.onclick = () => {
    const rs = new XMLHttpRequest()
    rs.open("GET", `/page${n}`)
    rs.onreadystatechange = () => {
        if (rs.readyState === 4 && rs.status === 200) {
            let json = rs.response
            json = JSON.parse(json)
            let html = document.createElement("ul")
            json.forEach(element => {
                const li = document.createElement("li")
                li.textContent = element.id
                document.getElementsByClassName("page")[0].appendChild(li)
            });
            n += 1
        }
    }
    rs.send()
}