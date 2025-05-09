import { auth, db, googleProvider } from "../firebase/firebase.config";
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
import { doc, setDoc } from "firebase/firestore";

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
    if (authFunction === createUserWithEmailAndPassword) {
      await setDoc(doc(db, sanitizedData.email, "timestamp"), {
        createdAt: new Date(),
      });
    }
    navigate("/dashboard");
  } catch (err) {
    if (err.code === "auth/email-already-in-use") {
      setErrors({ email: "This email is already registered" });
    }
    if (err.code === "auth/invalid-credential") {
      setErrors({ invalid: "Incorrect Email or Password" });
    }

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
