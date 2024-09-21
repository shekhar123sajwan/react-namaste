import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="w-6/12 mx-auto">
      <h2 className="font-bold text-2xl text-blue-500">Cart List</h2>
      <button className="bg-red-400 p-1" onClick={handleClearCart}>
        Clear Cart
      </button>
      <ItemList items={cartItems} />
    </div>
  );
};

export default Cart;
