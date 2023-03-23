var isHidden = true;
var currentWidth = window.innerWidth;

function displayMenu()
{
    var menuOpts = document.getElementById("nav-menu");

    if (isHidden){
        menuOpts.style.display = "flex";
        menuOpts.style.width = "100%";
    }
    else
        menuOpts.style.display = "none";
    
    isHidden = !isHidden;
}

function refresh() {
    if (window.innerWidth != currentWidth){
        currentWidth = window.innerWidth;
        location.reload();
    } 
}