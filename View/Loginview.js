function updateViewLogin(){
    let html = /*html*/ `
    
        <div>
        ${showHeader()}<br><br><br><br><br>
        <br>
        Email <br>
        <input 
            oninput="model.viewstate.userLogin.email = this.value"
            type="text"
            ><br>
        Password <br>
        <input
            oninput="model.viewstate.userLogin.password = this.value"
            type="text"
            ><br>

        <button type="button" onclick="login()">Login</button>
        <button type="button" onclick="model.app.currentPage='${'registerPage'}'; updateView()">Register</button><br><br>
        <span class="login-error"></span><br><br>
        <button type="button" onclick="model.app.currentPage='${'contactPage'}'; updateView()">Kontakt oss</button>
        </div>
        `;
    document.getElementById("app").innerHTML = html;
};
