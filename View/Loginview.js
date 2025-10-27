function updateViewLogin(){
    let html = /*html*/ `
    
        <div>
        ${showHeader()}<br><br><br><br><br>
        <br>
        Username <br>
        <input 
            type="text"
            ><br>
        Password <br>
        <input 
            type="text"
            ><br>

        <button type="button" onclick="login()">Login</button>
        <button type="button" onclick="model.app.currentPage='${'registerPage'}' updateView()">Register</button><br><br>
        <button type="button" onclick="model.app.currentPage='${'contactPage'}' updateView()">Kontakt oss</button>
        </div>
        `;
    document.getElementById("app").innerHTML = html;
    };

    function createBanner(){
        return /*html*/ `
        <div>
            Banner
            <div>Logo</div>
        </div>
        `;
    };