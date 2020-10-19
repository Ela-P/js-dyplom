import {makeTable} from "./createClients";
import "./clients.scss";
export const arrUsers = [
    {
        name: "Alex",
        company: "Google",
        email: "alex@gmail.com",
        phone: +375292929292,
        balance: "$130,323",
        isActive: false,
        gender: "male"
    },

    {
        name: "Oleg",
        company: "Amazon",
        email: "ole@gmail.com",
        phone: +3752929255555,
        balance: "$11,353",
        isActive: true,
        gender: "male"
    },

    {
        name: "Olesya",
        company: "Apple",
        email: "oles@gmail.com",
        phone: +375295556898,
        balance: "$55,355",
        isActive: true,
        gender: "female"
    },

    {
        name: "Pit",
        company: "Epam",
        email: "pit@gmail.com",
        phone: +375292986965,
        balance: "$15,236",
        isActive: false,
        gender: "male"
    },

    {
        name: "Kolya",
        company: "Odopod",
        email: "K.ol@gmail.com",
        phone: +375292523696,
        balance: "$19,237",
        isActive: false,
        gender: "male"
    },

    {
        name: "Vika",
        company: "Blammo",
        email: "V.blam@gmail.com",
        phone: +375291236361,
        balance: "$15,346",
        isActive: false,
        gender: "female"
    },
];
export const initClients = () => {
    makeTable(arrUsers);
    makeClientsTotal(arrUsers);
};