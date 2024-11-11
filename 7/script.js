let personName = document.querySelector(".name");
let lastName = document.querySelector(".last-name");
let address = document.querySelector(".addres");
let phoneNumber = document.querySelector(".phone-number");
let information = document.querySelector(".information");
let table = document.querySelector(".tr"); 

let data = JSON.parse(localStorage.getItem("name")) || [];

function save() {
    table.innerHTML = "";
    data.forEach((element, index) => {
        let tbody = document.createElement("div");
        tbody.classList.add("tbody");
        tbody.innerHTML = `
            <h4>${index + 1}</h4>
            <h4>${element.name}</h4>
            <h4>${element.lastName}</h4>
            <h4>${element.address}</h4>
            <h4>${element.phoneNumber}</h4>
            <h4><button class="btn1">Delete</button></h4>
        `;
        table.appendChild(tbody);

        let deleteBtn = tbody.querySelector(".btn1");
        deleteBtn.addEventListener("click", () => {
            data.splice(index, 1);
            localStorage.setItem("name", JSON.stringify(data));
            save();
        });
    });
}

information.addEventListener("click", () => {
    if ((personName.value && lastName.value && address.value && phoneNumber.value) == "") {
        alert("Xatolik! Iltimos bosh joyni toldiring.");
    } else {
        data.push({
            name: personName.value,
            lastName: lastName.value,
            address: address.value,
            phoneNumber: phoneNumber.value,
        });

        localStorage.setItem("name", JSON.stringify(data));
        save();

        personName.value = "";
        lastName.value = "";
        phoneNumber.value = "";
        address.value = "";
    }
});

save();

