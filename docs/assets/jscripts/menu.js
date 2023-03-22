var isHidden = true;

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

function refresh() { location.reload(); }