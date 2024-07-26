import { useStateValue } from "../context/CartProvider";
import Article from "./Article";

const CartArticle = () => {
  const [{ cart }] = useStateValue();
  return (
    <div className='flex flex-col gap-2 px-8 py-12'>
      {cart.map((article) => (
        <Article key={article.id} article={article} />
      ))}
    </div>
  );
};

export default CartArticle;
