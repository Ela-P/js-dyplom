import {arrUsers} from "./clients";
 

export function makeTable(arrUsers)    {
    const table = document.createElement('table');
    for (let i = 0; i < arrUsers.length; i++) {
        const row = document.createElement("tr");
       const tdDelete = document.createElement('td');
        const btn = document.createElement("button");
        btn.innerHTML = "Delete";
        row.appendChild(tdDelete);
        
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
          const indexToDelete =  arrUsers.indexOf(arrUsers[i]);
          arrUsers.splice(indexToDelete, 1);
          row.remove();
    });
      
    
    }
    return document.body.appendChild(table);
}
