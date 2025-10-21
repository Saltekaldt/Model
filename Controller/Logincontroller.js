function login(){
    const emailInput = model.viewState.userLogin.email;
    const passwordInput = model.viewState.userLogin.password;

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