
const counters  = document.querySelectorAll('.counter');

counters.forEach((counter)=>{
    counter.innerHTML = 0;
    
    const updateCounter = () =>{
        const targetCount  = Number(counter.getAttribute('data-target'));

        const firstCount = Number(counter.innerHTML);
        
        const incr = targetCount/100;

        if(firstCount < targetCount){
            counter.innerHTML = `${Math.round(firstCount + incr)}`;
            setTimeout(updateCounter,10);
        }
        else{
            counter.innerHTML = targetCount;
        }
    }
    updateCounter();
            
});



var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}