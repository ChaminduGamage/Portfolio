function applyFloatingLabel(inputId, labelId) {
  const inputField = document.getElementById(inputId);
  const label = document.getElementById(labelId);

  inputField.addEventListener("focusin", function () {
    label.style.top = "-20px";
    label.style.fontSize = "0.75rem";
  });

  inputField.addEventListener("focusout", function () {
    if (inputField.value === "") {
      label.style.top = "0";
      label.style.fontSize = "1rem";
    }
  });
}

applyFloatingLabel("name", "label-name");
applyFloatingLabel("email", "label-email");
applyFloatingLabel("phone", "label-phone");
applyFloatingLabel("message", "label-message");
