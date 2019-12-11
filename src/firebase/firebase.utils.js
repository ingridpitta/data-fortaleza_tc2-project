import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/database';
// import 'firebase/analytics';

const config = {
    apiKey: "AIzaSyCntEcKO-Bv7-ua8GxHdAG_A9FP1hqmceg",
    authDomain: "data-fortaleza-tc2-project.firebaseapp.com",
    databaseURL: "https://data-fortaleza-tc2-project.firebaseio.com",
    projectId: "data-fortaleza-tc2-project",
    storageBucket: "",
    messagingSenderId: "258171863095",
    appId: "1:258171863095:web:2595d6986cc465f1153fb2",
    measurementId: "G-420SK97L6V"
};

export const getDataFromFirebase = async () => {
    const geoData =
        await firebase.database().ref('/').on('value', (snapshot) => {
            return snapshot.val()
        });
    return geoData;
};


firebase.initializeApp(config);
// firebase.analytics();

export const firestore = firebase.firestore();
// export const analytics = firebase.analytics();
export const forumPath = "data-fortaleza-tc2-project/data/forum";
export default firebase;