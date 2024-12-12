Foi utilizado O banco de dados firebase, onde a conexão é ralizada com esse código:

``const firebaseConfig = {
    apiKey: "AIzaSyD7esLpesGPSSWcPLCfp8UwlRlZXvOvtoc",
    authDomain: "todolist-dfa06.firebaseapp.com",
    projectId: "todolist-dfa06",
    storageBucket: "todolist-dfa06.firebasestorage.app",
    messagingSenderId: "223217228093",
    appId: "1:223217228093:web:2c69159787fcc2982e4d54",
    measurementId: "G-WTHMYE36DJ"
  };
  firebase.initializeApp(firebaseConfig);
  const database = firebase.database();
  
  ``
Onde é passado as informações de autencação e informações do projeto,e logo em seguida inicializa o banco de dados no html
