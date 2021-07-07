var firebaseConfig = {
    apiKey: "AIzaSyDZk5jZrBBPfpppNCd41HuLWJKaHfyYbz0",
    authDomain: "monkeyscrape-afd7e.firebaseapp.com",
    databaseURL: "https://monkeyscrape-afd7e-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "monkeyscrape-afd7e",
    storageBucket: "monkeyscrape-afd7e.appspot.com",
    messagingSenderId: "919804187890",
    appId: "1:919804187890:web:fe8696cad8d3573c056c6b",
    measurementId: "G-RZG5RJ43MH"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var database = firebase.firestore()

var downloads = database.collection('stats').doc('users')


function windows_download_ping(){

  downloads.update({
  windows_downloads: firebase.firestore.FieldValue.increment(1)
  })

}

function mac_download_ping(){

  downloads.update({
  mac_downloads: firebase.firestore.FieldValue.increment(1)
  })

}
