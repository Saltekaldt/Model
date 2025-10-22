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
  
    
   
        
    </div>

        <a href="#" onclick="updateViewLogin()" class="headerAnchor1">Sign in</a>
        <a href="#" onclick="drawRegistrationPage()" class="headerAnchor2">Register</a>
  </header>
  
  `

}