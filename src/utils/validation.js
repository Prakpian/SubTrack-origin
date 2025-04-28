export const sanitizeEmail = (email) => {
  return email.trim().toLowerCase();
};

export const sanitizePassword = (password) => {
  return password.trim();
};

export const validateEmail = (email) => {
  const cleanEmail = sanitizeEmail(email);
  if (!cleanEmail) return "Email is required";
  if (!/^\S+@\S+\.\S+$/.test(cleanEmail)) return "Email is invalid";
  return "";
};

export const validateSignupPassword = (password) => {
  const cleanPassword = sanitizePassword(password);
  if (!cleanPassword) return "Password is required";
  if (cleanPassword.length < 8) return "Password must be at least 8 characters";
  return "";
};

export const validateLoginPassword = (password) => {
  const cleanPassword = sanitizePassword(password);
  if (!cleanPassword) return "Password is required";
  return "";
};

export const validateConfirmPassword = (password, confirmPassword) => {
  const cleanConfirmPassword = sanitizePassword(confirmPassword);
  if (password !== cleanConfirmPassword) return "Passwords do not match";
  return "";
};

export const validateSignupForm = ({ email, password, confirmPassword }) => {
  return {
    email: validateEmail(email),
    password: validateSignupPassword(password),
    confirmPassword: validateConfirmPassword(password, confirmPassword),
  };
};

export const validateLoginForm = ({ email, password }) => {
  return {
    email: validateEmail(email),
    password: validateLoginPassword(password),
  };
};

export const sanitizeFormData = (formData) => {
  const sanitized = {
    email: sanitizeEmail(formData.email),
    password: sanitizePassword(formData.password),
  };
  if (formData.confirmPassword !== undefined) {
    sanitized.confirmPassword = sanitizePassword(formData.confirmPassword);
  }
  return sanitized;
};

export const sanitizeText = (text) => {
  return text.trim().replace(/</g, "&lt;").replace(/>/g, "&gt;");
};
