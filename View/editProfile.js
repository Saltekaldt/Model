

editProfileView()
function editProfileView(){
  const user = model.app.currentUser;
  const edit = model.viewstate.editProfile;

  app.innerHTML = /*HTML*/`
  ${showHeader2()}<br><br><br><br><br>
  <br>
  
   <h1 class="editProfileHeader">Edit your profile</h1>

  <div class="editProfileContainer">

  <img class="editProfilePic"
      src="${user.img}"
      alt="profileImage"
   >

   <input type="file" id="profileImageInput" accept="image/*">

   <div class="editUsernameDiv">
        <label for="username">Username:</label>
        <br>
        <input
            oninput="model.app.currentUser.name = this.value"
            id="usernameInput"
            type="text"
            placeholder="${edit.username || user.username}"
        >
   
   </div>
   

   <button class="saveProfileButton" onclick="saveProfile()">Save</button>
   <button class="goBackButton" onclick="goHome()">Back</button>

   </div>
  `
}