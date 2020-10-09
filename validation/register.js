// Convert all empty fields to an empty string before running validation checks (validator only works with strings)
// Check for empty fields, valid email formats, password requirements and confirm password equality using validator functions
// Return our errors object with any and all errors contained as well as an isValid boolean that checks to see if we have any errors

// Pull in validator and is-empty dependencies
const Validator = require("validator");
const isEmpty = require("is-empty");
// Export the function validateRegisterInput, which takes in data as a parameter (sent from our frontend registration form, which we’ll build in Part 2)
module.exports = function validateRegisterInput(data) {
  // Instantiate our errors object
  let errors = {};
  // Convert empty fields to an empty string so we can use validator functions
  data.name = !isEmpty(data.name) ? data.name : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";
  data.password2 = !isEmpty(data.password2) ? data.password2 : "";

  //name check
  if (Validator.isEmpty(data.name)) {
    error.name = "Name field is required";
  }

  //email check
  if (Validator.isEmpty(data.email)) {
    error.email = "Email field is required";
  } else if (!Validator.isEmail(data.email)) {
    error.email = "Email is invalid";
  }

  //Password check
  if (Validator.isEmpty(data.password)) {
    error.password = "password field is required";
  }

  if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
    errors.password = "Password must be at least 6 characters";
  }
  if (!Validator.equals(data.password, data.password2)) {
    errors.password2 = "Passwords must match";
  }
  return {
    errors,
    isValid: isEmpty(errors)
  };
};
