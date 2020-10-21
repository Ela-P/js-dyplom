import { initClients } from "./clients/clients";
import { ROOT_NODE } from "./constants";
import { initForm } from "./form/form";
import "./././assets/styles/styleRoot.scss";


const template = ` <nav class= "rootNav">
    <a class= "navView" href="#/form"> Form </a>
    <a class= "navView" href="#/clients"> Clients </a>
    </nav> `;


const router = () => {
    ROOT_NODE.innerHTML = template;
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