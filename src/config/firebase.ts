import {initializeApp} from "firebase/app"
import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore"

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
	apiKey: "AIzaSyC-wP4ISwGkSSD2bMsppXRB9x0K_lMRiWk",
	authDomain: "jsi14-e8982.firebaseapp.com",
	projectId: "jsi14-e8982",
	storageBucket: "jsi14-e8982.appspot.com",
	messagingSenderId: "348010625459",
	appId: "1:348010625459:web:cf430829ae79707372b3c6",
	measurementId: "G-J0V20JY27F"
}

const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)  // khai báo cho firebase biết mình sẽ dùng để firestore database với config là tài khoản của mình
export const auth = getAuth(app) // khai báo cho firebase biết mình sẽ dùng để auth với config là tài khoản của mình

export const actionCodeSettings = {
	url: "http://127.0.0.1:5173/",
	handleCodeInApp: true,
}
