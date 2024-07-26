import { useStateValue } from "../context/CartProvider";
import CartArticle from "../components/CartArticle";

const CartPage = () => {
  const [{ cart }] = useStateValue();

  if (!cart.length) {
    return (
      <p className='text-center mt-20 text-xl text-slate-400'>
        You back is empty you can start by going to the product list and add it
        to you bag
      </p>
    );
  }

  return (
    <div>
      <CartArticle />
    </div>
  );
};

export default CartPage;
