import { initClients } from "./clients/clients";
import { ROOT_NODE } from "./constants";
import { initForm } from "./form/form";
import "./././assets/styles/styleRoot.scss";


const template = `<nav class= "rootNav">
<a class= "navView" href="#/form"> Form </a>
<a class= "navView" href="#/clients"> Clients </a>
</nav> `;

export const initRouter = () => {
    ROOT_NODE.innerHTML = template;
    window.addEventListener("hashchange", (event) => {
        if (window.location.hash ===`#/clients`) {
            initClients();
        } if (window.location.hash ===`#/form`) {
            initForm();
        } else {
            ROOT_NODE.innerHTML =`<div>Page not found </div>`
        }
    });
};