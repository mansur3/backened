const express = require("express");
const mongoose = require("mongoose");

const connect = () => {
    return mongoose.connect("mongodb+srv://mansur:ragnar@cluster0.cxvqu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
};


module.exports = connect;