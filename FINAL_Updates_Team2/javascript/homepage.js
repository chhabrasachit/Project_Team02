// displaying the sidebar  
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
 
//function for opening the nav bar
function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";}
        
//function for closing the nav bar 
function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
}

//function establishing link with water locator page
function waterlocator(){
    window.location.href = "../html/waterlocator.html";
}

//function establishing link with guided learning page
function guidedlearning(){
    window.location.href = "../html/Guided Learning part1.html";
}

//function establishing link with faq page
function contactus(){
    window.location.href = "../html/Contact Us.html";
}

//function establishing link with about us page
function aboutus(){
    window.location.href = "../html/about us.html";
}

//function establishing link with faq page
function faq(){
    window.location.href = "../html/faqpage.html";
}
    