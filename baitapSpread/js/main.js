let str = document.querySelector(".heading").innerHTML;
console.log([...str]);

let hienthi = ()=>{
    let content = "";
    [...str].map((char) =>{
        if(str != " "){
            content += `<span>${char}</span>`;
        }
        
    });
    document.querySelector(".heading").innerHTML = content;
}
hienthi();