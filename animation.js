
function toggleCssMenu(icon) {
    const cssmenu = document.getElementById('cssmenu');
    if (icon.className.indexOf('active') == -1) {
        icon.className = 'menu-icon active';
        cssmenu.style.display = "block";
        cssmenu.style.backgroundColor = "#230327";
        setTimeout(function(){cssmenu.className = 'active';},0);
        
    }
    else {
        icon.className = 'menu-icon';
        cssmenu.className = '';
        setTimeout(function(){cssmenu.style.display = "none";},411);
    }
}

