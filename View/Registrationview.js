//drawRegistrationPage()
function drawRegistrationPage(){
    document.getElementById('app').innerHTML = /*html*/ `
    ${showHeader()}<br><br><br><br><br>
        <div class="registrationBackground">
            <div class="center">
                <p>Name</p>
                <input 
                    type="text" 
                    oninput="model.viewstate.registerUser.name = this.value"><br>

                <p>Password</p>
                <input 
                    type="password" 
                    oninput="model.viewstate.registerUser.password = this.value"><br>

                <p>Repeat Password</p>
                <input 
                    type="password" 
                    oninput="model.viewstate.registerUser.repeatPassword = this.value"><br>

                <p>Email</p>
                <input 
                    type="text" 
                    oninput="model.viewstate.registerUser.email = this.value"><br>

                <p>Tlf.nr</p>
                <input 
                    type="number" 
                    oninput="model.viewstate.registerUser.tlfNr = this.value"><br><br>
                    <button onclick="registerUser()">Register New User</button>
                    <button onclick="HomePageView()">Go back</button>
            </div>
        </div>`
};
