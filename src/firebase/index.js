import firebase from 'firebase/app'
import 'firebase/firestore'

const app = firebase.initializeApp({

    apiKey: "AIzaSyAM4V7jLCvQrvwdNAnA7kyt6TOLm5kHabI",
    authDomain: "ecommerce-belmonte.firebaseapp.com",
    projectId: "ecommerce-belmonte",
    storageBucket: "ecommerce-belmonte.appspot.com",
    messagingSenderId: "985536904210",
    appId: "1:985536904210:web:3a6a873b7177f602dfeccb"
      
})

export const getFirebase = () => {
    return app
}
export const getFirestore = () => {
    return firebase.firestore(app)
}