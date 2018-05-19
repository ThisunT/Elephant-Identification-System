import {database} from './firebase';

//Sign Up
export const doCreateUser = (id, username, email) =>
    database.ref(`users/${id}`).set({
        username,
        email,
        birthday: false,
        about: false,
        college:false,
        country: false,
        processes: [false],
        locations: [false]
    });


export const onceGetUsers = function(id){
    let userRef = database.ref('users').child(`${id}`);

    return userRef.once('value').then(function(snapshot) {
        return snapshot.val();
    });

};



