import {arrUsers} from "./clients";
export function makeTable(arrUsers)    {
    const table = document.createElement('table');
    for (let i = 0; i < arrUsers.length; i++) {
        const row = document.createElement("tr");
        //const currentUser = arrUsers[i];

        const { name, company, email, phone, balance } = arrUsers[i];

        for (const value of [name, company, email, phone, balance]) {
            const cell = document.createElement("td");
            cell.innerHTML = value;

            row.appendChild(cell);
        }

        table.appendChild(row);
        const tdDelete = document.createElement('td');
        tdDelete.innerHTML = '<button id="delBut">Delete</button>';
        row.appendChild(tdDelete);
    }
    return document.body.appendChild(table);
    }


    const button = document.getElementById('delBut');
    button.addEventListener("click", removeFormArr);

 function removeFormArr(arrUsers, val) {
    for (const i = arrUsers.length -1; i >= 0; i--) {
      if (arrUsers[i] === val) {
        arrUsers.splice(i, 1);
      }
    }
}
