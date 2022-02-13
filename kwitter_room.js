const firebaseConfig = {
      apiKey: "AIzaSyC3XtEGtAdmFmx6xevhF_aS4V-fv4Z0iWQ",
      authDomain: "kwitter-106f0.firebaseapp.com",
      databaseURL: "https://kwitter-106f0-default-rtdb.firebaseio.com",
      projectId: "kwitter-106f0",
      storageBucket: "kwitter-106f0.appspot.com",
      messagingSenderId: "849069531918",
      appId: "1:849069531918:web:faa8e015a4952b7df56d5f",
      measurementId: "G-BWPYQC005S"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
function addRoom()
{
      room_name= document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
purpose : "adding room name"
});

localStorage.setItem("room_name",room_name);

window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("room name _ " +Room_names);
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
 document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location = "kwitter_page.html";
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";

}
function send()
{
      msg = document.getElementById("msg").value;
firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      })
      document.getElementById("msg").value = "";
}
