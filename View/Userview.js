
profileView()
function profileView() {
  const user = model.app.currentUser;
  document.getElementById('app').innerHTML = /*html*/`
    ${showHeader2()}<br><br><br><br><br>
    <div class="profilePage">
      <main class="main">
        <div class="sidebar">
          <div class="userFrame">
            <img src="Images/Profilbilde1.jpg" class="avatar">
            <p>${user.name}</p>
          </div>
          <button class="userOptionButton" onclick="editProfileView()">Edit profile</button>
          <button class="userOptionButton" onclick="databaseview()">Database</button>
          <button class="userOptionButton" onclick="KontaktView()">Kontakt oss</button>
          <button class="userOptionButton" onclick="registerDiscView()">Registrer found disc</button>
          <button class="userOptionButton" onclick="openBag()">open bag</button>
        </div>

        <section class="content">
          <h2>Welcome: ${user.name}</h2>
          <p>Discs with your number</p>

          <div class="disc-container"></div>

          <div>
            <button>Doner selected</button>
            <button>Hold selected</button>
            <button>Mail selected</button>
          </div>
        </section>
      </main>
    </div>
  `;

  PrintProfileDisc();
}

function openBag() {
  if (document.querySelector('#bag')) return

  const bag = document.createElement('div')
  bag.id = 'bag'

  bag.innerHTML = /*html*/`
    <div class='mainBag'>
      <button onclick="closeBag()">close</button>
      <h2>Your Bag</h2>
      <div class="bagDiscs"></div>
      <div>
        <button onclick="registerDiscToBag()">register New disc</button>
      </div>
    </div>
  `;
  document.body.appendChild(bag);

  printYourBag();
}

function showHeader2(){
  return /*HTML*/`

  <header class="logoContainerDiv">

    <div  class="logoDiv">
          <img src='Images/img2.png'
                alt = 'logo'
          class="logoImage"
          onclick="profileView()" >
          <span class="logoText" onclick="profileView()">Lost&Found DiscGolf</span>
  
    
   
        
    </div>


        <a href="#" onclick="logout()" class="headerAnchor2">Logout</a>
  </header>
  
  `

}
function registerDiscToBag(){
  if (document.querySelector('#bagRegister')) return

  const bagRegister = document.createElement('div')
  bagRegister.id = 'bagRegister'

  bagRegister.innerHTML = /*html*/`
        <div class="bagInputs">
            <div class="center">
            <h1>Register new disc</h1>
                <p>Status</p>
                <input 
                    type="text" 
                    oninput="model.viewstate.registerfoundDisc.status = this.value"><br>

                <p>Bane</p>
                <input 
                    type="text" 
                    oninput="model.viewstate.registerfoundDisc.bane = this.value"><br>

                <p>farge</p>
                <input 
                    type="text" 
                    oninput="model.viewstate.registerfoundDisc.farge = this.value"><br>

                <p>type</p>
                <select onchange="model.viewstate.registerfoundDisc.name = this.value">
                 <option value="Putter">Putter</option>
                 <option value="driver">driver</option>
                 <option value="mid-ranges">mid-ranges</option>
                 <option value="fairway">fairway</option>
                </select>

                <p>dato</p>
                <input 
                    type="number" 
                    oninput="model.viewstate.registerfoundDisc.tlfNr = this.value"><br><br>


                    <button onclick="addDiscToBag()">add new disc</button>
                    <button onclick="returnToBag()">Go back</button>
            </div>
        </div>

    
    `;
  document.body.appendChild(bagRegister);



}