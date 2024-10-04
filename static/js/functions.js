
function goto(site){
    window.location.assign(site);
}
function gotoTopOfPage(){
    console.log( window.scrollY);
}
function openBottomNav(){
    const bottomNav = document.getElementById('bottomNav');
    
        bottomNav.style.display = 'flex';
        bottomNav.classList.remove('close'); 
        bottomNav.classList.add('open');
    
}

function closeBottomNav(){
    const bottomNav = document.getElementById('bottomNav');
        
        
        bottomNav.classList.remove('open');
        bottomNav.classList.add('close')
        setTimeout(()=>{ bottomNav.style.display = 'none';},1000);
}
