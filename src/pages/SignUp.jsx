import React, { useState } from "react";
import Button from "../components/Button";
import { Link, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import {
  handleChange,
  handleSignupSubmit,
  signInWithGoogle,
} from "../utils/authHandlers";

export default function SignUp() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  return (
    <div className="sm:bg-gray-100 max-w-[400px] mx-auto px-2 pt-2 pb-5 rounded-md">
      <div className="bg-white p-8 flex flex-col gap-5 rounded-md">
        <form
          onSubmit={(e) => handleSignupSubmit(e, formData, setErrors, navigate)}
          className="flex flex-col gap-5"
        >
          <h1 className="text-center text-4xl font-bold mt-2">Sign up</h1>
          <p className="text-center text-gray-500">Create an account</p>
          <div className="flex flex-col">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="bg-gray-100 p-2 rounded-md mt-2"
              name="email"
              value={formData.email}
              onChange={(e) => handleChange(e, setFormData)}
            />
            {errors.email && (
              <p className="text-red-600 mt-2">{errors.email}</p>
            )}
          </div>
          <div className="flex flex-col">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="bg-gray-100 p-2 rounded-md mt-2"
              name="password"
              value={formData.password}
              onChange={(e) => handleChange(e, setFormData)}
            />
            {errors.password && (
              <p className="text-red-600 mt-2">{errors.password}</p>
            )}
          </div>
          <div className="flex flex-col">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              placeholder="Confirm your password"
              className="bg-gray-100 p-2 rounded-md mt-2"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={(e) => handleChange(e, setFormData)}
            />
            {errors.confirmPassword && (
              <p className="text-red-600 mt-2">{errors.confirmPassword}</p>
            )}
          </div>
          <Button btnText={"Submit"} variant={"primary"} />
        </form>
        <Button
          btnText={
            <div className="flex items-center place-content-center gap-2 ">
              <FaGoogle /> <p>Sign up with Google</p>
            </div>
          }
          variant={"outline"}
          handleClick={signInWithGoogle}
        />
      </div>
      <p className="text-center pt-5">
        Already have an account?{" "}
        <Link to={"/login"} className="font-medium">
          Log in
        </Link>
      </p>
    </div>
  );
}
