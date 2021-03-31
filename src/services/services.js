import db from '../firebase/firebase.config';
import firebase from 'firebase';


export function getOneRestaurant(id){
   return db.collection('restaurants').doc(id).get()
}
export function registerUser(email, password){
   return firebase.auth().createUserWithEmailAndPassword(email, password) 
}
export function loginUser(email, password){
   return firebase.auth().signInWithEmailAndPassword(email, password) 
}
