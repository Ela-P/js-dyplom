import { INVALID_CLASS, users } from "../constants";

export function initRegister() {
    const registerForm = document.getElementById("registerForm");
    const btnR = document.getElementById("btnR");

    const formHelper = {
    login: {
        value: "",
        valid: false,
        checkValidation() {
            const regex = /^[^\.\,]+$/
            this.login.valid = regex.test(this.login.value);
        }
    },
    name: {
        value: "",
        valid: false,
        checkValidation() {
            this.name.valid = this.name.value !== "";
        },
    },
    age: {
        value: "",
        valid: false,
        checkValidation() {
            const regex = /^[0-9][A-Za-z0-9 -]*$/g;
            this.age.valid = regex.test(this.age.value);
        },
    },
    email: {
        value: "",
        valid: false,
        checkValidation() {
            const regex =/^(([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5}){1,25})+([;.](([a-zA-Z0-9_\-\.]+)@{[a-zA-Z0-9_\-\.]+0\.([a-zA-Z]{2,5}){1,25})+)*$/g;
            this.email.valid = regex.test(this.email.value) && !_isEmailExist(this.email.value);
        },
    },
    city: {
        value: "",
        valid: false,
        checkValidation() {
            this.city.valid = this.city.value !== "";
        },
    },
    password: {
        value: "",
        valid: false,
        checkValidation() {
            this.password.valid = this.password.value !== "";
        },
    },
    repeatPassword: {
        value: "",
        valid: false,
        checkValidation() {
            this.repeatPassword.valid = 
            this.password.value === this.repeatPassword.value;
        },
    },
    checkFormValid() { 
        for (const key in this){
            if (typeof this[key] !== "function" && this[key].valid === false) {
                return false;
            }
        } 
        return true;
    },

    getData() {
        return {
            login: this.login.value,
            name: this.name.value,
            age: this.age.value,
            email: this.email.value,
            city: this.city.value,
            password: this.password.value,
        }
    }
    };


    function classInvalidAdd(domNode, isValid) {
    if (isValid) {
        domNode.classList.remove(INVALID_CLASS)
    } else {
        domNode.classList.add(INVALID_CLASS)
    }
    }
        // слушатели:
    //на форму-> передает из импутов в хелпер value & name
    registerForm.addEventListener("input", (event) => {
    const value = event.target.value;
    const name = event.target.name;
  
    formHelper[name].value = value;
    const bindValid = formHelper[name].checkValidation.bind(formHelper)();
    bindValid(value); 
    handleAddValid(event.target, formHelper[name].valid);
    registerButtonDisabled();

    btnR.disabled = !formHelper.checkFormValid(); 
    classInvalidAdd(event.target, formHelper[name].valid); 
    });

    registerForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const data = formHelper.getData();
         console.log(data);
    });

    function handleAddValid(node, isValid) {
        if (!isValid && !node.classList.contans(INVALID_CLASS)) {
        node.classList.add(INVALID_CLASS);
        }
        if (isValid && node.classList.contans(INVALID_CLASS)) {
        node.classList.remove(INVALID_CLASS);
        }
        }
    function registerButtonDisabled() {
    btnR.disabled = !formHelper.checkFormValid();
    }

    return {registerForm, registerButtonDisabled};
} 

