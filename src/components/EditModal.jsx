import React from "react";
import Button from "./Button";

export default function EditModal({ data }) {
  return (
    <dialog id={`model-${data.name}`} className="modal">
      <div className="modal-box bg-white">
        <h3 className="font-bold text-lg">Edit</h3>
        <form className="py-4 grid gap-3">
          <div className="grid">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              value={data.name}
              className="border border-gray-400 rounded-md p-1"
            />
          </div>
          <div className="grid">
            <label htmlFor="selectCategory">Category</label>
            <select
              id="selectCategory"
              className="border border-gray-400 rounded-md p-1"
              defaultValue={data.payment.toLowerCase()}
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
              type="text"
              id="endDate"
              value={data.end}
              className="border border-gray-400 rounded-md p-1"
            />
          </div>
          <div className="grid">
            <label htmlFor="paymentMethod">Payment Method</label>
            <select
              id="paymentMethod"
              className="border border-gray-400 rounded-md p-1"
              defaultValue={data.payment.toLowerCase()}
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
              type="text"
              id="cost"
              value={data.cost}
              className="border border-gray-400 rounded-md p-1"
            />
          </div>
          <div className="modal-action">
            <Button
              type="submit"
              btnText={"Save"}
              variant={"primary"}
              handleClick={() =>
                document.querySelector(`#model-${data.name}`).close()
              }
            />
            <Button
              type="button"
              btnText={"Cancel"}
              handleClick={() =>
                document.querySelector(`#model-${data.name}`).close()
              }
            />
          </div>
        </form>
      </div>
    </dialog>
  );
}
