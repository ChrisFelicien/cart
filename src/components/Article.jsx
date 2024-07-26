import { MdDelete } from "react-icons/md";
import { useStateValue } from "./../context/CartProvider";

const Article = ({ article }) => {
  const [state, dispatch] = useStateValue();

  return (
    <article className='flex justify-around items-center bg-slate-100 gap-2'>
      <img src={article.image} alt={article.tile} className='w-10 h-10' />
      <div className=''>
        <p className='text-slate-600'>Num</p>
        <p className='text-slate-500'>{article.order}</p>
      </div>
      <div>
        <p className='text-slate-500'>Price</p>
        <p className='text-slate-500'>{article.price}</p>
      </div>
      <div>
        <p className='text-slate-500'>Total Price</p>
        <p className='text-slate-500'>{article.price * article.order}</p>
      </div>
      <button onClick={() => dispatch({ type: "delete", payload: article.id })}>
        <MdDelete className='text-3xl text-red-700' />
      </button>
    </article>
  );
};

export default Article;
