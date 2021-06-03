
let colors = document.getElementsByTagName('h2');
let pageBody = document.getElementById('body');


[].forEach.call(colors, function (item) {

    item.addEventListener("click", function () {
        pageBody.style.backgroundColor = this.innerText;
    })

});