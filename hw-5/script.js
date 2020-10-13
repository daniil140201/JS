function firstTask() {
    let yellow = document.querySelector('.yellow');
    let green = document.querySelector('.green');
    let blue = document.querySelector('.blue');
    let red = document.querySelector('.red');
    let result = document.querySelector('.result > span');
    let points = 0;
    yellow.addEventListener('click', function(event){
        points += 5;
        event.stopPropagation();
    });
    green.addEventListener('click', function(event){
        points += 2;
        event.stopPropagation();
    });
    blue.addEventListener('click', function(event){
        points += 8;
        event.stopPropagation();
    });
    red.addEventListener('click', function(event){
        points += 10;
        event.stopPropagation();
    });
    setTimeout(function () {
        result.innerText = 'Ваш результат : ' + points;
    }, 30 * 1000)
}
//firstTask();
function secondTask() {
    function makeProfileTimer(){
        let timeStart = Date.now();
        function countTime(){
            let timeEnd = Date.now();
            return timeEnd - timeStart;
        }
        return countTime;
    }
    let timer = makeProfileTimer();
    alert('Замеряем время работы этого alert');
    alert(timer());
}
//secondTask();
function thirdTask() {
    let go = 'GO';
    let timer = 5;
    function tik(){
        setTimeout(function () {
            if (timer === 0){
                console.log(go);
            }else{
                console.log(timer--);
                tik();
            }
        }, 1 * 1000);
    }
    tik();
}
//thirdTask();
function myBind(func, context, ...args) {
    let contextobj = {
        func : func,
        context : context,
        args : args
    }
    return function () {
        return contextobj.func.apply(contextobj.context, contextobj.args);
    }
}
function sum(){
    return this.a + this.b;
}
let obj = {
    a:3,
    b:3
}
let obj2 = {
    a:3,
    b:7
}
let objS = myBind(sum,obj);
let objS2 = myBind(sum,obj2 )
console.log(sum());
console.log(objS());
console.log(objS2());