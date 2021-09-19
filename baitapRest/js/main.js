
let tinhTB = (...diem) =>{
    let sum = 0;
    let ave = 0;
    diem.map((diem,index) =>{
        sum += diem;
        ave = sum / (index + 1);
    });
    return ave;
}
let layDuLieu = (id) =>{
    return document.getElementById(id);
}

layDuLieu("btnKhoi1").addEventListener('click', ()=>{
    let toan = Number(layDuLieu("inpToan").value);
    let ly = Number(layDuLieu("inpLy").value);
    let hoa = Number(layDuLieu("inpHoa").value);

    let diem = tinhTB(toan,ly,hoa);
    layDuLieu("tbKhoi1").innerHTML = diem.toFixed(2);
})

layDuLieu("btnKhoi2").addEventListener('click', ()=>{
    let van = Number(layDuLieu("inpVan").value);
    let su = Number(layDuLieu("inpSu").value);
    let dia = Number(layDuLieu("inpDia").value);
    let anh = Number(layDuLieu("inpEnglish").value);

    let diem = tinhTB(van,su,dia,anh);
    layDuLieu("tbKhoi2").innerHTML = diem.toFixed(2);
})