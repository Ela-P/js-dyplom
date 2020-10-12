import { initLogin, user  } from "./login";
import { initRegister } from "./register";

import "./assets/styles/style.scss";


const {loginForm, setDisabledButtonState} = initLogin();
const {registerForm, registerButtonDisabled} = initRegister();


const btnReg = document.getElementById("btnReg");
const btnLog = document.getElementById("btnLog");


function setLoginFormActive() {
    loginForm.style.display = "block"; 
    registerForm.style.display = "none"; 
    btnLog.classList.add("active-btn"); 
    btnReg.classList.remove("active-btn"); 
  
    setDisabledButtonState();
}

function setRegisterFormActive() {
    loginForm.style.display = "none"; 
    registerForm.style.display = "block"; 
    btnLog.classList.remove("active-btn");
    btnReg.classList.add("active-btn"); 
    registerButtonDisabled();
}

//login 
btnLog.addEventListener("click", setLoginFormActive);
btnReg.addEventListener("click", setRegisterFormActive);

