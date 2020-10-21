import { initClients } from "./clients/clients";
import { ROOT_NODE } from "./constants";
import { initForm } from "./form/form";
import "./././assets/styles/styleRoot.scss";


const router = () => {
   
    if (window.location.hash ===`#/clients`) {
        logProtector(initClients);
    } if (window.location.hash ===`#/form`) {
        initForm();
    } else {
        ROOT_NODE.innerHTML =`<div>Page not found </div>`
    }
}

export const initRouter = () => {
    window.addEventListener("hashchange", router);
    router();
};

export const logProtector = (initFn) => {
    const user = {};

    if (user) {
        initFn()
    } else {
        window.location.hash = `/form`;
    }
};