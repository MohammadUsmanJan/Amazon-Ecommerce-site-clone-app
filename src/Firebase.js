import firebase from "firebase";

const firebaseApp = firebase.initializeApp({

        apiKey: "AIzaSyCuDA0IMt-bv4CGnEhujqMCicjdrJat-ME",
        authDomain: "clone-bc144.firebaseapp.com",
        databaseURL: "https://clone-bc144.firebaseio.com",
        projectId: "clone-bc144",
        storageBucket: "clone-bc144.appspot.com",
        messagingSenderId: "386428424854",
        appId: "1:386428424854:web:9a4bd54dde59aac38068b7",
        measurementId: "G-7GLLTC6D1J"
     
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db , auth};