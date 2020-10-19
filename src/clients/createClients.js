import {arrUsers} from "./clients";

export function makeTable(arrUsers)    {
    const table = document.createElement('table');
    for (let i = 0; i < arrUsers.length; i++) {
        const row = document.createElement("tr");
        const tdDelete = document.createElement('td');
        const btn = document.createElement("button");
        btn.innerHTML = "Delete";
        
        const { name, company, email, phone, balance } = arrUsers[i];

        for (const value of [name, company, email, phone, balance]) {
            const cell = document.createElement("td");
            cell.innerHTML = value;

            row.appendChild(cell);
        }

        table.appendChild(row);
        
        row.appendChild(tdDelete);
       
        btn.addEventListener("click", function(event) {
          for (const i = arrUsers.length -1; i >= 0; i--) {
            if (arrUsers[i] === event) {
             const indexToDelete =  arrUsers.indexOf(arrUsers[i]);
             arrUsers.splice(indexToDelete, 1);
        }
      }

    });
      return document.body.appendChild(table);
    }
  }
