import { useNavigate, useParams } from "react-router-dom";
import { useStateValue } from "../context/CartProvider";
import { BASE_URL } from "../utils/constant";
import { useEffect, useState } from "react";
import Loader from "./../components/Loader";

const SingleProductPage = () => {
  const [state, dispatch] = useStateValue();
  const [order, setOrder] = useState(1);
  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    const getProduct = async () => {
      dispatch({ type: "startFetching" });
      try {
        const res = await fetch(`${BASE_URL}/${id}`);

        if (!res.ok)
          throw new Error("Something went wrong while fetching product");
        const data = await res.json();
        dispatch({ type: "getSingleProduct", payload: data });
      } catch (error) {
        dispatch({ type: "error" });
      }
    };

    getProduct();
  }, []);

  if (state.isLoading) {
    return (
      <div className=''>
        <Loader />
      </div>
    );
  }

  if (state.error) {
    return <p>Something went wrong try again later</p>;
  }

  const { currentItem } = state;

  {
    return (
      <article className='px-40 py-32 flex justify-around gap-36 flex-wrap'>
        <div className='w-52 h-64 '>
          <img
            src={currentItem.image}
            className='object-cover max-w-full max-h-full'
          />
        </div>
        <div className='flex-1'>
          <h2 className='font-bold text-2xl text-slate-600 mb-8'>
            {currentItem.title}
          </h2>
          <div className='flex mb-8'>
            <p className='mr-auto font-bold text-xl text-slate-500 self-start'>
              $ {currentItem.price}
            </p>
            <p className='uppercase text-xs mr-12 text-slate-400'>
              {currentItem.category}
            </p>
          </div>
          <p className='text-slate-500 mb-8'>{currentItem.description}</p>
          <div className='flex mb-8 items-center gap-4'>
            <button
              className='text-4xl font-bold text-slate-500 disabled'
              onClick={() => setOrder((curr) => (curr > 1 ? curr - 1 : curr))}
            >
              -
            </button>
            <p className='text-4xl text-slate-500 font-bold'>{order}</p>
            <button
              className='text-4xl font-bold text-slate-500'
              onClick={() => setOrder((curr) => (curr < 10 ? curr + 1 : curr))}
            >
              +
            </button>
          </div>
          <button
            className='bg-slate-800  py-2 px-6 text-slate-300 capitalize rounded-sm'
            onClick={() => {
              dispatch({
                type: "addToCart",
                payload: { order, ...currentItem },
              });
              navigate("/cart");
            }}
          >
            Add to cart
          </button>
        </div>
      </article>
    );
  }
};

export default SingleProductPage;
