import React, { useState } from "react";
import Button from "./Button";
import { addToCollection } from "../firebase/firebaseService";
import { sanitizeText } from "../utils/validation";

export default function NewSubModal({ currentUser, refetchData }) {
  const [formData, setFormData] = useState({
    productName: "",
    category: "media",
    endDate: "",
    paymentMethod: "card",
    cost: "",
  });

  const onSubmit = async (e) => {
    e.preventDefault();
    setFormData({
      ...formData,
      productName: sanitizeText(formData.productName),
    });

    try {
      await addToCollection(currentUser, formData);
      if (
        formData.productName !== "" ||
        formData.endDate !== "" ||
        formData.cost !== ""
      ) {
        setFormData({
          productName: "",
          category: "media",
          endDate: "",
          paymentMethod: "card",
          cost: "",
        });
        document.querySelector("#modal-add").close();
        refetchData();
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <dialog id="modal-add" className="modal">
      <div className="modal-box bg-white">
        <h3 className="font-bold text-lg">Add Subscription</h3>
        <form className="py-4 grid gap-3" onSubmit={onSubmit}>
          <div className="grid">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              value={formData.productName}
              className="border border-gray-400 rounded-md p-1"
              onChange={(e) =>
                setFormData({ ...formData, productName: e.target.value })
              }
              required
            />
          </div>
          <div className="grid">
            <label htmlFor="selectCategory">Category</label>
            <select
              id="selectCategory"
              className="border border-gray-400 rounded-md p-1"
              value={formData.category}
              onChange={(e) =>
                setFormData({ ...formData, category: e.target.value })
              }
            >
              <option value="media">Media</option>
              <option value="software">Software</option>
              <option value="lifestyle">Lifestlye</option>
              <option value="finance">Finance</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="grid">
            <label htmlFor="endDate">End Date</label>
            <input
              type="date"
              id="endDate"
              value={formData.endDate}
              className="border border-gray-400 rounded-md p-1"
              onChange={(e) =>
                setFormData({ ...formData, endDate: e.target.value })
              }
              required
            />
          </div>
          <div className="grid">
            <label htmlFor="paymentMethod">Payment Method</label>
            <select
              id="paymentMethod"
              className="border border-gray-400 rounded-md p-1"
              value={formData.paymentMethod}
              onChange={(e) =>
                setFormData({ ...formData, paymentMethod: e.target.value })
              }
            >
              <option value="card">Card</option>
              <option value="bankTransfer">Bank transfer</option>
              <option value="payPal">PayPal</option>
              <option value="googlePay">Google Pay</option>
              <option value="applePay">Apple Pay</option>
              <option value="cryptocurrency">Cryptocurrency</option>
            </select>
          </div>
          <div className="grid">
            <label htmlFor="cost">Cost</label>
            <input
              type="number"
              id="cost"
              value={formData.cost}
              className="border border-gray-400 rounded-md p-1"
              onChange={(e) =>
                setFormData({
                  ...formData,
                  cost: e.target.value,
                })
              }
              required
            />
          </div>
          <div className="modal-action">
            <Button type="submit" btnText={"Add"} variant={"primary"} />
            <Button
              type="button"
              btnText={"Cancel"}
              handleClick={() => {
                document.querySelector("#modal-add").close();
                setFormData({
                  productName: "",
                  category: "media",
                  endDate: "",
                  paymentMethod: "card",
                  cost: "",
                });
              }}
            />
          </div>
        </form>
      </div>
    </dialog>
  );
}
