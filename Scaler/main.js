// DOM -> Document Object Model

const document = {
    getElementById: function () {
        // ... have some function
    },
    innerHTML,
    style,
};


function clickAlert(arg = "Log In Successful") {
    alert(arg);

    console.log(arg);
    }

const buttonTag = document.getElementById("button-id");

buttonTag.onclick = clickAlert;