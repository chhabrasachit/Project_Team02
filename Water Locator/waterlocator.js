
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyB_wfVW612S3BVqSVkmANehnSBBjhVWWtg",
    authDomain: "file1-5809b.firebaseapp.com",
    databaseURL: "https://file1-5809b.firebaseio.com",
    projectId: "file1-5809b",
    storageBucket: "file1-5809b.appspot.com",
    messagingSenderId: "611835321934"
  };
  firebase.initializeApp(config);


        document.getElementById("nearby").addEventListener("click",
            function(){
                ShowList("metrotown", "nearby");
            }
         );
            
        document.getElementById("other").addEventListener("click",
            function(){
                ShowList("metrotown","other");
            }
         );
            
        document.getElementById("nearby2").addEventListener("click",
            function(){
                ShowList("surrey central","nearby2");
            }
         );
            
        document.getElementById("other2").addEventListener("click",
            function(){
                ShowList("surrey central","other2");
            }
         );
            
        document.getElementById("nearby1").addEventListener("click",
            function(){
                ShowList("king george","nearby1");
            }
         );
            
        document.getElementById("other1").addEventListener("click",
            function(){
                ShowList("king george","other1");
            }
         );
            
        function ShowList(location, category){
          
             var dbRef = firebase.database().ref(location+"/"+category);
             var promise =  dbRef.once("value", function(snap){
                 list=snap.val();
             });
                     promise.then(function(){
                    
                 DisplayList(list);  //JSON object
             });
         
             function DisplayList(list){
             console.log(list);
             for(x in list){
             var para=document.createElement("p");
             document.body.appendChild(para);
             var node = document.createTextNode(x);
                 para.appendChild(node);
                }
            }
        }
     