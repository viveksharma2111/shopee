// Home page js 
function HomeToShop() {
  window.open("shop.html", "_self");
}
function HomeArrivalsToShop() {
  window.open("more.html", "_self");
}
function ExploreMoreToMore1() {
  window.open("more1.html", "_self"); 
}
function facebook() {
  window.open("https://www.facebook.com/profile.php?id=100058614092951&mibextid=zbWKwL")
}
function youtube() {
  window.open("https://www.youtube.com/")
}
function instagram() {
  window.open("https://www.instagram.com/viveksharma_2003/");
}
function linkedin() {
  window.open("https://www.linkedin.com/in/vivek-sharma-238b78283");
}

function GoToSingupPage() {
  window.open("singup.html", "_self");
}
// shop page js
function change1() {
  window.open("shop.html", "_self");
}
function change2() {
  window.open("more.html", "_self");
}
function changeMore() {
  window.open("more1.html", "_self");
}

var viv = document.getElementById("viv");
var MainImg = document.getElementById("MainImg");
function ShopToSproduct(obj) {
  window.open("Sproduct.html", "_self");
  var vivek = obj.childNodes[1].src;
  sessionStorage.setItem("viv", vivek);
}

var smallimg = document.getElementsByClassName("small-img");
function foo(i) {
  MainImg.src = smallimg[i].src;

}
// sing Up 
var LoginForm = document.getElementById("LoginForm");
var RegForm = document.getElementById("RegisterForm");
var ind = document.getElementById("in");
function Register() {
  RegForm.style.transform = "translateX(0px)";
  LoginForm.style.transform = "translateX(0px)";
  ind.style.transform = "translateX(100px)";
}
function Login() {
  RegForm.style.transform = "translateX(300px)";
  LoginForm.style.transform = "translateX(300px)";
  ind.style.transform = "translateX(0px)";

}
// media qiery 
const bar = document.getElementById("bar");
const nav = document.getElementById("navbar");
const close = document.getElementById("close");
if (bar) {
  bar.addEventListener("click", () => {
    nav.classList.add("active");
  })
}
if (close) {
  close.addEventListener("click", () => {
    nav.classList.remove("active");
  })
}








