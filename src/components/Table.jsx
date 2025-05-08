import React from "react";
import Button from "./Button";
import { MdEditDocument } from "react-icons/md";
import { FaCreditCard, FaPaypal } from "react-icons/fa";
import EditModal from "./EditModal";

export default function Table() {
  const mockData = [
    {
      name: "Netflix",
      cost: 12.99,
      category: "Media",
      end: "22/05/2025",
      payment: "card",
    },
    {
      name: "NordVPN",
      cost: 89.88,
      category: "Software",
      end: "20/8/2027",
      payment: "payPal",
    },
  ];

  const nameToIcon = {
    card: <FaCreditCard size={20} />,
    payPal: <FaPaypal size={20} />,
  };

  return (
    <div className="overflow-x-scroll md:overflow-hidden w-full">
      <table className="min-w-[500px] w-full">
        <thead>
          <tr>
            <th className="px-4 py-3 text-left max-w-1/3 w-full">Name</th>
            <th className="px-4 py-3 text-left">Category</th>
            <th className="px-4 py-3 text-left">End Date</th>
            <th className="px-4 py-3 text-left">Payment</th>
            <th className="px-4 py-3 text-left">Cost</th>
            <th className="px-4 py-3 w-30"></th>
          </tr>
        </thead>
        <tbody>
          {mockData.map((data) => {
            return (
              <tr key={data.name} className="border border-gray-200">
                <td className="px-4 py-3">{data.name}</td>
                <td className="px-4 py-3">{data.category}</td>
                <td className="px-4 py-3">{data.end}</td>
                <td className="px-4 py-3">{nameToIcon[data.payment]}</td>
                <td className="px-4 py-3">{data.cost}</td>
                <td className="px-4 py-3 flex justify-center">
                  <Button
                    variant="ghost"
                    btnText={<MdEditDocument size={20} />}
                    className="hover:bg-gray-200 rounded-full p-2"
                    handleClick={() =>
                      document.querySelector(`#model-${data.name}`).showModal()
                    }
                  />
                  <EditModal data={data} />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {mockData.length <= 0 && (
        <p className="px-4 my-5">Add a new subscription....</p>
      )}
    </div>
  );
}
