import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../store/cartSlice";
import ItemList from "./ItemList";
const Cart = () => {
  const dispatcher = useDispatch();

  const hanleClearCart = () => {
    dispatcher(clearCart());
  };

  const cartitems = useSelector((store) => store.cart.items);
  return (
    <div className="text-center m-10 p-10">
      <h1 className="font-bold">Cart</h1>
      <button
        className="p-2 m-2 bg-black rounded-lg text-white"
        onClick={hanleClearCart}
      >
        ClearCart
      </button>
      <div className="w-6/12 m-auto">
        {cartitems.length === 0 && (
          <h1 className="m-aut0 text-bold">Cart is Empty</h1>
        )}
        <ItemList items={cartitems} />
      </div>
    </div>
  );
};

export default Cart;
