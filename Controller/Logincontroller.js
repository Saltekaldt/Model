function login(){
    const emailInput = model.viewstate.userLogin.email;
    const passwordInput = model.viewstate.userLogin.password;

    const users = model.users;
    const usersLength = model.users.length;

    for(let user of users){
        if(emailInput == user.email){
            if(passwordInput == user.password){
                model.app.currentPage = "startPage";
                model.app.currentUser = `${user.name}`;
                updateView();
            };
        };
    };
};