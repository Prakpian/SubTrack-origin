import React from "react";
import { BsSortDown } from "react-icons/bs";
import { FaFilter } from "react-icons/fa";
import Dropdown from "../../components/Dropdown";
import Button from "../../components/Button";
import NewSubModal from "../../components/NewSubModal";

export default function DashboardControls({
  searchProductName,
  filterCategory,
  sortTable,
  currentUser,
  fetchData,
}) {
  return (
    <div className="flex flex-col gap-5 lg:flex-row justify-between">
      <div className="flex flex-col sm:flex-row gap-5">
        <div className="flex gap-2">
          <label htmlFor="search" className="place-content-center">
            Search
          </label>
          <input
            type="text"
            id="search"
            className="border border-gray-400 rounded-md p-1"
            placeholder="Search product"
            onChange={(e) => searchProductName(e.target.value)}
          />
        </div>
        <div className="flex gap-2">
          <Dropdown
            text={<FaFilter size={18} />}
            items={[
              { name: "All" },
              { name: "Media" },
              { name: "Software" },
              { name: "Lifestyle" },
              { name: "Finance" },
              { name: "Other" },
            ]}
            onClick={(e) => filterCategory(e.target.innerHTML)}
          />
          <Dropdown
            text={<BsSortDown size={18} />}
            items={[
              { name: "None", value: "none" },
              { name: "Low to High Cost", value: "lowToHigh" },
              { name: "High to Low Cost", value: "highToLow" },
              { name: "Ending Soon", value: "endSoon" },
            ]}
            onClick={(e) => sortTable(e.target.id)}
          />
        </div>
      </div>
      <Button
        btnText={"Add Subscription"}
        variant={"primary"}
        handleClick={() => {
          document.querySelector("#modal-add").showModal();
        }}
      />
      <NewSubModal currentUser={currentUser} refetchData={fetchData} />
    </div>
  );
}
