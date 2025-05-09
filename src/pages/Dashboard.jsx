import React, { useContext, useEffect, useState } from "react";
import Button from "../components/Button";
import { BsSortDown } from "react-icons/bs";
import { FaFilter } from "react-icons/fa";
import Dropdown from "../components/Dropdown";
import Table from "../components/Table";
import NewSubModal from "../components/NewSubModal";
import { addToCollection, getCollection } from "../firebase/firebase.service";
import { AuthContext } from "../context/AuthContext";

export default function Dashboard() {
  const { currentUser } = useContext(AuthContext);
  const [dataCollection, setDataCollection] = useState([]);
  const [displayColleciton, setDisplayCollection] = useState([]);
  const [monthlyCost, setMonthlyCost] = useState(0);

  const fetchData = async () => {
    try {
      const data = await getCollection(currentUser);
      setDataCollection(data);
      setDisplayCollection(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const filterCategory = (category = "All") => {
    setDisplayCollection(
      category === "All"
        ? dataCollection
        : dataCollection.filter(
            (data) => data.category === category.toLowerCase()
          )
    );
  };

  return (
    <div className="bg-gray-100 p-2">
      <div className="max-w-[1200px] w-full mx-auto my-10">
        <section className="grid sm:grid-cols-3 gap-5 mb-10">
          <div className="bg-white rounded-md p-5 grow shadow-(--box-shadow)">
            <h3 className="font-medium">Total Subscription</h3>
            <p className="text-2xl">{dataCollection.length - 1}</p>
          </div>
          <div className="bg-white rounded-md p-5 grow shadow-(--box-shadow)">
            <h3 className="font-medium">Monthly Cost (£)</h3>
            <p className="text-2xl">{monthlyCost}</p>
          </div>
          <div className="bg-white rounded-md p-5 grow shadow-(--box-shadow)">
            <h3 className="font-medium">Yearly Cost (£)</h3>
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
                    { name: "All" },
                    { name: "Low to High Cost" },
                    { name: "High to Low Cost" },
                    { name: "Ending Soon" },
                  ]}
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
          <hr className="my-10 text-gray-300" />
          <Table data={displayColleciton} refetchData={fetchData} />
        </section>
      </div>
    </div>
  );
}
