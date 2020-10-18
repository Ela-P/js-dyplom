import { INVALID_CLASS } from "../constants";

export function initLogin() {
   



    const loginForm = document.getElementById("loginForm");
    const btnL = document.getElementById("btnL");

    const loginEmail = document.getElementById("loginEmailInput");
    const loginPassword = document.getElementById("loginPasswordInput");

    loginEmail.addEventListener("input", eventHandler);
    loginPassword.addEventListener("input", eventHandler);

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

    function setDisabledButtonState() {
    if (loginEmail.value === "" || loginPassword.value === "") {
        btnL.disabled = true;
    } else {
        btnL.disabled = false;
    }
    }
    return { loginForm, setDisabledButtonState };

}
