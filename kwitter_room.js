//ADD YOUR FIREBASE LINKS HERE
 // Your web app's Firebase configuration
 var firebaseConfig = {
      apiKey: "AIzaSyC5vcH8B8Z9rfrgkR5I0Hj-G2LhzpaJGT8",
      authDomain: "kwitter-60f15.firebaseapp.com",
      databaseURL: "https://kwitter-60f15-default-rtdb.firebaseio.com",
      projectId: "kwitter-60f15",
      storageBucket: "kwitter-60f15.appspot.com",
      messagingSenderId: "265693888424",
      appId: "1:265693888424:web:e8aa918f71b9a05036e79d"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
function logOut(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}
