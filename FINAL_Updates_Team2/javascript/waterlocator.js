  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDYRODfBG2Y95jxr1BApdcBL9Js5HYnRz4",
    authDomain: "ourdatabase-3e89e.firebaseapp.com",
    databaseURL: "https://ourdatabase-3e89e.firebaseio.com",
    projectId: "ourdatabase-3e89e",
    storageBucket: "",
    messagingSenderId: "923980200478"
  };
  
  firebase.initializeApp(config);

   // adding eventlisteners to the buttons
  document.getElementById("metro1").addEventListener("click", function(){
      ShowList("metrotown", "nearest2");
            });
  
  // adding eventlisteners to the buttons      
  document.getElementById("metro2").addEventListener("click", function(){
      ShowList("metrotown","other2");
            });
   
  // adding eventlisteners to the buttons         
  document.getElementById("surrey1").addEventListener("click", function(){
      ShowList("surreycentral","nearest3");
            });
  
  // adding eventlisteners to the buttons          
  document.getElementById("surrey2").addEventListener("click", function(){
      ShowList("surreycentral","other3");
            });
  
  // adding eventlisteners to the buttons          
  document.getElementById("kinggeorge1").addEventListener("click", function(){
      ShowList("kinggeorge","nearest");
            });
  
  // adding eventlisteners to the buttons          
  document.getElementById("kinggeorge2").addEventListener("click", function(){
      ShowList("kinggeorge","other");
            });
        

        // function to read the information from list 
        function ShowList(location, category){
          
             var dbRef = firebase.database().ref(location+"/"+category);
             var promise =  dbRef.once("value", function(snap){
                 list=snap.val();
             });
                 promise.then(function(){            
                 DisplayList(list);
             });
            
            
             // function to display the informatoin on the webpage
             function DisplayList(list){
             //console.log(list);
                 
                 //for loop to read and display mulitple elements of a list
                 for(x in list){
                    console.log(x);
                    var para =document.createElement("p");
                    document.body.appendChild(para);
                    var node = document.createTextNode(list[x]);
                    para.appendChild(node);
                

                    var address = document.createElement("div");
                    address.setAttribute("id", "div1");
                    document.body.appendChild(address);
       
                    var addressResults = firebase.database().ref().child("sources").child(x).child("address");
                    addressResults.on("value", function(snap){
                    address.innerText = snap.val();
                });
                 
                    var cost = document.createElement("div");
                    cost.setAttribute("id", "div2");
                    document.body.appendChild(cost);
       
                    var costResults = firebase.database().ref().child("sources").child(x).child("cost");
                    costResults.on("value", function(snap){
                    cost.innerText = snap.val();
                });
                 
                    var watertype = document.createElement("div");
                    watertype.setAttribute("id", "div3");
                    document.body.appendChild(watertype);
                     
                    var watertypeResults = firebase.database().ref().child("sources").child(x).child("watertype");
                    watertypeResults.on("value", function(snap){
                    watertype.innerText = snap.val();
                });
                 
                    var locationtype = document.createElement("div");
                    locationtype.setAttribute("id", "div4");
                    document.body.appendChild(locationtype);
                     
                    var locationtypeResults = firebase.database().ref().child("sources").child(x).child("locationtype");
                    locationtypeResults.on("value", function(snap){
                    locationtype.innerText = snap.val();
                });
            
            }
            
        }
    
    }

    //back to home page 
    function back(){
        window.location.href = "../html/index.html";
    } 