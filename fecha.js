// Object Literal
var person = {
    /* property: value*/
    name: "Néstor",
    lastname: "Aldana",
    birthday: Date.now()
}; // JSON (JavaScript Object Notation)

// Access to propertys
console.log(person.name);
// Change object's property value
person.birthday = new Date(1994, 0, 11); // 11 - Jan - 1994
console.log(person.birthday);

console.log(person.dui) // undefined
person.dui = "000000000" // Assign 
console.log(person.dui) // 000000000

// Example
function createPerson(name, lastname, birthday, dui) {
    return {
        name,
        lastname,
        birthday,
        dui
    }
}

let list = [] // To save person;

// To Add 10 fake persons
for (let i = 0; i < 10; i++) {
    list.push(createPerson(`Name ${i}`, `Lastname ${i}`, new Date().setFullYear(1990 + i + Math.floor(Math.random() * 5)), `000000${i}`));
}

console.table(list);

// Array Higher function
// Show only the name persons
console.table(list.map(({
    name
}) => name));

var isBisiesto = function(an) {
    if(an % 4 == 0){
        if(an%100 != 0){
            return true;
        } else {
            if(an % 400 != 0){
                return false;
            }else {
                return true;
            }
        }
    }else {
        return false;
    }
}

var verificarCumple = function (fecha) {
    var fecha = new Date(fecha);
    fecha = fecha.toLocaleDateString();
    var fechaDiv = fecha.split("/");
    var fechaHoy = new Date(Date.now()).toLocaleDateString().split("/");
    if (fechaDiv[1] = fechaHoy[1]) {
        if (fechaDiv[0] < fechaHoy[0]) {
            return 0;
        }
    } else {
        if (fechaDiv[1] < fechaHoy[1]) {
            return 0;
        }
    }
    return 1;
}

function getAge(birthday) {
    var ageDifMs = Date.now() - birthday;
    var ageDate = new Date(ageDifMs); // miliseconds from eposdsd
    return Math.abs(ageDate.getUTCFullYear() - 1970) + verificarCumple(birthday);
}

console.log("Average age %i", list.reduce((sum, {
    birthday
}) => getAge(birthday) + sum, 0) / list.length);