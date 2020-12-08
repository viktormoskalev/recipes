function counter(max, t, elem) {
    //считает от нуля до max за время t и вы водит в elem
    let i = 0;
    let step = max / steps;
    if (max > steps) {
        i = max % steps;
    }

    let inerval = setInterval(function () {
        elem.innerHTML = Math.round(i);
        i = i + step;
        if (i > max) {
            clearInterval(inerval);
            
            i = max;
            i = formatNumber(i);
            elem.innerHTML = i;
        }
    }, t / steps * 1000);
}


function formatNumber(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
} // добавить запятую после тысячи



function unformatNumber(num) {
    return num.toString().replace(/[\s.,%]/g, '')
} //убрать запятые и пробелы из текста


//target in viewport
window.onload = () => {
    num = document.querySelectorAll(".card-numbers-counter");
    steps = 300; // количество тиков от 0 до конечной цифры
    duration = 2; // длительность в секундах

    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.01 //на 1% во вьюпорте сработает
    }
    // создаем наблюдатель
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const obscounter = entry.target

                num.forEach(n => {
                    let u = n.innerText;
                    counter(unformatNumber(u), duration, n);
                }) // начинаем отсчет
                observer.unobserve(obscounter) // прекращаем наблюдение
            }
        })
    }, options)
    observer.observe(document.querySelector("#coutntercontainer")); // обсервер на контейнер со счетчиками
}
