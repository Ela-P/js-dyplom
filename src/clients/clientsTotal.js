const template = `<div class = "makeUsersTotal"> 
    <span id= "userTotal">
        <p id="male"></p>
        <p id="female"></p>
        <p id="UsersBalance"></p>
    </span>
    </div>
    `;


    function makeUsersTotal(arrUsers, arrUsersView)    {
    
    let genderMaleTotal = 0;
    let genderFemaleTotal = 0;
    let maxTotalUsersBalance = 0;


    for (let i = 0; i < arrUsers.length; i++) {
        if (arrUsers[i].gender === "male") {
            genderMaleTotal = genderMaleTotal + 1;
           
        }

        if (arrUsers[i].gender === "female") {
            genderFemaleTotal = genderFemaleTotal + 1;
           
        }

        if (arrUsers[i].balance > maxTotalUsersBalance) {
            maxTotalUsersBalance = arrUsers[i].balance;
            
        }
         if (!arrUsersView) {
            createUserRow(users[i], 1)
         }

        }
        const pGenderMaleTotal = document.getElementById("male");
        pGenderMaleTotal.innerText = genderMaleTotal;

        const pGenderFemaleTotal = document.getElementById("female");
        pGenderFemaleTotal.innerText = genderFemaleTotal;

        const pMaxTotalUsersBalance = document.getElementById("UsersBalance");
        pMaxTotalUsersBalance.innerText = maxTotalUsersBalance;

}