var color = prompt("Введите цвет", "")
if (color === "red"){
    document.write("<div style='background-color: red;'>красный</div>");
    document.write("<div style='background-color: black; color: white;'>черный</div>");
}else if(color === "black"){
    document.write("<div style='background-color: black; color: white;'>черный</div>");
}else if(color === "blue"){
    document.write("<div style='background-color: blue;'>синий</div>");
    document.write("<div style='background-color: green;'>зеленый</div>");
}else if(color === "green"){
    document.write("<div style='background-color: green;'>зеленый</div>");
}else{
    document.write("<div style='background-color: gray;'>Я не понял</div>");
}
var age = prompt("Введите ваш возраст")
if (age > 100 || age <=0){
    alert("Ваш возраст некорректен")

}
var month = prompt("Введите название месяца")
switch (month.toLowerCase()) {
    case "январь" : alert( "В " + month.substr(0, month.length - 1) + "e 31 день")
        break
    case "апрель" : alert( "В " + month.substr(0, month.length - 1) + "e 31 день")
        break
    case "июнь" : alert( "В " + month.substr(0, month.length - 1) + "e 31 день")
        break
    case "сентябрь" : alert( "В " + month.substr(0, month.length - 1) + "e 31 день")
        break
    case "ноябрь" : alert( "В " + month.substr(0, month.length - 1) + "e 31 день")
        break
    case "март" : alert( "В " + month.substr(0, month.length - 1) + "e 30 дней")
        break
    case "май" : alert( "В " + month.substr(0, month.length - 1) + "e 30 дней")
        break
    case "июль" : alert( "В " + month.substr(0, month.length - 1) + "e 30 дней")
        break
    case "август" : alert( "В " + month.substr(0, month.length - 1) + "e 30 дней")
        break
    case "октябрь" : alert( "В " + month.substr(0, month.length - 1) + "e 30 дней")
        break
    case "декабрь" : alert( "В " + month.substr(0, month.length - 1) + "e 30 дней")
        break
    case "февраль" : alert( "В " + month.substr(0, month.length - 1) + "e 29 дней")
        break
}
var personAge = prompt("Введите ваш возраст")
var greeting = " ШО КАВО"
if (personAge > 0 && personAge < 10){
    alert("Привет мелочь" + greeting)
} else if (personAge > 10 && personAge < 20){
    alert("Привет" + greeting)
}if (personAge > 20 && personAge < 50){
    alert("Приветствую" + greeting)
} else if (personAge > 50 && personAge < 90){
    alert("Здравствуйте" + greeting)
} else if (personAge > 90 && personAge < 100){
    alert("Здравствуйте многоувожаемый старый мурдый человек" + greeting)
} else {
    alert("Человек ли ты ?" + greeting)
}
var JSON = {
    tagName: "body",
    subTags: {
        div: {
            tagName: "div",
            subTags: {
                span: {
                    tagName: "span",
                    text: "Enter a data please:"
                },
                br: {
                    tagName: "br"
                },
                input: {
                    tagName: "input",
                    attrs: {
                        type: "text",
                        id: "name"
                    }
                },
                input: {
                    tagName: "input",
                    attrs: {
                        type: "text",
                        id: "surname"
                    }
                }
            }
        },
        div: {
            tagName: "div",
            subTags: {
                button: {
                    tagName: "button",
                    attrs: {
                        id: "ok"
                    },
                    text: "OK"
                },
                button: {
                    tagName: "button",
                    attrs: {
                        id: "cancel"
                    },
                    text: "Cancel"
                }
            }
        }
    }
}
var notebook = {
    brand: prompt("Input notebook brand", ""),
    type: prompt("What type is it?", ""),
    model: prompt("What model is it?", ""),
    ram: prompt("How much RAM it has?", ""),
    size: prompt("Whats the size of it?", ""),
    weight: prompt("Whats the weight of it?", ""),
    resolution: {
        width: prompt("Input horizontal resolution", ""),
        height: prompt("Input vertical resolution", ""),
    },
};

var phone = {
    brand: prompt("Input phone brand", ""),
    model: prompt("Whats model is it?", ""),
    ram: prompt("How much RAM it has?", ""),
    color: prompt("What color is the case?", ""),
};

var person = {
    name: prompt("Input your name", ""),
    surname: prompt("Input your surname", ""),
    married: confirm("Are you married?"),
}

while (!confirm()){}

var personNumber = prompt("Загадайте число")
personNumber = +personNumber
for (let i = 0; i < personNumber; i++){
    console.log(i)
}

var random
var counter = 0
while(true){
    random = Math.random()
    counter++
    if (random > 0.9){
        break
    }
}
alert(counter)

var length = prompt('Введите длину строки')
var outstr = ''
for (let i = 0; i < +length; i++){
    outstr += '#'
}
alert(outstr)

var array  = []
let size = prompt('input size of array')
for (let i = 0; i < +size; i++){
    array.push(Math.pow(i,3))
}
console.log(array)
