
function myFunction() {
  let x = document.getElementById("nav-ul");
  if (x.className === "") {
    x.className = "nav-responsive";
  } else {
    x.className = "";
  }
}
