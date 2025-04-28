import { auth, googleProvider } from "../config/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  signInWithEmailAndPassword,
} from "firebase/auth";
import {
  validateSignupForm,
  sanitizeFormData,
  validateLoginForm,
} from "../utils/validation";

export const handleChange = (e, setFormData) => {
  const { name, value } = e.target;
  setFormData((prev) => ({ ...prev, [name]: value }));
};

const handleAuthSubmit = async (
  e,
  formData,
  validateFunction,
  authFunction,
  setErrors,
  navigate
) => {
  e.preventDefault();

  const sanitizedData = sanitizeFormData(formData);
  const formErrors = validateFunction(sanitizedData);

  setErrors(formErrors);

  if (Object.values(formErrors).some((err) => err)) return;

  try {
    await authFunction(auth, sanitizedData.email, sanitizedData.password);
    navigate("/dashboard");
  } catch (err) {
    console.error(err);
  }
};

export const handleSignupSubmit = async (e, formData, setErrors, navigate) => {
  handleAuthSubmit(
    e,
    formData,
    validateSignupForm,
    createUserWithEmailAndPassword,
    setErrors,
    navigate
  );
};

export const handleLoginSubmit = async (e, formData, setErrors, navigate) => {
  handleAuthSubmit(
    e,
    formData,
    validateLoginForm,
    signInWithEmailAndPassword,
    setErrors,
    navigate
  );
};

export const signInWithGoogle = async () => {
  try {
    await signInWithPopup(auth, googleProvider);
  } catch (err) {
    console.error(err);
  }
};
