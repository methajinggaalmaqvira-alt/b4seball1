function login(){

let u=document.getElementById("username").value;
let p=document.getElementById("password").value;

// ADMIN
if(u==="Metha Jingga Almaqvira Wiradimadja" && p==="Methajingga05"){
localStorage.setItem("login","admin");
location.href="index.html";
return;
}

// USER
let user=JSON.parse(localStorage.getItem(u));
if(user && user.pass===p){
localStorage.setItem("login","user");
location.href="index.html";
}else{
alert("Login gagal");
}
}

function register(){
let nama=document.getElementById("nama").value;

let data={
pass:nama+"2026"
};

localStorage.setItem(nama,JSON.stringify(data));

alert("Akun dibuat!\nUsername:"+nama+"\nPassword:"+nama+"2026");
location.href="login.html";
}

function showPage(id){
document.querySelectorAll(".page").forEach(p=>p.classList.remove("active"));
document.getElementById(id).classList.add("active");
}

function logout(){
localStorage.removeItem("login");
location.href="login.html";
}
