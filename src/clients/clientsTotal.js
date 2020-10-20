
  export  function makeUsersTotal(arrUsers)    {
    const spanGenderMaleTotal = document.getElementById("male");
    const spanGenderFemaleTotal = document.getElementById("female");
    const spanMaxTotalUsersBalance = document.getElementById("UsersBalance");

    let genderMaleTotal = 0;
    let genderFemaleTotal = 0;
    let maxTotalUsersBalance = 0;

    for (let i = 0; i < arrUsers.length; i++) {
        if (arrUsers[i].gender === "male") {
            genderMaleTotal = genderMaleTotal + 1;
            spanGenderMaleTotal.innerText = genderMaleTotal;
        }

        if (arrUsers[i].gender === "female") {
            genderFemaleTotal = genderFemaleTotal + 1;
            spanGenderFemaleTotal.innerText = genderFemaleTotal;
           
        }

        if (arrUsers[i].balance > maxTotalUsersBalance) {
            maxTotalUsersBalance = arrUsers[i].balance;
            spanMaxTotalUsersBalance.innerText = maxTotalUsersBalance;
            
        }
       
    }
       
  }      

