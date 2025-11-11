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
  const discs = user.bagDiscs;
  const bagContainer = document.querySelector('.bagDiscs');

  if (!bagContainer) return;

  let html = '';

  if (!discs || discs.length === 0) {
    html = `<p>No discs found in your bag.</p>`;
  } else {
    for (let i = 0; i < discs.length; i++) {
      const disc = discs[i];
      html += /*html*/`
        <div class="disc">
          <div class="status">
            <label>Status:</label> ${disc.status}
          </div>
          <div class="disc-info">
            <span class="disc-name">${disc.name}</span>
            <span>${disc.dato || ''}</span>
            <button onclick="pushDisc(${disc.id})">Registrer i database</button>
          </div>
          <button onclick="">x</button>
        </div>
      `;
    }
  }

  bagContainer.innerHTML = html;
}

function removeDisc(id){
const index = model.database.findIndex(index => index.id === id)
model.database.splice(index,1)
PrintProfileDisc()
}
function donateDisc(id){
const index = model.database.findIndex(index => index.id === id)
const donatedDisc = model.database.splice(index, 1)[0];

model.donatedDiscs.push(donateDisc)
PrintProfileDisc();
}

function PrintProfileDisc() {
  const user = model.app.currentUser;
  const discs = model.database;
  const userDiscs = discs.filter(ting => ting.navn === user.name);
  const discContainer = document.querySelector('.disc-container');
  let html = '';

if (userDiscs.length === 0) {
  html = `<p>No discs found in your bag.</p>`;
} else {
  for (let i = 0; i < userDiscs.length; i++) {
    const disc = userDiscs[i];
    html += /*html*/`
      <div class="disc">
        <div class="status">
          <label>Status:</label> ${disc.status || 'Ukjent'}
        </div>
        <div class="disc-info">
          <span class="disc-name">${disc.navn}<br> ${disc.name}</span>
          <span>${disc.dato || ''}</span>
          <button class="donateDiscButton" onclick="donateDisc(${disc.id})">Doner</button>
        </div>
        <button onclick="removeDisc(${disc.id})">x</button>
      </div>
    `;
  }
}

  discContainer.innerHTML = html;
}



function addDiscToBag(){
  const NewDisc= {...model.viewstate.registerfoundDisc};
  const bagDiscs= model.app.currentUser.bagDiscs;

  bagDiscs.push(NewDisc)
  model.viewstate.registerfoundDisc = {
           name: '',
           bane: '',
           tlf: '',
           email: '',
           farge: '',
           status: '',
           dato: '',
        }
  printYourBag()
  returnToBag()
}


function closeBag(){
  const bag = document.querySelector('#bag')
  document.body.removeChild(bag)
}


function returnToBag(){
  const bagRegister = document.querySelector('#bagRegister')
  document.body.removeChild(bagRegister)
}
function pushDisc(id) {
  const user = model.app.currentUser;
  const bagDiscs = user.bagDiscs;
    
  // Find the disc in the user's bag
  const disc = bagDiscs.find(d => d.id === id);
  disc.status = 'savnet'
  if (disc) {
    // Create a copy so it's not linked by reference
    const donatedDisc = { ...disc };

    // Push the copy to the main database
    model.database.push(donatedDisc);

    // Optional: show a message
    alert(`Disc "${disc.name}" has been registered in the database!`);
  } else {
    console.warn("Disc not found in bag.");
  }

  profileView()
}