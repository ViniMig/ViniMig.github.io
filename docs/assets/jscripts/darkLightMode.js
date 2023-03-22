var isLight = "1";

function toggleDarkLight()
{
    var darkIcon = document.getElementById("dark-mode");
    var lightIcon = document.getElementById("light-mode");
    var mainContent = document.getElementsByTagName("main")[0];
    var mainHeaders = [
        mainContent.getElementsByTagName("h1"), mainContent.getElementsByTagName("h2"), mainContent.getElementsByTagName("h3"),
        mainContent.getElementsByTagName("h4"), mainContent.getElementsByTagName("h5"), mainContent.getElementsByTagName("h6")
    ];

    if (isLight == "1")
    {
        isLight = "0";
        setDark(darkIcon, lightIcon, mainHeaders);
    }
    else
    {
        isLight = "1";
        setLight(darkIcon, lightIcon, mainHeaders);
    }

    localStorage.setItem('isLight', isLight);
}

function setDark(darkIcon, lightIcon, mainHeaders)
{
    darkIcon.style.display = "none";
    lightIcon.style.display = "inline";
    document.body.style.backgroundColor = "#121212";
    document.body.style.color = "white";
    for (let i = 0; i < mainHeaders.length; i++)
    {
        let currentH = mainHeaders[i];
        for (let j = 0; j < currentH.length; j++)
        {
            currentH[j].style.color = "#ffccff";
        }
    }
}

function setLight(darkIcon, lightIcon, mainHeaders)
{
    darkIcon.style.display = "inline";
    lightIcon.style.display = "none";
    document.body.style.backgroundColor = "white";
    document.body.style.color = "rgb(96, 108, 113)";
    for (let i = 0; i < mainHeaders.length; i++)
    {
        let currentH = mainHeaders[i];
        for (let j = 0; j < currentH.length; j++)
        {
            currentH[j].style.color = "midnightblue";
        }
    }
}

function loadLight()
{
    var darkIcon = document.getElementById("dark-mode");
    var lightIcon = document.getElementById("light-mode");
    var mainContent = document.getElementsByTagName("main")[0];
    var mainHeaders = [
        mainContent.getElementsByTagName("h1"), mainContent.getElementsByTagName("h2"), mainContent.getElementsByTagName("h3"),
        mainContent.getElementsByTagName("h4"), mainContent.getElementsByTagName("h5"), mainContent.getElementsByTagName("h6")
    ];
    let temp = localStorage.getItem('isLight');
    if (temp != null)
        isLight = temp;
    
    if (isLight == "1")
        setLight(darkIcon, lightIcon, mainHeaders);
    else
        setDark(darkIcon, lightIcon, mainHeaders);  
}