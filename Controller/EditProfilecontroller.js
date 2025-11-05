function saveProfile(){
  const usernameInput = document.querySelector("#usernameInput").value;
  const imageInput = document.querySelector("#profileImageInput").files[0];

  model.app.currentUser.username = usernameInput || model.currentUser.username;

  if (imageInput) {
    const reader = new FileReader();
    reader.onload = function (e) {
      model.currentUser.profileImage = e.target.result;
      finalizeSave();

    };
    reader.readAsDataURL(imageInput);
  }else {
    finalizeSave();
  }
}

function finalizeSave(){
  model.viewstate.editProfile = { img: "", username: ""};
  alert("profile updated");
}

function goHome(){
  profileView()
}