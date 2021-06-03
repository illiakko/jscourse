// "use strict"
const submitBtn = document.querySelector("#submitBtn");
const orderInfo = document.querySelector(".order-info__wrapper");
const warringNoSize = document.querySelector(".warringNoSize");
const warringNoUser = document.querySelector(".warringNoUser");

let productSize = "";
let productColor = "";
let userFirstName = "";
let userLastName = "";
let userEmail = "";
let userPhone = "";
let selectedCategoryText = "";
let selectedColorText = "";
let selectedOptionsDiv = "";
const productOptionsValue = [];
const productOptionsLabel = [];


//=========================================================================
submitBtn.addEventListener('click', function () {
    getUserFormData()
    let emaleIsTrue = validateEmail(userEmail);
    let firstnameIsTrue = validateName(userFirstName);
    let lastnameIsTrue = validateName(userLastName);
    let phoneIsTrue = validatePhone(userPhone);

    if (firstnameIsTrue && lastnameIsTrue && emaleIsTrue && phoneIsTrue) {
        getOptionsFormData();
        pushParsedFormDataToHTML()
        warringNoUser.classList.add("hideElement");

        //обнуляем лишние значения после заказа

        productOptionsValue.splice(0, Infinity);
        productOptionsLabel.splice(0, Infinity);

    } else {
        warringNoUser.classList.remove("hideElement");
    }

});

// ========================================================================
function getUserFormData() {

    userFirstName = userForm.elements.firstname.value;
    userLastName = userForm.elements.lastname.value;
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
        <p>Дорогой ${userFirstName} ${userLastName}, ваш заказ:</p>
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

    let reg = /^([A-Za-z0-9_\-\.]{3,})\@([A-Za-z0-9_]{2,})(\.com)$/i;
    if (reg.test(email)) {
        return true;
    } else {
        alert('Введите корректный e-mail');
        return false;

    }
}

function validateName(name) {
    let regSearchForName = /[А-Яа-яA-Za-z\-]{3,18}/;
    let refSearchForSymbols = /[\d\s.!@#$%^&*()+=]/g;

    if (regSearchForName.test(name) &&
        name.match(refSearchForSymbols) === null) {
        return true;
    } else {
        alert('Введите корректное имя или фамилию');
        return false;
    }
}

function validatePhone(userPhone) {
    let regSearchForPhone = /^0\d{9}$/;

    if (regSearchForPhone.test(userPhone)) {
        return true;
    } else {
        alert('Введите корректный телефона');
        return false;
    }
}
//===================================================================

