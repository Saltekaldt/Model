function registerUser(){ 
    let newUser= model.viewstate.registerUser

    if (newUser.name == ''){
        alert("You have not filled out the registration")
        return;
    }
    if (newUser.email == ''){
        alert("You have not filled out the registration")
        return;
    }
    if (newUser.tlfNr == ''){
        alert("You have not filled out the registration")
        return;
    }
    if (newUser.password !== newUser.repeatPassword || newUser.password == '') {
    alert("Passwords do not match.");
    return;
    }
        
    model.users.push({...newUser});

    newUser = {
        name: '',
        password: '',
        repeatPassword: '',
        email: '',
        tlfNr: '',
        };
     profileView();
}