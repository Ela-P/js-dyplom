
  export  function makeUsersTotal(arrUsers)    {
    const pGenderMaleTotal = document.getElementById("male");
    const pGenderFemaleTotal = document.getElementById("female");
    const pMaxTotalUsersBalance = document.getElementById("UsersBalance");

    let genderMaleTotal = 0;
    let genderFemaleTotal = 0;
    let maxTotalUsersBalance = 0;

    for (let i = 0; i < arrUsers.length; i++) {
        if (arrUsers[i].gender === "male") {
            genderMaleTotal = genderMaleTotal + 1;
            pGenderMaleTotal.innerText = genderMaleTotal;
        }

        if (arrUsers[i].gender === "female") {
            genderFemaleTotal = genderFemaleTotal + 1;
            pGenderFemaleTotal.innerText = genderFemaleTotal;
           
        }

        if (arrUsers[i].balance > maxTotalUsersBalance) {
            maxTotalUsersBalance = arrUsers[i].balance;
            pMaxTotalUsersBalance.innerText = maxTotalUsersBalance;
            
        }
    }
       
}