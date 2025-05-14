import React from "react";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import { GoArrowRight } from "react-icons/go";
import { MdOutlineAccountCircle } from "react-icons/md";
import { AiOutlineDatabase } from "react-icons/ai";
import { RiMoneyPoundCircleLine } from "react-icons/ri";

export default function Home() {
  return (
    <div className="place-content-center place-items-center flex flex-col my-10 gap-20">
      <section className="flex gap-20 px-2 py-20 place-items-center">
        <div className="max-w-[400px] grid gap-5">
          <h1 className="text-5xl font-medium">
            Having trouble tracking all your subscription?
          </h1>
          <p>
            With Subtrack, you track all your subscription in one place for
            free!
          </p>
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
      <section className="bg-gray-100 w-full flex flex-col gap-20 p-2 py-20 md:px-10 place-items-center">
        <h1 className="text-center text-3xl font-medium">How does it work?</h1>
        <div className="flex flex-col md:flex-row flex-wrap place-content-center gap-10">
          <div className="w-[300px] h-[300px] bg-white rounded-md p-8 flex flex-col justify-between shadow-(--box-shadow)">
            <p className="text-xl">1</p>
            <div className="flex flex-col gap-3">
              <MdOutlineAccountCircle
                className="text-(--primary-color) bg-gray-100 rounded-full p-2"
                size={50}
              />
              <h2 className="text-3xl font-medium">Sign up</h2>
              <p>Easily make an account on our site using your email</p>
            </div>
          </div>
          <div className="w-[300px] h-[300px] bg-white rounded-md p-8 flex flex-col justify-between shadow-(--box-shadow)">
            <p className="text-xl">2</p>
            <div className="flex flex-col gap-3">
              <AiOutlineDatabase
                className="text-(--primary-color) bg-gray-100 rounded-full p-2"
                size={50}
              />
              <h2 className="text-3xl font-medium">Add data</h2>
              <p>Add all your subscriptions data into the site</p>
            </div>
          </div>
          <div className="w-[300px] h-[300px] bg-white rounded-md p-8 flex flex-col justify-between shadow-(--box-shadow)">
            <p className="text-xl">3</p>
            <div className="flex flex-col gap-3">
              <RiMoneyPoundCircleLine
                className="text-(--primary-color) bg-gray-100 rounded-full p-2"
                size={50}
              />
              <h2 className="text-3xl font-medium">Review subs</h2>
              <p>Track your subscriptions and spending</p>
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-col gap-20 px-2 py-20">
        <h2 className="text-3xl font-medium text-center">
          Benefits of using{" "}
          <span className="underline underline-offset-4 decoration-(--primary-color) decoration-4">
            SubTrack
          </span>
        </h2>
        <div className="flex flex-col md:flex-row gap-10 md:gap-30 place-items-center">
          <img
            src="images/subsTable.png"
            alt="Table from SubTrack dashboard"
            className="max-w-[300px] rounded-md shadow-(--box-shadow)"
          />
          <div className="flex flex-col gap-5 place-content-center text-center md:text-start max-w-[400px]">
            <h3 className="text-4xl font-medium">Avoid unnecessary charges</h3>
            <p className="text-gray-700">
              Use this subscription tracker for{" "}
              <span className="font-medium">FREE </span> to track all your
              subscriptions and avoid any potential charges from unused
              subscriptions you forgot to end.
            </p>
          </div>
        </div>
        <div className="flex flex-col-reverse md:flex-row gap-10 md:gap-30 place-items-center">
          <div className="flex flex-col gap-5 place-content-center text-center md:text-end max-w-[400px]">
            <h3 className="text-4xl font-medium">
              Keep track of your spending
            </h3>
            <p className="text-gray-700">
              SubTrack shows an overview of all your subscription cost per month
              and year to help you keep track of your budget.
            </p>
          </div>
          <img
            src="images/subsStats.png"
            alt="Table from SubTrack dashboard"
            className="max-w-[300px] rounded-md shadow-(--box-shadow)"
          />
        </div>
      </section>
      <section className="bg-[#2C2C2C] text-white w-full p-10 place-items-center grid gap-5">
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
