export function initRegister() {
    const registerform = document.forms.register;
    const registerForm = document.getElementById("registerForm");
    const btnReg = document.getElementById("btnReg");

const formHelper = {
    login: {
        value: "",
        valid: false,
        checkValidation() {
            this.login.valid = this.login.value !== "";
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
            this.age.valid = this.age.value !== "";
        },
    },
    email: {
        value: "",
        valid: false,
        checkValidation() {
            const regex =/^(([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5}){1,25})+([;.](([a-zA-Z0-9_\-\.]+)@{[a-zA-Z0-9_\-\.]+0\.([a-zA-Z]{2,5}){1,25})+)*$/g;
            this.email.valid = regex.test(this.email.value);
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
            name: this.name.value,
            email: this.email.value,
            password: this.password.value,
        };
    },
};

// слушатели:
//на форму-> передает из импутов в хелпер value & name
registerform.addEventListener("input", (event) => {
    const value = event.target.value;
    const name = event.target.name;
  
    formHelper[name].value = value;
    const bindValid = formHelper[name].checkValidation.bind(formHelper);
    bindValid(value); 
    handleAddValid(event.target, formHelper[name].valid)

    btn.disabled = !formHelper.checkFormValid(); 
    classInvalidAdd(event.target, formHelper[name].valid); 
});

registerform.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = formHelper.getData();
     console.log(data);
});

function handleAddValid(node, isValid) {
    if (!isValid && !node.classList.contans("invalid")) {
        node.classList.add("invalid");
    }
    if (isValid && node.classList.contans("invalid")) {
        node.classList.remove("invalid");
    }
}
return {registerform, }
} 

