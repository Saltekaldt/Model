function logout(){
    model.app.currentUser ={
            email: '',
            password: '',
            repeatPassword: '',
            email: '',
            tlfNr: '',
        }
    HomePageView()

}

function printYourBag() {
  const user = model.app.currentUser;
  const discs = model.database;
  const userDiscs = discs.filter(ting => ting.navn === user.name);
  const bagContainer = document.querySelector('.bagDiscs');

  if (!bagContainer) return;


  let html = '';

  if (userDiscs.length === 0) {
    html = `<p>No discs found in your bag.</p>`;
  } else {
    for (let i = 0; i < userDiscs.length; i++) {
      const disc = userDiscs[i];
      html += /*html*/`
        <div class="disc">
          <div class="status">
            <label>Status:</label> ${disc.status}
          </div>
          <div class="disc-info">
            <span class="disc-name">${disc.name}</span>
            <span>${disc.dato}</span>
            <button onclick="donateDisc(${disc.id})">Doner</button>
          </div>
          <button onclick="removeDisc(${disc.id})">x</button>
        </div>
      `;
    }
  }

  // insert final HTML once
  bagContainer.innerHTML = html;
}

function removeDisc(){

}
function donateDisc(){

}

function countDown(){

}

function editProfile(){

}
function addDiscToBag(){

}

