import React, { useContext, useState } from "react";
import Button from "./Button";
import { deleteDocument, editDocument } from "../firebase/firebaseService";
import { sanitizeText } from "../utils/validation";
import { AuthContext } from "../context/AuthContext";

export default function EditModal({ data, refetchData }) {
  const [formData, setFormData] = useState({
    productName: data.productName,
    category: data.category,
    endDate: data.endDate,
    paymentMethod: data.paymentMethod,
    cost: data.cost,
  });

  const { currentUser } = useContext(AuthContext);

  const onSubmit = async (e) => {
    e.preventDefault();
    setFormData({
      ...formData,
      productName: sanitizeText(formData.productName),
    });

    try {
      await editDocument(currentUser, formData, data.id);
      if (
        formData.productName !== "" ||
        formData.endDate !== "" ||
        formData.cost !== ""
      ) {
        document.querySelector(`#modal-${data.id}`).close();
        refetchData();
      }
    } catch (err) {
      console.error(err);
    }
  };

  const deleteDoc = async () => {
    try {
      await deleteDocument(currentUser, data.id);
      refetchData();
    } catch (err) {
      console.error(err);
    }
  };

  const closeModal = () => {
    document.querySelector(`#modal-${data.id}`).close();
    setFormData({
      productName: data.productName,
      category: data.category,
      endDate: data.endDate,
      paymentMethod: data.paymentMethod,
      cost: data.cost,
    });
  };

  return (
    <dialog id={`modal-${data.id}`} className="modal">
      <div className="modal-box bg-white">
        <h3 className="font-bold text-lg">Edit</h3>
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
                setFormData({ ...formData, cost: e.target.value })
              }
            />
          </div>
          <div className="modal-action flex place-content-between">
            <Button
              type={"button"}
              btnText={"Delete"}
              variant={"danger"}
              handleClick={deleteDoc}
            />
            <div>
              <Button type="submit" btnText={"Save"} variant={"primary"} />
              <Button
                type="button"
                btnText={"Cancel"}
                handleClick={closeModal}
              />
            </div>
          </div>
        </form>
      </div>
    </dialog>
  );
}
