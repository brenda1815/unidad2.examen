"use strict";
var App = /** @class */ (function () {
    function App() {
    }
    App.prototype.problema1 = function () {
        console.log("Hola mundo");
    };
    App.prototype.problema2 = function () {
        var Hola = "¡Hola Mundo!";
        console.log(Hola);
    };
    App.prototype.problema3 = function () {
        var nombre = prompt("Introduce tu nombre: ");
        console.log("¡Hola " + nombre + "!");
    };
    App.prototype.problema4 = function () {
        var nombre = prompt("introduce tu nombre");
        var numero = prompt("introduce un numero:");
        numero = parseInt(numero);
        console.log(nombre * numero);
    };
    App.prototype.problema5 = function () {
        var name = prompt("¿Cómo te llamas? ");
        console.log(name === null || name === void 0 ? void 0 : name.toLowerCase());
        console.log(name === null || name === void 0 ? void 0 : name.toUpperCase());
        console.log(name === null || name === void 0 ? void 0 : name.valueOf());
    };
    App.prototype.problema6 = function () {
        var edad = prompt("¿Cuál es tu edad? ");
        if (edad < 18) {
            console.log("Eres menor de edad");
        }
        else {
            console.log("Eres mayor de edad");
        }
    };
    App.prototype.problema7 = function () {
        var key = "contraseña";
        var password = prompt("Introduce la contraseña: ");
        if (key == (password === null || password === void 0 ? void 0 : password.toString())) {
            console.log("La contaseña coincide");
        }
        else {
            console.log("La contraseña no coincide");
        }
    };
    App.prototype.problema8 = function () {
        var palabra = prompt("ingresa una palabra");
        console.log(palabra + '\n' + palabra + '\n' + palabra + '\n' + palabra + '\n' + palabra + '\n' + palabra + '\n' + palabra +
            '\n' + palabra + '\n' + palabra + '\n' + palabra + '\n');
    };
    App.prototype.problema9 = function () {
        var age = prompt("¿Cuántos años tienes? ");
        for (i in Range) {
            console.log("Has cumplido " + str(i + 1) + " años");
        }
    };
    App.prototype.problema10 = function () {
        var amount = prompt("¿Cantidad a invertir? ");
        var interes = prompt("¿Interés porcentual anual? ");
        var años = prompt("¿Años?");
        for (i in Range(años)) {
            amount *= 1 + interes / 100;
            console.log("Capital tras " + str(i + 1) + " años: " + str(round(amount, 2)));
        }
    };
    return App;
}());
var Examen = new App();
Examen.problema4();
