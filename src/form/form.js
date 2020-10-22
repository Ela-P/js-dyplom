import { initLogin } from "./login";
import { initRegister } from "./register";
import {ROOT_NODE} from "../constants";
import "./form.scss";


const template = `<div class="containerBtn">
<div class="buttons">
<a href="#formRegister"><button class="click" class="clickReg" id="btnReg"> Register </button></a>
<a href="#loginForm"><button class="click"  class="clickLog" id="btnLog"> Login </button></a>
</div>
</div>
<div class="container ">
<form class="view-form" name="register" id="registerForm" novalidate>
<input class="view-input" name="login" placeholder="Login" type="login" id="loginInput">
<input class="view-input" name="name" placeholder="Name" type="name" id="nameInput">
<input class="view-input" name="age" placeholder="Age" type="age" id="ageInput">
<input class="view-input" name="email" placeholder="Email" type="email" id="emailInput">
<input class="view-input" name="city" placeholder="City" type="City" id="cityInput">
<input class="view-input" name="password" placeholder="Password" type="password" id="passwordInput">
<input class="view-input" name="repeatPassword" placeholder="Repeat Password" type="RepeatPassword" id="repeatPassword">
<button class="view-button" id="btnR"> Register </button>
</form>

<form class="view-form" name="login" id="loginForm" novalidate>
<input class="view-input" name="login" placeholder="Login" type="login" id="loginInput"> 
<input class="view-input" name="email" placeholder="Email" type="email" id="loginEmailInput">
<input class="view-input" name="password" placeholder="Password" type="password" id="loginPasswordInput">
<button class="view-button" id="btnL"> Login </button>
</form>
</div>
`;

export const initForm = () => {
    ROOT_NODE.innerHTML = template;

    const { loginForm, setDisabledButtonState } = initLogin();
    const { registerForm, registerButtonDisabled } = initRegister();


    const btnReg = document.getElementById("btnReg");
    const btnLog = document.getElementById("btnLog");

    btnLog.addEventListener("click", setLoginFormActive);
    btnReg.addEventListener("click", setRegisterFormActive);

    setLoginFormActive();

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
    
   
    
   
}
  