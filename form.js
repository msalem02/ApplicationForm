
function setError(inputId, errorId, message) {
  var input = document.getElementById(inputId);
  var error = document.getElementById(errorId);
  error.innerHTML = message;
  input.style.borderBottom = "2px solid #D40D0D";
}

function clearError(inputId, errorId) {
  var input = document.getElementById(inputId);
  var error = document.getElementById(errorId);
  error.innerHTML = "";
  input.style.borderBottom = "1px solid #737B7D";
}

function isValidEmail(email) {
  return /^\S+@\S+\.\S+$/.test(email);
}

function isValidPhone(phone) {
  return /^[0-9]{10,}$/.test(phone); 
}

var termsAccepted = false;
function openTerms() {
  document.getElementById("terms-modal").style.display = "flex";
}

function closeTerms() {
  document.getElementById("terms-modal").style.display = "none";
}

function toggleTermsAccepted() {
  termsAccepted = document.getElementById("terms-checkbox").checked;
}

function validateCompany() {
  var value = document.getElementById("company-name").value.trim();
  if (value.length === 0) {
    setError("company-name", "company-error", "Company name is required");
    return false;
  }

  clearError("company-name", "company-error");
  return true;
}
function validateBusiness() {
  var value = document.getElementById("business-nature").value.trim();

  if (value.length === 0) {
    setError("business-nature", "business-error", "Nature of business is required");
    return false;
  }

  clearError("business-nature", "business-error");
  return true;
}
function validateAddress() {
  var value = document.getElementById("address").value.trim();

  if (value.length === 0) {
    setError("address", "address-error", "Address is required");
    return false;
  }

  clearError("address", "address-error");
  return true;
}
function validatePostcode() {
  var value = document.getElementById("postcode").value.trim();
  if (value.length === 0) {
    setError("postcode", "postcode-error", "Postcode is required");
    return false;
  }
  clearError("postcode", "postcode-error");
  return true;
}

function validateContactName() {
  var value = document.getElementById("contact-name").value.trim();
  if (value.length === 0) {
    setError("contact-name", "name-error", "Name is required");
    return false;
  }
  if (!value.match(/^[A-Za-z]+(?:\s+[A-Za-z]+)+$/)) {
    setError("contact-name", "name-error", "Write full name");
    return false;
  }
  clearError("contact-name", "name-error");
  return true;
}

function validatePhone() {
  var value = document.getElementById("contact-phone").value.trim();
  if (value.length === 0) {
    setError("contact-phone", "phone-error", "Phone number is required");
    return false;
  }
  if (!isValidPhone(value)) {
    setError("contact-phone", "phone-error", "Use digits only, at least 10 numbers");
    return false;
  }
  clearError("contact-phone", "phone-error");
  return true;
}

function validateEmail() {
  var value = document.getElementById("contact-email").value.trim();
  if (value.length === 0) {
    setError("contact-email", "email-error", "Email is required");
    return false;
  }
  if (!isValidEmail(value)) {
    setError("contact-email", "email-error", "Enter a valid email (example@mail.com)");
    return false;
  }
  clearError("contact-email", "email-error");
  return true;
}

function validateIdea() {
  var value = document.getElementById("idea").value.trim();
  if (value.length === 0) {
    setError("idea", "idea-error", "Please describe your idea");
    return false;
  }
  clearError("idea", "idea-error");
  return true;
}

function validateNewsletter() {
  var field = document.getElementById("newsletter-email");
  var error = document.getElementById("newsletter-error");
  var value = field.value.trim();

  if (value.length === 0) {
    error.innerHTML = "Email is required";
    field.style.borderBottom = "2px solid #D40D0D";
    return false;
  }

  if (!/^\S+@\S+\.\S+$/.test(value)) {
    error.innerHTML = "Enter a valid email";
    field.style.borderBottom = "2px solid #D40D0D";
    return false;
  }

  error.innerHTML = "";
  field.style.borderBottom = "1px solid #737B7D";
  showNewsletterToast(); 
  field.value = ""; 

  return true;
}

function showToast() {
  var t = document.getElementById("toast");
  t.classList.add("show");

  setTimeout(function () {
    t.classList.remove("show");
  }, 3000);
}

function showNewsletterToast() {
  var t = document.getElementById("toast-news");
  t.classList.add("show");

  setTimeout(function () {
    t.classList.remove("show");
  }, 3000);
}

function clearForm() {
  document.getElementById("contact-form").reset();

  var inputs = document.querySelectorAll(".contactForm input");
  inputs.forEach(function (input) {
    input.style.borderBottom = "1px solid #737B7D";
  });

  var errors = document.querySelectorAll(".error-text");
  errors.forEach(function (e) {
    e.innerHTML = "";
  });

  termsAccepted = false;
  document.getElementById("terms-checkbox").checked = false;
}

function validateForm() {
  var companyValid = validateCompany();
  var businessValid = validateBusiness();
  var addressValid = validateAddress();
  var postcodeValid = validatePostcode();
  var nameValid = validateContactName();
  var phoneValid = validatePhone();
  var emailValid = validateEmail();
  var ideaValid = validateIdea();
  var submitError = document.getElementById("submit-error");
  if (!termsAccepted) {
    submitError.innerHTML = "You must read and accept the terms before submitting.";
    return false;
  }
  if (
    !companyValid ||!businessValid ||!addressValid ||!postcodeValid ||!nameValid ||!phoneValid ||!emailValid ||!ideaValid) {
    submitError.innerHTML = "Please fix the errors above before submitting.";
    return false;
  }
  submitError.innerHTML = "";
  showToast();
  clearForm();

  return false; 
}
