import React from "react";
import Button from "../components/partials/Button";
import { Link } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
export default function SignUp() {
  return (
    <form
      action=""
      className="bg-gray-100 max-w-[400px] mx-auto px-2 pt-2 pb-5 rounded-md"
    >
      <div className="bg-white p-8 grid gap-5 rounded-md">
        <h1 className="text-center text-4xl font-bold mt-2">Sign up</h1>
        <p className="text-center text-gray-500">Create an account</p>
        <div className="flex flex-col">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            className="bg-gray-100 p-2 rounded-md mt-2"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            className="bg-gray-100 p-2 rounded-md mt-2"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            placeholder="Confirm your password"
            className="bg-gray-100 p-2 rounded-md mt-2"
          />
        </div>
        <Button btnText={"Submit"} variant={"primary"} />
        <Button
          btnText={
            <div className="flex items-center place-content-center gap-2 ">
              <FaGoogle /> <p>Sign up with Google</p>
            </div>
          }
          variant={"outline"}
        />
      </div>
      <p className="text-center pt-5">
        Already have an account?{" "}
        <Link to={"/login"} className="font-medium">
          Log in
        </Link>
      </p>
    </form>
  );
}
