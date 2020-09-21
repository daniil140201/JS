// 1
var persons = [ {name : 'Головач', surname : 'Лена'}]
persons.push({name : 'Гена', surname: 'Крокодил', fathername : 'Андреевич'})
persons.push({name : 'Витя', surname: 'Метелкин', fathername : 'Алексеевич'})
persons.push({name : 'Петя', surname: 'Мухосранов', fathername : 'Анатольевич'})
persons.push({name : 'Миша '})
//2
for (let key in persons){
    console.log(persons[key])
}
//3
for (let key in persons){
    console.log(persons[key].name + ' : ' + persons[key].surname)
}
//4
for (let key in persons){
    if (persons[key].name && persons[key].surname){
        persons[key].FIO = persons[key].name + ' '  + persons[key].surname
        if (persons[key].fathername){
            persons[key].FIO += ' ' + persons[key].fathername
        }
    }
}
console.log(persons)
//5
var personsJSON = JSON.stringify(persons)
console.log(personsJSON)
//6
var p = JSON.parse('{"name":"Danya", "surname":"Ilyha"}')
persons.push(p)
console.log(persons)
//7
// var str = "<table border='1'>"
// for (let i in persons){
//     str += `<tr><td>${persons[i].name}</td><td>${persons[i].surname || ' '}</td></tr>`
// }
// str += "</table>"
//
// console.log(str)
// document.write(str)
//8
function avg2(a , b){
    return (a + b)/2
}
//9
function sum3(a ,b , c = 0){
    return a + b + c
}
console.log(sum3(1,2, 4))
//10
function intRandom(lower , upper) {
    if (!upper){
        upper = lower
        lower = 0
    }
    return Math.round(lower + Math.random()*upper)
}

//11
function sum(){
    let sum = 0
    for (let i = 0; i < arguments.length; i++){
        sum += arguments[i]
    }
    return  sum
}
console.log(sum(1, 2, 3, 4,5))
//12
function spliceArr(array, start, amount, ...insert){
    let arrayCopy = []
    for (let i = 0; i < start; i++ ){
        arrayCopy[i] = array[i]
    }
    for (let i in insert){
        arrayCopy.push(insert[i])
    }
    let arrayRigthSide = []
    for (let i = start + amount; i < array.length; i++){
        arrayRigthSide.push(array[i])
    }
    for(let i in arrayRigthSide){
        arrayCopy.push(arrayRigthSide[i])
    }
    return arrayCopy
}
let arr = [1, 2, 3, 4, 5, 6, 7]
console.log(spliceArr(arr, 1, 3, 0, 0, 0, 0, 0, 0,))