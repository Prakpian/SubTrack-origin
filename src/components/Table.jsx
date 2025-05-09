import React from "react";
import Button from "./Button";
import { MdEditDocument } from "react-icons/md";
import {
  FaApplePay,
  FaCreditCard,
  FaGooglePay,
  FaPaypal,
} from "react-icons/fa";
import EditModal from "./EditModal";
import { BsBank2 } from "react-icons/bs";
import { SiBitcoinsv } from "react-icons/si";

export default function Table({ data, refetchData }) {
  const nameToIcon = {
    card: <FaCreditCard size={20} />,
    payPal: <FaPaypal size={20} />,
    bankTransfer: <BsBank2 size={20} />,
    googlePay: <FaGooglePay size={20} />,
    applePay: <FaApplePay size={20} />,
    cryptocurrency: <SiBitcoinsv size={20} />,
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
            <th className="px-4 py-3 text-left">Cost (£)</th>
            <th className="px-4 py-3 w-30"></th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => {
            if (item.id !== "timestamp") {
              return (
                <tr key={item.id} className="border border-gray-200">
                  <td className="px-4 py-3">
                    {item.productName.charAt(0).toUpperCase() +
                      item.productName.slice(1)}
                  </td>
                  <td className="px-4 py-3">
                    {item.category.charAt(0).toUpperCase() +
                      item.category.slice(1)}
                  </td>
                  <td className="px-4 py-3">{item.endDate}</td>
                  <td className="px-4 py-3">
                    {nameToIcon[item.paymentMethod]}
                  </td>
                  <td className="px-4 py-3">{item.cost}</td>
                  <td className="px-4 py-3 flex justify-center">
                    <Button
                      variant="ghost"
                      btnText={<MdEditDocument size={20} />}
                      className="hover:bg-gray-200 rounded-full p-2"
                      handleClick={() =>
                        document.querySelector(`#modal-${item.id}`).showModal()
                      }
                    />
                    <EditModal data={item} refetchData={refetchData} />
                  </td>
                </tr>
              );
            }
          })}
        </tbody>
      </table>
      {data.length < 1 && (
        <p className="px-4 my-5">Add a new subscription....</p>
      )}
    </div>
  );
}
