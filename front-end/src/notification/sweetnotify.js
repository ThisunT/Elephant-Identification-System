// import React from 'react';
import swal from 'sweetalert';

// Initialize Firebase
export const successAlert = (title, text) =>
    swal({
        title: title,
        text: text,
        icon: "success"
    });

export const errorAlert = (title, text) =>
    swal({
        title: title,
        text: text,
        icon: "error"
    });

export const warningAlert = (title, text) =>
    swal({
        title: title,
        text: text,
        icon: "warning"
    });

export const infoAlert = (title, text) =>
    swal({
        title: title,
        text: text,
        icon: "info"
    });





