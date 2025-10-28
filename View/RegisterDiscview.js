function registerDiscView(){
    let html = /*html*/`
    ${showHeader2()}<br><br><br><br><br>
    <h2>Register found disc</h2>
    Tlf. nr <input 
            type="text" 
            oninput="model.viewstate.registerFoundDisc.tlf=this.value"><br>
    Name <input 
            type="text"
            oninput="model.viewstate.registerFoundDisc.name=this.value"><br>
    Color <input 
            type="text"
            oninput="model.viewstate.registerFoundDisc.farge=this.value"><br>
    Bane <input 
            type="text"
            oninput="model.viewstate.registerFoundDisc.bane=this.value"><br>
    Dato <input 
            type="date"
            oninput=""><br>
    <button onclick="registerFoundDisc()">Register to database</button>
    `;
    document.getElementById('app').innerHTML= html
};
