function registerUser(){ 
    const newUser= model.viewstate.registerUser;

    if (newUser.name == ''){
        alert("You have not filled out the registration");
        return;
    };
    if (newUser.email == ''){
        alert("You have not filled out the registration");
        return;
    };
    if (newUser.tlfNr == ''){
        alert("You have not filled out the registration");
        return;
    };
    if (newUser.password !== newUser.repeatPassword || newUser.password == '') {
    alert("Passwords do not match.");
    return;
    };
        
    model.users.push({...newUser});

    model.viewstate.registerUser = {
        name: '',
        password: '',
        repeatPassword: '',
        email: '',
        tlfNr: '',
        };
     profileView();
}
function setCurrentUser(){
    
}