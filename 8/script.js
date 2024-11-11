let container = document.querySelector(".container");
let images = document.querySelector(".images");
let biX = document.querySelector(".images .bi-x");
let sliper = document.querySelectorAll("swiper-slide");

let api = "https://www.themealdb.com/api/json/v1/1/categories.php";

fetch(api)
    .then((javob) => javob.json())
    .then((data) => {
        console.log(data);
        
        categories(data.categories);
    });

let filterr = "";

function categories(categoriyy) {
    categoriyy.forEach((element) => {
        let button = document.createElement("button");
        button.innerHTML = element.strCategory;
        container.appendChild(button);

        button.addEventListener("click", () => {
            images.classList.add("scale");
            filterr = button.innerHTML;
            let apii = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${filterr}`;

            fetch(apii)
                .then((item) => item.json())
                .then((item) => {
                    korsat(item.meals);
                });
        });
    });
}

function korsat(rasm) {
    sliper.forEach((element) => {
        element.innerHTML = "";
    });

    rasm.forEach((ovqat, index) => {
        if (index < sliper.length) {
            let img = document.createElement("img");
            img.src = ovqat.strMealThumb;
            sliper[index].appendChild(img);
        }
    });
}

biX.addEventListener("click", () => {
    images.classList.remove("scale");
});

