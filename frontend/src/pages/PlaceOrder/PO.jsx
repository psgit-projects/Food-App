import React, { useContext } from 'react';
import './PO.css';
import { StoreContext } from '../../contaxt/StoreContext';

const PO = () => {
  const { getTotalCartAmount } = useContext(StoreContext);

  return (
    <form className="p-o">
      <div className="p-o-l">
        <p className="title">Delivery Information</p>
        <div className="multi-f">
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
        </div>
        <input type="text" placeholder="Email address" />
        <input type="text" placeholder="Street" />
        <div className="multi-f">
          <input type="text" placeholder="City" />
          <input type="text" placeholder="State" />
        </div>
        <div className="multi-f">
          <input type="text" placeholder="Pincode" />
          <input type="text" placeholder="Country" />
        </div>
        <input type="text" placeholder="Phone Number" />
      </div>

      <div className="p-o-r">
        <div className="c-t">
          <h2>Cart Totals</h2>
          <div className="c-t-d">
            <p>Subtotal</p>
            <p>{getTotalCartAmount()}</p>
          </div>
          <hr />
          <div className="c-t-d">
            <p>Delivery Fee</p>
            <p>${getTotalCartAmount() === 0 ? 0 : 50}</p>
          </div>
          <hr />
          <div className="c-t-d">
            <b>Total</b>
            <b>${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 50}</b>
          </div>
          <button>Proceed To Payment</button>
        </div>
      </div>
    </form>
  );
};

export default PO;
