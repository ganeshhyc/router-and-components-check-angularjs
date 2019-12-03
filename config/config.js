let app = angular.module('myApp',['ngRoute']);
// add or edit column definaition from here
const colDef = [
    {
        "label" : "Input Columns",
        "width" : "40%",
        "type" : "text"
    },
    {
        "label" : "Password Columns",
        "width" : "40%",
        "type" : "password"
    },
    {
        "label" : "Email Columns",
        "width" : "40%",
        "type" : "email"
    },
    {
        "label" : "Number Columns",
        "width" : "40%",
        "type" : "number"
    },
    {
        "label" : "Text Columns",
        "width" : "40%",
        "type" : "textbox"
    },
    {
        "label" : "Date Columns",
        "width" : "40%",
        "type" : "date"
    },
    {
        "label" : "Checkbox Columns",
        "width" : "40%",
        "type" : "checkbox"
    }
];
