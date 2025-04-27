import React from "react";
import Button from "../partials/Button";
import { Link } from "react-router-dom";
import { GoArrowRight } from "react-icons/go";

export default function Home() {
  return (
    <div className="place-content-center place-items-center flex flex-col">
      <section className="flex gap-15 px-2 place-items-center">
        <div className="max-w-[400px] grid gap-5">
          <h1 className="text-5xl font-medium">
            Having trouble tracking all your subscription?
          </h1>
          <p>With Subtrack, you track all your subscription in one place!</p>
          <Link to={"/signup"} className="w-fit">
            <Button
              btnText={
                <div className="flex items-center gap-1">
                  Sign up <GoArrowRight />
                </div>
              }
              variant={"primary"}
            />
          </Link>
        </div>
        <img
          src="images/on_phone.jpg"
          alt="woman on phone"
          className="max-w-[300px] hidden md:block rounded-md"
        />
      </section>
      <section className="bg-gray-200 w-full flex flex-col gap-15 mt-20 p-2 py-20 md:px-10 place-items-center">
        <h1 className="text-center text-3xl">How does it work?</h1>
        <div className="flex flex-col md:flex-row flex-wrap place-content-center gap-10">
          <div className="w-[300px] h-[300px] bg-white border rounded-md p-8 flex flex-col justify-between">
            <p className="text-xl">1</p>
            <div className="flex flex-col gap-3">
              <h2 className="text-3xl font-medium">Sign up</h2>
              <p>Easily make an account on our site using your email</p>
            </div>
          </div>
          <div className="w-[300px] h-[300px] bg-white border rounded-md p-8 flex flex-col justify-between">
            <p className="text-xl">2</p>
            <div className="flex flex-col gap-3">
              <h2 className="text-3xl font-medium">Add data</h2>
              <p>Add all your subscriptions data into the site</p>
            </div>
          </div>
          <div className="w-[300px] h-[300px] bg-white border rounded-md p-8 flex flex-col justify-between">
            <p className="text-xl">3</p>
            <div className="flex flex-col gap-3">
              <h2 className="text-3xl font-medium">Review subs</h2>
              <p>Track your subscriptions and spending</p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#2C2C2C] text-white w-full p-10 place-content-center place-items-center grid gap-5">
        <h3 className="text-center text-3xl">
          Save money where you can with{" "}
          <span className="font-medium text-(--primary-color)">SubTrack</span>
        </h3>
        <Link to={"/signup"} className="w-fit">
          <Button
            btnText={
              <div className="flex items-center gap-1">
                Sign up <GoArrowRight />
              </div>
            }
            variant={"primary"}
          />
        </Link>
      </section>
    </div>
  );
}
