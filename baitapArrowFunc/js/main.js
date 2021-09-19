const colorList = ["pallet", "viridian", "pewter", "cerulean", "vermillion", "lavender","celadon","saffron","fuschia","cinnabar"];
let renderBtn = ()=>{
    let content = ""; 
    colorList.map((item,index)=>{
        content += `<button class='color-button ${item} ${index === 0 ? 'active' : ''}' onClick="changeColor('${item}')"></button>`
    }) 
    document.getElementById("colorContainer").innerHTML = content;
}
renderBtn();
let changeColor = (color)=>{
    let listLop = document.querySelector(`.color-button` + `.${color}`).classList;
    let count = 0;
    [...listLop].map((lop) => {
        if (lop === "active") {
            count += 1;
        }
    });
    if (count != 0) {
        document.getElementById("house").className = "house " + color;
    } else {
        document.querySelector(".active").classList.remove("active");
        document.querySelector(`.${color}`).classList.add("active");
        document.getElementById("house").className = "house " + color;
    }
}
