
function updeytofdel() {
    let delbuttons = document.querySelectorAll('.delete')
    for (let i = 0; i < delbuttons.length; i++) {
        let x = delbuttons[i]
        x.addEventListener('click', function () {
            x.parentElement.remove()
        })
    }
}
updeytofdel()
function dobavit(){
    let stroka = document.querySelectorAll('.hstroka')
    for (let i = 0; i < stroka.length; i++) {
        let x = stroka[i]
        if (x.value.length) {
            let div = document.createElement('div');
            if ( i === 0 ) {
                div.className = 'high-text'
                div.innerHTML = `<input onclick="checkbox()" type="checkbox"><p>${x.value}</p> <button class="delete"><i class="fa-solid fa-x"></i></button>`
            } else {
                div.className = 'low-text'
                div.innerHTML = `<input onclick="lowcheckbox()" type="checkbox"><p>${x.value}</p> <button class="delete"><i class="fa-solid fa-x"></i></button>`

            }

            let b = document.querySelector(`.${div.className}`)
            b.parentElement.prepend(div)
            x.value = ''
            updeytofdel()
        }
        }
}

window.addEventListener ("keypress", function (e) {
    if (e.keyCode === 13){
        for (let i = 0; i<=0;i++) {
            dobavit()
        }
    }
});

function checkbox() {
    let a = document.querySelectorAll('.high-text > input[type="checkbox"]')
    for (let i = 0; i < a.length; i++) {
        let b = a[i]

        if (b.checked === true) {
            let c = document.querySelector('.done-high-divs')
            b.parentElement.style.backgroundColor = '#DCDCDC'
            c.append(b.parentElement)
        } else {
            let c = document.querySelector('.high-divs')
           b.parentElement.style.backgroundColor = '#fff'
           c.append(b.parentElement)
        }
    }
}
function lowcheckbox() {
    let a = document.querySelectorAll('.low-text> input[type="checkbox"]')
    for (let i = 0; i < a.length; i++) {
        let b = a[i]

        if (b.checked === true) {
            let c = document.querySelector('.done-low-divs')
            b.parentElement.style.backgroundColor = '#DCDCDC'
            c.append(b.parentElement)
        } else {
            let c = document.querySelector('.low-divs')
            b.parentElement.style.backgroundColor = '#fff'
            c.append(b.parentElement)
        }
    }
}