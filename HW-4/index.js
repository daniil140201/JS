// 1 task
function validatedLink(link) {
    let validated = true;
    for(let i = 0; i < link.length; i++){
        if (link[i] === ' '){
            validated = false;
        }
    }
    if (link.length < 10){
        validated = false;
    }
    return link || undefined;
}
function validatedNumber(number){
    return +number;
}
function createImgAndRotate(link, angle){
    let first_task = document.querySelector('#first_task');
    for(let i = 0; i < 5; i++ ){
        let img  = document.createElement('img');
        img.src = link;
        img.style.transform = `rotate(${(i + 1) * angle}deg)`;
        first_task.append(img);
    }
}
let link = validatedLink(prompt('Введите ссылку на изображение'));
let angle = validatedNumber(prompt('Введите угол поворота'));
createImgAndRotate(link, angle);
//2 task
function searchAndRemove(idTagName) {
    let id = document.querySelector(`#${idTagName}`);
    if(id){
        id.remove();
    }
}
searchAndRemove('first_task');
// 3 task
function createTable(rows, cols){
    let table = document.createElement('table');
    document.body.append(table);
    for (let i = 1; i <= rows; i++ ){
        let tr = document.createElement('tr');
        table.append(tr);
        for (let j = 1 ; j <= cols; j++){
            let td = document.createElement('td');
            td.innerText = (i * j).toString();
            tr.append(td);
            td.style.border = '2px solid black';
            td.addEventListener('mouseover', function () {
                td.style.backgroundColor = 'blue';
            })
            td.addEventListener('mouseout', function () {
                td.style.backgroundColor = 'white';
            })
        }
    }
}
createTable(50, 50);
// 5 task
let btn = document.querySelector('button');
btn.addEventListener('click', function () {
    let firstNum = validatedNumber(document.querySelector('input').value);
    let secondNum = validatedNumber(document.querySelector('input:nth-child(2)').value);
    let res = document.querySelector('.result')
    res.textContent = firstNum + secondNum
})
//6 task
function sort(sortedObj, arg){
    if( typeof sortedObj[0][arg] ==='string'){
        for (let i = 0; i < sortedObj.length; i++) {
            for (let j = 0; j < sortedObj.length - 1; j++) {
                if (sortedObj[j][arg] > sortedObj[j + 1][arg]) {
                    let tmp = sortedObj[j];
                    sortedObj[j] = sortedObj[j + 1];
                    sortedObj[j + 1] = tmp;
                }
            }
        }
        return sortedObj
    }else{
        for (let i = 0; i < sortedObj.length; i++){
            for (let j = 0; j < sortedObj.length - 1; j++){
                if (sortedObj[j][arg] > sortedObj[j + 1][arg]) {
                    let tmp = sortedObj[j];
                    sortedObj[j] = sortedObj[j + 1];
                    sortedObj[j + 1] = tmp;
                }
            }
        }
        return sortedObj
    }
}
var persons = [{
    name: 'Vasyan', age: 21
}, {
    name: 'Kolyan', age: 22
}, {
    name: 'Mashka', age: 17
}, {
    name: 'Alex', age : 1
}];
console.log(sort(persons, 'name'));

let newArr = [' hello darkness   my old   friend ', ' i\'ve come to   talk  with   you again    '].map( str => {
    let prob = 0;
    let arrayofchars = str.split('');
    for (let i = 0; i < arrayofchars.length; i++){
        if (arrayofchars[i] === ' '){
            prob++;
            if (prob >= 2){
                arrayofchars[i] = '@';
                prob--;
            }
        }else{
            prob = 0;
        }
    }
    str = arrayofchars.join('');
    str = str.replace(/@/g, '');
    return str;
})
console.log(newArr)
function filter(array, cb) { // should return new filtered array
    let newArray = [];
    for (let i = 0; i < array.length; i++){
        if(cb(array[i])){
            newArray.push(array[i]);
        }
    }
    return newArray;
}
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
console.log(filter(words, word => word.length > 6));
