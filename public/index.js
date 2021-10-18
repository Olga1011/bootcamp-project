let toastTrigger = document.getElementById("liveToastBtn");
let toastLiveExample = document.getElementById("liveToast");
let name = document.getElementById("name");
let email = document.getElementById("email");
let textarea = document.getElementById("textarea");

let showToast = () => {
  let toast = new bootstrap.Toast(toastLiveExample);

  if (
    name.value.length === 0 ||
    email.value.length === 0 ||
    textarea.value.length === 0
  ) {
    alert("Please fill out the form");
  } else {
    toast.show();
  }
};

if (toastTrigger) {
  toastTrigger.addEventListener("click", showToast);
}
