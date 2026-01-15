import { useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  const handleClearCart = () => { 
    dispatch(clearCart());
  }

  return (
    <div className="text-center m-auto">
        <div className="flex justify-center"> 
        <h1 className="font-bold m-4 p-4 text-2xl">Cart</h1>
        <button className="cursor-pointer bg-green-200 px-4 py-2 rounded-lg my-6" onClick={handleClearCart}>Clear Cart</button>
        </div>
      
      <div className="w-1/2 m-auto p-4">
        {cartItems.length === 0 ? (
          <h2 className="font-bold text-xl">Cart is Empty</h2>
        ) : (
          <ul>
            {cartItems.map((item) => (
              <li className="border p-4 my-4 flex justify-between items-center" key={item.card.info.id}>{item.card.info.name} 
              <button className="ml-4 p-2 bg-red-100 rounded-lg cursor-pointer">{item.card.info.price/100}</button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Cart;
