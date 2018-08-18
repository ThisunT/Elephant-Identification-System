import {database} from './firebase';

//Sign Up
export const doCreateUser = (id, username, email, admin) =>
    database.ref(`users/${id}`).set({
        username,
        email,
        about: false,
        institute:false,
        country: false,
        admin:false,
        processes: [false],
        locations: [false]
    });
export const doUpdateUser = (id, about , country, institute) =>
    database.ref(`users/${id}`).update({

        about: about,

        country: country,
        institute:institute,

    });

export const onceGetUsers = function(id){
    let userRef = database.ref('users').child(`${id}`);

    return userRef.once('value').then(function(snapshot) {
        return snapshot.val();
    });
};

export const getUsers = function () {
    let userRef = database.ref('users');
    return userRef.once('value').then(function(snapshot) {
        return snapshot;
    });
};

export const updateProcess = function (id,value) {
    let userRef = database.ref('users').child(`${id}`).child('processes');
    if (userRef.child(0)){
        userRef.child(0).remove();
    }
    return userRef.push(value);
};


