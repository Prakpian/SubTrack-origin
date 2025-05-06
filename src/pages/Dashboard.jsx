import React from "react";
import Button from "../components/Button";
import { BsSortDown } from "react-icons/bs";
import { FaFilter } from "react-icons/fa";
import Dropdown from "../components/Dropdown";
import Table from "../components/Table";

export default function Dashboard() {
  return (
    <div className="bg-gray-100 p-2">
      <div className="max-w-[1200px] w-full mx-auto my-10 flex flex-col gap-10">
        <section className="flex flex-col sm:flex-row gap-5">
          <div className="bg-white rounded-md p-5 grow shadow-(--box-shadow)">
            <h3 className="font-medium">Total Subscription</h3>
            <p className="text-2xl">0</p>
          </div>
          <div className="bg-white rounded-md p-5 grow shadow-(--box-shadow)">
            <h3 className="font-medium">Monthly Cost</h3>
            <p className="text-2xl">0</p>
          </div>
          <div className="bg-white rounded-md p-5 grow shadow-(--box-shadow)">
            <h3 className="font-medium">Yearly Cost</h3>
            <p className="text-2xl">0</p>
          </div>
        </section>
        <section className=" bg-white p-4 rounded-md shadow-(--box-shadow)">
          <div className="flex flex-col gap-5 lg:flex-row justify-between ">
            <div className="flex flex-col sm:flex-row gap-5">
              <div className="flex gap-2 ">
                <label htmlFor="search" className="place-content-center">
                  Search
                </label>
                <input
                  type="text"
                  id="search"
                  className="border border-gray-400 rounded-md p-1"
                  placeholder="Search product"
                />
              </div>
              <div className="flex gap-2">
                <Dropdown
                  text={<FaFilter size={18} />}
                  items={[
                    "All",
                    "Media",
                    "Software",
                    "Lifestyle",
                    "Finance",
                    "Other",
                  ]}
                />
                <Dropdown
                  text={<BsSortDown size={18} />}
                  items={[
                    "All",
                    "Low to High Cost",
                    "High to Low Cost",
                    "Ending Soon",
                  ]}
                />
              </div>
            </div>
            <Button btnText={"New Subscription"} variant={"primary"} />
          </div>
          <hr className="my-10 text-gray-300" />
          <Table />
        </section>
      </div>
    </div>
  );
}
