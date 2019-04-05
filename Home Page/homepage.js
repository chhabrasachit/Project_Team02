  
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}
 

function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";}
        
        function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
}

function waterlocator(){
    window.location.href = "file:///C:/Users/User/Documents/BBY_1930/week_1/Sprint-week-1/Water%20Locator/waterlocator.html";
}
function guidedlearning(){
    window.location.href = "file:///C:/Users/User/Documents/BBY_1930/week_1/Sprint-week-1/Guided%20Learning/Guided%20Learning%20part1.html";
}
function contact(){
    window.location.href = "file:///C:/Users/User/Documents/BBY_1930/week_1/Sprint-week-1/Contact%20Us/Contact%20Us.html";
}
function faq(){
    window.location.href = "file:///C:/Users/User/Documents/BBY_1930/week_1/Sprint-week-1/FAQ/faqpage.html";
}
    