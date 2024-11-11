let inp = document.querySelector("input")
let container = document.querySelector(".container")
let btn = document.querySelector(".btn")
let btn1 = document.querySelector(".btn11")
let btn2 = document.querySelector(".btn12")
let btn3 = document.querySelector(".btn13")
let btn4 = document.querySelector(".btn14")

let search = "true"

function qidiruv() {
    let api = `https://www.omdbapi.com/?i=tt3896198&apikey=6095658c&s=${search}`
    fetch(api)
        .then((nom) => (nom.json()))
        .then((nom) => {
            data(nom.Search);
        })
}

window.addEventListener("keyup", (e) => {
    if ((e.key == "Enter" || e.key == "NumpadEnter") && inp.value.length > 1) {
        search = inp.value
        qidiruv()
    }
})

btn.addEventListener("click", () => {
    qidiruv()
})

function data(nom) {
    container.innerHTML = ""
    nom.forEach(item => {
        let card = document.createElement("div")
        let img = document.createElement("img")
        let name = document.createElement("h3")
        let year = document.createElement("h4")
        img.src = item.Poster
        name.innerHTML = item.Title
        year.innerHTML = item.Year
        card.appendChild(img)
        card.appendChild(name)
        card.appendChild(year)
        container.appendChild(card)
    });
}

qidiruv()

btn1.addEventListener("click", () => {
    search = btn1.innerHTML
    qidiruv()
})

btn2.addEventListener("click", () => {
    search = btn2.innerHTML
    qidiruv()
})

btn3.addEventListener("click", () => {
    search = btn3.innerHTML
    qidiruv()
})

btn4.addEventListener("click", () => {
    search = btn4.innerHTML
    qidiruv()
})

