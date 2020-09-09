let style = document.querySelector('#style');
let html = document.querySelector('#html');

let n = 0;
let string2 = "";
let string = `
    /*画一个DIV~*/

    #div1 {
        width:200px;
        height:200px;
        border:1px solid red;
    }

    /*把DIV变成圆形*/

    #div1{
        border-radius:50%;
        box-shadow: 0 0 3px rgba(0,0,0,0.5);
        border: none;
    }

    /*用渐变分成黑白两半*/

    #div1{
        background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
    }

    /* 加两个圆*/

    #div1::before{
        content: "";
        display: block;
        position: absolute;
        width: 100px;
        height: 100px;
        transform: translateX(50%);
        background: #000;
        border-radius: 50%;
        background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
    }
    
    #div1::after{
        content: "";
        display: block;
        position: absolute;
        width: 100px;
        height: 100px;
        transform: translate(50%,100%);
        background: #fff;
        border-radius: 50%;
        background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%, rgba(0,0,0,1) 100%);
    }

    /*鼠标放在八卦上，八卦可以旋转哦~*/

   
    
    
`
let step = () => {
    setTimeout(() => {
        if (string[n] === '\n') {
            string2 += '<br>';
        } else if (string[n] === ' ') {
            string2 += '&nbsp';
        } else {
            string2 += string[n];
        }

        html.innerHTML = string2;
        style.innerHTML = string.substring(0, n);
        window.scrollTo(0, 99999);
        html.scrollTo(0, 99999);
        if (n < string.length - 1) {
            n++;
            step();
        }
    }, 0);
}

step();