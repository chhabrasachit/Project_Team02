  
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
    window.location.href = "../Water Locator/waterlocator.html";
}
function guidedlearning(){
    window.location.href = "../Guided Learning/Guided Learning part1.html";
}
function contact(){
    window.location.href = "../Contact Us/Contact US.html";
}
function faq(){
    window.location.href = "../FAQ/faqpage.html";
}
function about(){
  window.location.href = "../about us/about us.html";
}
