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

function printYourBag(){
 let html = ''   
 const user = model.app.currentUser
 const discs = model.database
 const userDiscs = discs.filter(disc => disc.navn === user.name)
 const bag = document.querySelector('#bag')

 for(let i = 0; i <userDiscs.length; i++){
    const disc = userDiscs[i]
    html+= /*html*/`
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
    if (userDiscs.length === 0) {
    html = `<p>No discs found in your bag.</p>`;
  }
    bag.innerHTML += html;
  }
 
}

function holdDisc(){

}
function removeDisc(){

}

function countDown(){

}

function editProfile(){

}
function addDiscToBag(){

}

