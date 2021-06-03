"use strict"
const buyButton = document.querySelector("#buyButton");
const userInfoSection = document.querySelector("#userInfoSection");
const optionsSection = document.querySelector(".product-options__wrapper");

buyButton.addEventListener('click', function () {

    if (!userForm.elements.size.value) {
        warringNoSize.classList.remove("hideElement");
    } else {
        warringNoSize.classList.add("hideElement");
        userInfoSection.classList.remove("hideElement");
    }

});