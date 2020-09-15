window.jQuery = function (selectorOrArray) {
    let elements
    if (typeof selectorOrArray === "string") {
        elements = document.querySelector(selectorOrArray);
    }
    else if (selectorOrArray instanceof Array) {
        elements = selectorOrArray;
    }
    return {
        addClass(ClassName) {
            this.each((element) => {
                element.classList.add(ClassName);
            })
        },
        find(selector) {
            let array = [];
            this.each((element) => {
                array.push(...element.querySelectorAll(selector));
            });
            return jQuery(array);
        },
        each(fn) {
            for (let i = 0; i < elements.length; i++) {
                fn.call(null, elements[i], i)
            }
        }
    }
}

window.$ = window.jQuery;

$('#test').find('.child').addClass('red') // 请确保这句话成功执行