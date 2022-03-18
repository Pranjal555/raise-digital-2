const scriptURL =
  "https://script.google.com/macros/s/AKfycbzds4k05rJnL_T6kzfelqSx468RTa4G8JO8V6UOCxOB28HBOtkOFH2quqUu9ujiQiE0/exec";
const form = document.forms["feedForm"];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) =>
      alert("Thanks for Contacting us..! We Will Contact You Soon...")
    )
    .catch((error) => console.error("Error!", error.message));
});

var func = document.getElementsByClassName("links");

for (var i = 0; i < func.length; i++) {
  func[i].addEventListener("click", function () {
    func[i].style.fontFamily = "verdana";
    alert("Thanks");
  });
}

document.getElementById("redi").style.backgroundColor = red;
