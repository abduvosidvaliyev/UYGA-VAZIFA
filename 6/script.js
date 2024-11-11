let cards = document.querySelector(".cards");
let btn = document.querySelector(".inputs button");
let inp = document.querySelector(".inputs input");
let data = JSON.parse(localStorage.getItem("name")) || [];

function save() {
    cards.innerHTML = "";
    data.forEach((element, index) => {
        let text = document.createElement("div");
        text.classList.add("text");
        text.innerHTML = `
            <h4>${element}</h4>
            <button class="btn1">Delete</button>
        `;
        cards.appendChild(text);

        let deleteBtn = text.querySelector(".btn1"); 
        deleteBtn.addEventListener("click", () => {
            data.splice(index, 1); 
            localStorage.setItem("name", JSON.stringify(data)); 
            save();
        });
    });
}

btn.addEventListener("click", () => {
    if (inp.value == "") {
        alert("Iltimos Bosh Joyni To'ldiring");
    } else {
        let inputValue = inp.value;
        data.push(inputValue);
        localStorage.setItem("name", JSON.stringify(data));
        save(); 
        inp.value = ""; 
    }
});

save();












