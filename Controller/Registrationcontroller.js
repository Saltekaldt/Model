function registerUser(){    
    model.users.push({
    name: model.viewstate.registerUser.name,
    password: model.viewstate.registerUser.password,
    repeatPassword: model.viewstate.registerUser.repeatPassword,
    email: model.viewstate.registerUser.email,
    tlfNr: model.viewstate.registerUser.tlfNr
    });

    model.viewstate.registerUser= {
        name: '',
        password: '',
        repeatPassword: '',
        email: '',
        tlfNr: '',
        };
     drawRegistrationPage()
}