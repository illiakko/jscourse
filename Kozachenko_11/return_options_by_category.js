"use strict"
const productCategoryObj = document.querySelector("#productCategory");
const productSizeDiv = document.querySelector(".product-options-size__wrapper");
const productColorDiv = document.querySelector(".product-options-color__wrapper");
const productOptionsDiv = document.querySelector(".product-options-options__wrapper");
let productCategoryValue = ""
createProductSize();
createProductColor();
createProductOptions();

// =======================================================================

productCategoryObj.addEventListener("change", function () {

    productSizeDiv.innerHTML = "";
    productColorDiv.innerHTML = "";
    productOptionsDiv.innerHTML = "";

    createProductSize();
    createProductColor();
    createProductOptions();

});

// =======================================================================

function createProductColor() {
    productCategoryValue = productCategoryObj.value;
    const productCategoryData = clothes[productCategoryValue]; //get product from data.js
    //create select element
    const colorSelect = document.createElement('select');
    colorSelect.setAttribute('id', 'productColor');
    colorSelect.setAttribute('name', 'productColor');
    productColorDiv.append(colorSelect);

    for (let i = 0; i < productCategoryData.color.length; i++) {

        const colorOption = document.createElement('option');
        colorOption.setAttribute('value', productCategoryData.color[i]);
        colorOption.innerText = productCategoryData.color[i]
        colorSelect.append(colorOption);

    }
}

// =====================================================================

function createProductSize() {
    const productCategoryValue = productCategoryObj.value;
    const productCategoryData = clothes[productCategoryValue]; //get product from data.js
    //create radio element
    for (let i = 0; i < productCategoryData.size.length; i++) {

        const radioLabel = document.createElement('label');
        radioLabel.innerText = productCategoryData.size[i];
        productSizeDiv.append(radioLabel);

        const radioInput = document.createElement('input');
        radioInput.setAttribute('type', 'radio');
        radioInput.setAttribute('name', 'size');
        radioInput.setAttribute('value', productCategoryData.size[i]);
        radioLabel.append(radioInput);
    }
}

// =====================================================================

function createProductOptions() {
    const productCategoryValue = productCategoryObj.value;
    const productCategoryData = clothes[productCategoryValue]; //get product from data.js
    //create checkbox element
    for (let i = 0; i < productCategoryData.options.length; i++) {

        const checkboxLabel = document.createElement('label');
        checkboxLabel.innerText = productCategoryData.options[i];
        productOptionsDiv.append(checkboxLabel);

        const checkboxInput = document.createElement('input');
        checkboxInput.setAttribute('type', 'checkbox');
        checkboxInput.setAttribute('name', `extraoptions`);
        checkboxInput.setAttribute('value', `option${i}`);

        checkboxLabel.append(checkboxInput);
    }
}




