
const app = document.getElementById('app')

editProfileView()
function editProfileView(){
  const user = model.currentUser;
  const edit = model.viewState.editProfile;

  app.innerHTML = /*HTML*/`
  
  
  <h1 class="editProfileHeader">Edit your profile</h1>

  <img class="editProfilePic"
      src="${user.profileImage}"
      alt="profileImage"
   >

   <input type="file" id="profileImageInput" accept="image/*">

   <div class="editUsernameDiv">
        <label for="username">Username:</label>
        <br>
        <input
            id="usernameInput"
            type="text"
            placeholder="${edit.username || user.username}"
        >
   
   </div>

   <button class="saveProfileButton" onclick="saveProfile()">Save</button>
   <button class="goBackButton" onclick="goHome()">Back</button>
  `
}