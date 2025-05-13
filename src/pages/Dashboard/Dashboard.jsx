import React, { useContext, useEffect, useState } from "react";
import { getCollection } from "../../firebase/firebaseService";
import { AuthContext } from "../../context/AuthContext";
import Table from "../../components/Table";
import DashboardStats from "./DashboardStats";
import DashboardControls from "./DashboardControls";

export default function Dashboard() {
  const { currentUser } = useContext(AuthContext);
  const [dataCollection, setDataCollection] = useState([]);
  const [displayCollection, setDisplayCollection] = useState([]);

  const fetchData = async () => {
    try {
      const data = await getCollection(currentUser);
      const sortData = [...data]
        .filter((item) => item.productName)
        .sort((a, b) => a.productName.localeCompare(b.productName));
      setDataCollection(sortData);
      setDisplayCollection(sortData);
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

  const sortTable = (value) => {
    if (value === "none") {
      const sortAlpha = [...displayCollection]
        .filter((item) => item.productName)
        .sort((a, b) => a.productName.localeCompare(b.productName));
      setDisplayCollection(sortAlpha);
      return;
    }

    const sortByCost = [...displayCollection].sort(
      (a, b) =>
        (value === "lowToHigh" && a.cost - b.cost) ||
        (value === "highToLow" && b.cost - a.cost) ||
        (value === "endSoon" && new Date(a.endDate) - new Date(b.endDate))
    );
    setDisplayCollection(sortByCost);
  };

  const searchProductName = (value) => {
    if (value === "") return setDisplayCollection(dataCollection);
    const searchFilter = [...displayCollection].filter((item) =>
      item.productName.toLowerCase().includes(value)
    );
    setDisplayCollection(searchFilter);
  };

  return (
    <div className="bg-gray-100 p-2">
      <div className="max-w-[1200px] w-full mx-auto my-10">
        {!currentUser.emailVerified && (
          <p className="p-5 rounded-md bg-yellow-100 text-yellow-700 mb-10 italic shadow-(--box-shadow)">
            Please verify you email to keep your account after 24 hours.
          </p>
        )}
        <DashboardStats dataCollection={dataCollection} />
        <section className="bg-white p-4 rounded-md shadow-(--box-shadow)">
          <DashboardControls
            searchProductName={searchProductName}
            filterCategory={filterCategory}
            sortTable={sortTable}
            currentUser={currentUser}
            fetchData={fetchData}
          />
          <hr className="my-10 text-gray-300" />
          <Table data={displayCollection} refetchData={fetchData} />
        </section>
      </div>
    </div>
  );
}
