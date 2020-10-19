export function makeClientsTotal(arrUsers, arrUsersView) {
    let genderMaleTotal = 0;
    let genderFemaleTotal = 0;
    let maxTotalUsersBalance = 0;

    const span = document.createElement('span');
    for (let i = 0; i < arrUsers.length; i++) {
        if (arrUsers[i].gender === "male") {
            genderMaleTotal = genderMaleTotal + 1;
            const pMale =  document.createElement("p");
            pMale.innerHTML = genderMaleTotal;
            span.appendChild(pMale);
        }

        if (arrUsers[i].gender === "female") {
            genderFemaleTotal = genderFemaleTotal + 1;
            const pFemale =  document.createElement("p");
            pFemale.innerHTML = genderFemaleTotal;
            span.appendChild(pFemale);
        }

        if (arrUsers[i].balance > maxTotalUsersBalance) {
            maxTotalUsersBalance = arrUsers[i].balance;
            const pUsersBalance =  document.createElement("p");
            pUsersBalance.innerHTML = maxTotalUsersBalance;
            span.appendChild(pUsersBalance);
        }
         if (!arrUsersView) {
            makeTable(arrUsers[i], arrUsers)
         }

      return document.body.appendChild(span);
    }
}
