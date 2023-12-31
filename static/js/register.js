const usernameField = document.querySelector("#usernameField");
const feedBackArea = document.querySelector(".invalid-feedback");

const emailField = document.querySelector("#emailField");
const emailfeedBackArea = document.querySelector(".emailfeedBackArea");

const usernameSuccessOutput = document.querySelector(".usernameSuccessOutput");
const emailSuccessOutput = document.querySelector(".emailSuccessOutput");

const submitBtn = document.querySelector(".submit-btn");

usernameField.addEventListener("keyup", (e) => {
  const usernameVal = e.target.value;

  usernameSuccessOutput.style.display = "block";
  usernameSuccessOutput.textContent = `Checking ${usernameVal}`;

  usernameField.classList.remove("is-invalid");
  feedBackArea.style.display = "none";

  if (usernameVal.length > 0) {
    fetch("/authentication/validate-username", {
      body: JSON.stringify({ username: usernameVal }),
      method: "POST",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("data", data);
        usernameSuccessOutput.style.display = "none";

        if (data.username_error) {
          submitBtn.disabled = true;

          usernameField.classList.add("is-invalid");
          feedBackArea.style.display = "block";
          feedBackArea.innerHTML = `<p>${data.username_error}</p>`;
        } else {
          submitBtn.removeAttribute("disabled");
        }
      });
  }
});

emailField.addEventListener("keyup", (e) => {
  const emailVal = e.target.value;

  emailSuccessOutput.style.display = "block";
  emailSuccessOutput.textContent = `Checking ${emailVal}`;

  emailField.classList.remove("is-invalid");
  emailfeedBackArea.style.display = "none";

  if (emailVal.length > 0) {
    fetch("/authentication/validate-email", {
      body: JSON.stringify({ email: emailVal }),
      method: "POST",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("data", data);

        emailSuccessOutput.style.display = "none";

        if (data.email_error) {
          submitBtn.disabled = true;

          emailField.classList.add("is-invalid");
          emailfeedBackArea.style.display = "block";
          emailfeedBackArea.innerHTML = `<p>${data.email_error}</p>`;
        } else {
          submitBtn.removeAttribute("disabled");
        }
      });
  }
});

// For showing and hiding password
function myFunction() {
  var x = document.getElementById("passwordField");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}
