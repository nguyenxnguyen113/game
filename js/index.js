window.onload = () => {
  var firebaseConfig = {
    apiKey: "AIzaSyAAx73Ip9NXLgDEUcEsZTq5tpUHoxBt9vI",
    authDomain: "chat-app-b5a25.firebaseapp.com",
    databaseURL: "https://chat-app-b5a25.firebaseio.com",
    projectId: "chat-app-b5a25",
    storageBucket: "chat-app-b5a25.appspot.com",
    messagingSenderId: "425694498788",
    appId: "1:425694498788:web:b220506eb1af64766a41f1"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  //templateQueryDatabase()
  firebase.auth().onAuthStateChanged((user) => {
    console.log(user);
    if (user) {
      if (user.emailVerified) {
        model.currentUser = {
          displayName: user.displayName,
          email: user.email,
        };
        view.setActiveScreen("menuScreen");
      } else {
        view.setActiveScreen("loginScreen");
        alert("Please verify your email");
      }
    } else {
      view.setActiveScreen("loginScreen");
    }
  });
};

function checkAuth() {
  firebase.auth().onAuthStateChanged(function (user) {
    console.log(user);

    model.currentUser = {
      displayName: user.displayName,
      email: user.email,
    };
    if (user) {
      view.setActiveScreen("menuScreen");
    } else {
      // No user is signed in
      view.setActiveScreen("loginScreen");
    }
  });
}
