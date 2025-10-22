const app = document.getElementById('app')

HomePageView()
function HomePageView(){
  app.innerHTML = /*HTML*/`
  ${(showHeader())}

  <div class="headerContainerDiv">

      <h1>Welcome to the wonderful world of Lost&Found discs</h1>

      <p>Here you can find our ever-growing collection of lost discs,
        eager to be returned to their owners.
        Sign in or Register to browse thousands of lost discs</p>
      <br>
      <img src="Images/20201229_183308.jpg" 
           class="homepageImage">

  </div>
 `; 
}

function showHeader(){
  return /*HTML*/`

  <header class="logoContainerDiv">

    <div  class="logoDiv">
          <img src='Images/img2.png'
                alt = 'logo'
          class="logoImage" >
          <span class="logoText">Lost&Found DiscGolf</span>
  <header style="
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        background-color: #908759ff;
        color: white;
        padding: 15px 30px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        box-shadow: 0 2px 10px rgba(0,0,0,0.3);
        z-index: 1000;
      ">
    <div style="display:flex; align-items:center; gap:10px;">
    <img src='Images/img2.png'
          alt = 'logo'
          style='height:70px; width:70px; border-radius : 50px' >
          <span style="font-size: 1.5em; font-weight: bold">Lost&Found DiscGolf</span>
    </div>
        <a href="#" style="color: white; margin-left: 300px"onclick="updateViewLogin()">Sign in</a>
        <a href="#" style="color: white; margin-left: 1px"onclick="drawRegistrationPage()">Register</a>
    <div>
    </div>

        <a href="#" class="headerAnchor1">Sign in</a>
        <a href="#" class="headerAnchor2">Register</a>
  </header>
  
  `

}