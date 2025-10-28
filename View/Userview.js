
profileView()
function profileView(){
  const user = model.app.currentUser
    document.getElementById('app').innerHTML=/*html*/`
    ${showHeader2()}<br><br><br><br><br>
  <div class="profilePage">
    <main class="main">
      <div class="sidebar">
        <div class="userFrame">
          <div class="avatar"></div>
          <p>Username</p>
        </div>
        <button onclick="logout()">Edit profile</button>
        <button onclick="databaseview()">Database</button>
        <button onclick="KontaktView()">Kontakt oss</button>
        <button onclick="registerDiscView()">Registrer found disc</button>
        <button onclick="openBag()">open bag</button>
      </div>

      <section class="content">
        <h2>Welcome: ${user.name}</h2>
        <p>Discs with your number</p>

        <div class="disc-container">
          <div class="disc">
            <div class="status">
              <label>Status:</label>
            </div>
            <div class="disc-info">
              <span class="disc-name">Disc 1</span>
              <span>7 dager til donasjon</span>
              <button onclick="">Doner</button>
            </div>
            <button>x</button>
          </div>

          <div class="disc">
            <div class="status">
              <label>Status:</label>
            </div>
            <div class="disc-info">
              <span class="disc-name">Disc 2</span>
              <span>7 dager til donasjon</span>
              <button>Doner</button>
            </div>
            <button>x</button>
          </div>

          <div class="disc">
            <div class="status">
              <label>Status:</label>
            </div>
            <div class="disc-info">
              <span class="disc-name">Disc 3</span>
              <span>7 dager til donasjon</span>
              <button>Doner</button>
            </div>
            <button>x</button>
          </div>
        </div>

        <div>
          <button>Doner selected</button>
          <button>Hold selected</button>
          <button>Mail selected</button>
        </div>
      </section>
    </main>
  </div>
    
    `
}
//openBag()
function openBag(){
  
  if(document.getElementById('bag')){
    return
  }
  
  const bag = document.createElement('div')
  bag.id = 'bag'
  bag.innerHTML = /*html*/`
    <div class='mainBag'>
      <button onclick="closeBag()">close</button>
      <h2>Your Bag</h2>
      <p>Legg til en for løkke som printer ut discer i model</p> 
      <div>
        <button>Your discs</button>
        <button>add New disc</button>
      </div>
    </div>
  `;
  document.body.appendChild(bag)



}
function closeBag(){
  const bagId = document.getElementById('bag')
  document.body.removeChild(bagId)
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