function editProfileView(){
  const user = Model.currentUser;
  const edit = model.viewstate.editProfile;

  app.innerHTML = /*HTML*/`
  
  
  <h1 class="editProfileHeader">Edit your profile</h1>

  <img class="profilePic"
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
            placeholder="${edit.username ||}"
        >
   
   </div>
  `
}