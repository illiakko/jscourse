// "use strict"
const submitBtn = document.querySelector("#submitBtn");
const orderInfo = document.querySelector(".order-info__wrapper");
const warringNoSize = document.querySelector(".warringNoSize");
const warringNoUser = document.querySelector(".warringNoUser");

let productSize = "";
let productColor = "";
let userFirstName = "";
let UserLastName = "";
let userEmail = "";
let userPhone = "";
let selectedCategoryText = "";
let selectedColorText = "";
let selectedOptionsDiv = "";
const productOptionsValue = [];
const productOptionsLabel = [];

//=========================================================================
submitBtn.addEventListener('click', function () {
    getUserFormData();
    let emaleIsTrue = validateEmail(userEmail);
    if (userFirstName && UserLastName && emaleIsTrue && userPhone) {
        getOptionsFormData();
        pushParsedFormDataToHTML()
        validateEmail(userEmail)

        submitBtn.disabled = true;
        warringNoUser.classList.add("hideElement");
    } else {
        warringNoUser.classList.remove("hideElement");
    }

});

// ========================================================================
function getUserFormData() {

    userFirstName = userForm.elements.firstname.value;
    UserLastName = userForm.elements.lastname.value;
    userEmail = userForm.elements.email.value;
    userPhone = userForm.elements.phone.value;

}
// ========================================================================
function getOptionsFormData() {

    productSize = userForm.elements.size.value;
    productColor = userForm.elements.productColor.value;


    // пушу в один массив велью, а в другой лейблы выбранных чекбоксов
    userForm.elements.extraoptions.forEach(function (item) {
        if (item.checked) {
            productOptionsValue.push(item.value);
            productOptionsLabel.push(item.labels[0].textContent);
        }
    });

    //получаем текст из выбранной опции селекта категории одежды
    userForm.elements.productCategory.childNodes.forEach(function (item) {
        if (item.value == productCategoryValue) {
            selectedCategoryText = item.innerText;
        }
    });
    //получаем текст из выбранной опции цвета
    userForm.elements.productColor.childNodes.forEach(function (item) {
        if (item.value == productColor) {
            selectedColorText = item.innerText;
        }
    });
}

// ========================================================================

function pushParsedFormDataToHTML() {
    orderInfo.innerHTML =
        `<div class="orderList__wrapper">
        <p>Дорогой ${userFirstName} ${UserLastName}, ваш заказ:</p>
        <p>Одежда: ${selectedCategoryText} </p>
        <p>Размер: ${productSize} </p>
        <p>Цвет: ${selectedColorText} </p>
        <p>Дополнительные опции:</p>
        <div class="selectedOptions__wrapper"></div> 
        <p>-----------------------</p>
        <p>Контактные данные </p>
        <p>Ваш телефон: ${userPhone} </p>
        <p>Ваша почта: ${userEmail} </p>
        <div>
        `
    // вывожу массив с лейблами опций в хтмл
    selectedOptionsDiv = document.querySelector(".selectedOptions__wrapper");
    productOptionsLabel.forEach(function (item) {
        selectedOptionsDiv.innerHTML += `<p> (${item}) </p>`
    });
}

//=============================================================================
function validateEmail(email) {
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if (!reg.test(email)) {
        alert('Введите корректный e-mail');
        return false;
    } else {
        return true;
    }
}
