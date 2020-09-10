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
