import {database} from './firebase';

//Sign Up
export const doCreateUser = (id, username, email) =>


 database.ref(`users/${id}`).set({
    username,
    email,
    admin: false,
    about: false,
    country: false,
    institute: false,
    processes: [false],
    locations: [false]

});

export const doUpdateUser = (id, about , country,email, institute) =>
    database.ref(`users/${id}`).update({

        about: about,
        country: country,
        email: email,
        institute:institute,

    });
// export const doViewUser = () =>
//    var userId = firebase.auth().currentUser.uid;
//    return firebase.database().ref('/users/' + userId).once('value').then(function (snapshot) {
//        var email = (snapshot.val() && snapshot.val().email) || 'Anonymous';
//
//    });


export const onceGetUsers = function(id){
    let userRef = database.ref('users').child(`${id}`);

    return userRef.once('value').then(function(snapshot) {
        return snapshot.val();
    });
};

export const getUsers = function () {
    let userRef = database.ref('users');
    return userRef.once('value').then(function(snapshot) {
        console.log(snapshot.val());
        return snapshot.val();


    });
};

export const updateProcess = function (id,value) {
    let userRef = database.ref('users').child(`${id}`).child('processes');
    if (userRef.child(0)){
        userRef.child(0).remove();
    }
    return userRef.push(value);
};


