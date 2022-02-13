//YOUR FIREBASE LINKS
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
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name = message_data['name'];
message = message_data['message'];
like = message_data['like'];
name_with_tag = "<h4> "+ name +"<img class='user_tick' src='tick.png'></hr>";
message_with_tag ="<h4 class='message_h4>'" + message + "</h4>";
like_button ="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
span_with_tag ="<span class='glyphicon' glyphicon-thumbs-up'>like: "+ like +"</span></button><hr>";

row = name_with_tag + message_with_tag +like_button + span_with_tag;
document.getElementById("output").innerHTML += row;
//End code
      } });  }); }
getData();
function updateLike(message_id)
{
      console.log("clicked on like button - " + message_id);
      button_id = message_id;
      likes = document.getElementById(button_id).value;
      update_likes = Number(likes) + 1;
      console.log(update_likes);

      firebase.database().ref(room_name).child(message_id).update({
        like : update_likes    
      })
}
function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location.replace("index.html");
}