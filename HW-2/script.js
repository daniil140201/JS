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