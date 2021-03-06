import { ROOT_NODE } from "../constants";
import {arrUsers} from "./clients";
import {makeUsersTotal} from "./clientsTotal";
 
const template = `<div class= "totalUsers">
<div class= "usersView"> Male: <span id="male"></span></div>
<div class= "usersView"> Female: <span id="female"></span></div>
<div class= "usersView"> Max balance $: <span id="UsersBalance"></span></div>
</div>`;
export function makeTable(arrUsers)    {
  ROOT_NODE.innerHTML = template;
    const table = document.createElement('table');
    for (let i = 0; i < arrUsers.length; i++) {
        const row = document.createElement("tr");
        const tdDelete = document.createElement('td');
        const btn = document.createElement("button");
        btn.innerHTML = "Delete";
        row.appendChild(tdDelete);
        
        ROOT_NODE.appendChild(table);

        makeUsersTotal(arrUsers);

     
        
        const { name, company, email, phone, balance } = arrUsers[i];
        for (const value of [name, company, email, phone, balance]) {
            const cell = document.createElement("td");
            cell.innerHTML = value;
            row.appendChild(cell);
            
        }
        const btnCell = document.createElement("td");
        btnCell.appendChild(btn);
        row.appendChild(btnCell);
        table.appendChild(row);
       
        btn.addEventListener("click", function(event) {
          const indexToDelete =  arrUsers.findIndex((user) => 
          user.email === email);
          arrUsers.splice(indexToDelete, 1);
          row.remove();
          makeUsersTotal(arrUsers);
    });
    
    if (arrUsers[i].isActive === true ) {
      row.classList.add("activUsers");
      } else {
      row.classList.add("noActivUsers");
      }
  }
}
