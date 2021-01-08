/////////////////////*VARIABLES*/////////////////////   
        
        
    var mainButton = document.getElementById('main-button');
    var mainMenu = document.getElementById('main-menu');
    var mainBackground = document.getElementById('main-background');
    var menuElements = document.querySelectorAll('.menu-elements');
    var elementContainer = document.getElementById('element-container');
    var containerOne = document.getElementById('container-1');
    var containerTwo = document.getElementById('container-2');
    var containers = document.querySelectorAll('.container');
    var taxiButton = document.getElementById('taxi-button');
    var taxiLabel = document.getElementById('taxi-label');
    var slideButtonLeft = document.getElementById('slide-button-left');
    var slideButtonRight = document.getElementById('slide-button-right');

        
        
///////////////////*MENU COMMANDS*////////////////////   
        
        
    function openMenu(){
                    mainButton.style.transition = "margin-left 1s ease 0s";
                    mainButton.style.height = "0vh";
                    mainMenu.style.height = '90vh';
                    mainMenu.style.transition = 'height .3s ease-out';
                    mainMenu.style.width = '75vw';
                    mainMenu.style.opacity = '1';
                    mainBackground.style.background = '#252c3e';
                    mainBackground.style.transition = 'background .5s .2s';
    }
    function closeMenu(){
                    mainMenu.style.width = '50vw';
                    mainMenu.style.height = '0vh';
                    mainMenu.style.opacity = '0';
                    mainMenu.style.transition = 'width .3s ease-out, height .3s ease-out .3s, opacity 2s 1s';
                    mainButton.style.height = "12vh";
                    mainButton.style.transition = "height 1s ease .4s";
                    mainBackground.style.background = '#283044';
                    mainBackground.style.transition = 'background 1s .4s';
                    elementContainer.style.height = '0vh';
    }
        
///////////////////*MENU BUTTONS*////////////////////   

        
    for (var i = 0; i < menuElements.length; i++) {
                menuElements[i].onclick = function(){
                    elementContainer.style.opacity = '1';
                    elementContainer.style.height = '90vh';
                    elementContainer.style.width = '100vw';
                    elementContainer.style.transition = 'opacity .7s ease-in, height .4s ease-out';
                    mainMenu.style.width = '50vw';
                    mainMenu.style.height = '0vh';
                    mainMenu.style.opacity = '0';
                    mainMenu.style.transition = 'width .3s ease-out, height .3s ease-out .3s, opacity 2s';
                    var rasporedLinije = this.id;
                    containerOne.style.backgroundImage = 'url(rasporedi/' + rasporedLinije + '_1.jpg)';
                    containerTwo.style.backgroundImage = 'url(rasporedi/' + rasporedLinije + '_2.jpg)';
                }
    }
    
    elementContainer.onclick = function(){
        if(event.target.id == 'slide-button-left' || event.target.id == 'slide-button-right'){
                    return;
        }else{
                    this.style.width = '50vw';
                    this.style.height = '0vh';
                    this.style.opacity = '0';
                    this.style.transition = 'height .2s ease-out .3s, width .3s ease-out, opacity .1s 1s';
                    mainButton.style.height = "12vh";
                    mainButton.style.transition = "height 1s ease .4s";
                    mainBackground.style.background = '#283044';
                    mainBackground.style.transition = 'background 1s .4s';
                    containerOne.style.backgroundImage = null;
                    containerTwo.style.backgroundImage = null;
        }
    }
    
    
    ///////////////////*CONTAINER SWIPES*////////////////////   

    
    function swipeLeft(){
                    containerOne.style.marginLeft = '-100vw';
                    containerOne.style.transition = 'margin-left .5s ease-out';
    }

    function swipeRight(){
                    containerOne.style.marginLeft = '0vw';
                    containerOne.style.transition = 'margin-left .5s ease-out';

    }
    
    containerOne.addEventListener('swiped-left', swipeLeft);
    containerTwo.addEventListener('swiped-right', swipeRight);
    
     ///////////////////*TAXI BUTTON*//////////////////// 

    taxiButton.onmouseover = function(){
        taxiLabel.style.opacity = '0';
        taxiLabel.style.transition = 'opacity .3s ease-out .3s';
    }
    
    taxiButton.onmouseout = function(){
        taxiLabel.style.opacity = '1';
        taxiLabel.style.transition = 'opacity .3s ease-out .5s';
    }
        
        
    var currentTime = new Date();
                    if(currentTime.getHours() >= 0 && currentTime.getHours() <= 5 ){
                        taxiButton.style.display = "inherit";
                        taxiLabel.style.display = "inherit";

                    }
                    else {  
                        taxiButton.style.display = "none";
                        taxiLabel.style.display = "none";

                    }
        