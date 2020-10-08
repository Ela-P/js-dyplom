export function initLogin() {
    const user = {
        email: "aaa@.ru",
        password: 123,
        name: "Erik",
    };
    

const loginForm = document.getElementById("loginForm");

const btnLog = document.getElementById("btnLog");

const loginEmail = document.getElementById("loginInput");
const loginPassword = document.getElementById("passwordInput");

loginEmail.addEventListener("input", eventHandler);
loginPassword.daddEventListener("input", eventHandler);

function eventHandler(event) {
    const addInvalidClass = event.target.classList.contains(INVALID_CLASS);
    const isValid = event.target.value !== "";

    if (!addInvalidClass && !isValid) {
        event.target.classList.add(INVALID_CLASS);
    }

    if (addInvalidClass && isValid) {
        event.target.classList.remove(INVALID_CLASS);
    }
     setDisabledButtonState();
}


function classInvalidAdd(domNode, isValid) {
    if (isValid) {
        domNode.classList.remove(INVALID_CLASS)
    } else {
        domNode.classList.add(INVALID_CLASS)
    }
}


function setDisabledButtonState() {
    if (loginEmail.value === "" || loginPassword.value === "") {
        btnLog.disabled = true;
    } else {
        btnLog.disabled = false;
    }
}
    return {loginForm, setDisabledButtonState}

}






