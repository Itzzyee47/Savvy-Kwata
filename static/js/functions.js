
function goto(site){
    window.location.assign(site);
}
function gotoTopOfPage(){
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Enables smooth scrolling
      });
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

function today() {
    var D = new Date();
    var dateDiv = document.getElementById('today');
  
    // Use toLocaleDateString to format the date with full day and month names
    let options = { weekday: 'long', year: 'numeric', month: 'long', day: '2-digit' };
    let date = D.toLocaleDateString('en-US', options);
  
    dateDiv.innerHTML = date;
  }
  

today()
