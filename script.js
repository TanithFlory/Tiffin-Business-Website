const Nav = document.querySelector(".primary-navigation");
const NavToggle = document.querySelector(".nav-toggle");
var evaluate = false;
var form;
if (Nav !== null) {
  NavToggle.addEventListener("click", () => {
    const Visibility = Nav.getAttribute("data-visible");
    if (Visibility === "false") {
      Nav.setAttribute("data-visible", true);
      NavToggle.setAttribute("aria-expanded", true);
    } else {
      Nav.setAttribute("data-visible", false);
      NavToggle.setAttribute("aria-expanded", false);
    }
  });
}

document.onclick = function (e) {
  if (Nav !== null) {
    if (e.target.id !== "navbarlist") {
      Nav.setAttribute("data-visible", false);
      NavToggle.setAttribute("aria-expanded", false);
    }
  }
};
//PreventDefault
const cstdetails = document.getElementById("cstdetails");

if (cstdetails) {
  cstdetails.addEventListener("submit", (e) => {
    e.preventDefault();
    form = e.target;
    validation();
  });
}

//Validation
function validation() {
  let checksName = document.getElementById("txtName").value;
  let checksPhone = document.getElementById("txtPhoneNumber").value;
  let checksEmail = document.getElementById("txtEmailID").value;
  let checksAdd = document.getElementById("txtAddress").value;
  let possibilityName = /^([a-zA-Z]+\s)*[a-zA-Z]+$/;
  let possibilityPhone = /^[0-9]*$/;
  let possibilityEmail =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  let possibilityAdd = /^[\w*\s*[\-\,\.]+$/;
  if (!checksName.match(possibilityName)) {
    Swal.fire({
      icon: "error",
      text: "Name can only contain alphabets! ",
    });
    return false;
  } else if (!checksPhone.match(possibilityPhone)) {
    Swal.fire({
      icon: "error",
      text: "Phone Number can only contain numbers! ",
    });
    return false;
  } else if (!checksEmail.match(possibilityEmail)) {
    Swal.fire({
      icon: "error",
      text: "Enter a valid Email-ID! ",
    });
    return false;
  } else if (!checksAdd.match(possibilityAdd)) {
    Swal.fire({
      icon: "error",
      text: "Address can only contain letters and . , -",
    });
  } else {
    evaluate = true;
    return storedata();
  }
}

//FormSubmission
function storedata() {
  if (evaluate === true) {
    let params = new FormData(form);
    fetch("config.php", { method: "POST", body: params })
      .then((response) => response.json())
      .catch(()=>{
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
          footer: '<a href="https://dev.mysql.com/doc/refman/8.0/en/windows-installation.html" target="_blink">Database connection failure. </a>',
        });
      })
      .then((data) => {
        if (data.success == 1) {
          Swal.fire(
            "Success!",
            "Please hold, while we get back to you.",
            "success"
          ).then(function () {
            evaluate = false;
            window.location = "Index.html";
          });
        } else
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
            footer: '<a href="Index.html">Try Again Later.</a>',
          });
        return false;
      });
  }
}

function ordernow() {
  location.href = "ordernow.html";
}

function about() {
  location.href = "about.html";
}

function home() {
  location.href = "Index.html";
}
