function check(){
    let x = document.getElementById("mail").value;
    let dk = /^\w+@\w+\.com$/i;
    if (dk.test(x)) {
        alert("thông tin đã được gửi")
    }
    else {
        alert("email không đúng")
    }
}
var arr_hinh =["img/ht1.webp","img/ht2.webp","img/ht3.webp","img/ht4.jpeg"];
var arr_mota =["In class room" ," In class room " ,"In class room ","In class room"];
var arr_trang=["1/4","2/4","3/4","4/4"];
var arr_mau=["one","two","three","for"];
var index=0;
function prev(){
   index--;
   if (index == -1) {index = arr_hinh.length -1;}
    document.getElementById("hinh").src=arr_hinh[index];
    document.getElementById("mota").innerHTML=arr_mota[index];
    document.getElementById("sotrang").innerHTML=arr_trang[index];
    doimau();
};
function next(){
    index++;
    if (index == arr_hinh.length) {index = 0;}
    document.getElementById("hinh").src=arr_hinh[index];
    document.getElementById("mota").innerHTML=arr_mota[index];
    document.getElementById("sotrang").innerHTML=arr_trang[index];
    doimau();
 };
 function chuyen(x){
    document.getElementById("hinh").src=arr_hinh[x];
    document.getElementById("mota").innerHTML=arr_mota[x];
    document.getElementById("sotrang").innerHTML=arr_trang[x];
    doimau();
 };
 function doimau(){
    for (let i=0;i<arr_hinh.length;i++){
    if (document.getElementById("sotrang").innerHTML==arr_trang[i]){
        document.getElementById(arr_mau[i]).style.color =" rgb(122, 26, 164)";
    } else document.getElementById(arr_mau[i]).style.color=" rgb(240, 130, 238)";
 }
}
setInterval("next()",3000);