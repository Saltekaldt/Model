function login(){
    const emailInput = model.viewstate.userLogin.email;
    const passwordInput = model.viewstate.userLogin.password;
    const users = model.users;

    if (!emailInput || !passwordInput){
        document.querySelector(".login-error").innerHTML = "Vennligst fyll inn alle feltene.";
        return;
    }

    if (!userExists(emailInput, passwordInput)){
        document.querySelector(".login-error").innerHTML = "Feil brukernavn eller passord.";
        return;
    }

    else if (userExists(emailInput, passwordInput)){
        for (let user of users){
            if(emailInput == user.email && passwordInput == user.password){
                console.log("bruker funnet 2");
                model.app.currentUser = user;
                model.viewstate.userLogin.email = "";
                model.viewstate.userLogin.password = "";
                model.app.currentPage = 'profilePage';
                updateView();
            }
        }
    };
};

function userExists(email, password){
    const users = model.users;
    for(let user of users){
        if(email == user.email && password == user.password){
            return true;
        }
    };
    return false;
}