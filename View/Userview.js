//profileView()
function profileView(){
    document.getElementById('app').innerHTML=/*html*/`
    ${showHeader()}<br><br><br><br><br>
  <div class="profilePage">
    <main class="main">
      <div class="sidebar">
        <div class="userFrame">
          <div class="avatar"></div>
          <p>Username</p>
        </div>
        <button onclick="">Logout</button>
        <button onclick="">Database</button>
        <button onclick="">Kontakt oss</button>
        <button onclick="">Registrer found disc</button>
      </div>

      <section class="content">
        <h2>Welcome: user</h2>
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
            <button>✖</button>
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
            <button>✖</button>
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
            <button>✖</button>
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