// import React from 'react';
import swal from 'sweetalert';

// success alert
export const successAlert = (title, text) =>
    swal({
        title: title,
        text: text,
        icon: "success"
    });

// error alert
export const errorAlert = (title, text) =>
    swal({
        title: title,
        text: text,
        icon: "error"
    });

// warning alert
export const warningAlert = (title, text) =>
    swal({
        title: title,
        text: text,
        icon: "warning"
    });

// info alert
export const infoAlert = (title, text) =>
    swal({
        title: title,
        text: text,
        icon: "info"
    });





