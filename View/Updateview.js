function updateView(){
    let page = model.app.currentPage
    if(page == 'startPage'){
        HomePageView()
    }
    else if (page == 'registerPage'){
        drawRegistrationPage()
    }
    else if(page == 'contactPage'){
        KontaktView()
    }
    else if(page == 'loginPage'){
        updateViewLogin()
    }
    else if(page == 'profilePage'){
        profileView()
    }
};
