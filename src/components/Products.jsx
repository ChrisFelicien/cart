import { useEffect } from "react";
import Loader from "./Loader";
import { useStateValue } from "../context/CartProvider";
import { BASE_URL } from "../utils/constant";
import Product from "./Product";

const Products = () => {
  const [state, dispatch] = useStateValue();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        dispatch({ type: "startFetching" });

        const res = await fetch(`${BASE_URL}`);

        if (!res.ok) throw new Error("Something went wrong with data fetching");
        const data = await res.json();

        dispatch({ type: "ready", payload: data });
      } catch (error) {
        dispatch({ type: "error" });
      }
    };

    fetchProducts();
  }, [dispatch]);

  if (state.isLoading) {
    return <Loader />;
  }

  if (state.error) {
    return <p>Something went wrong try again later</p>;
  }

  const { products } = state;

  return (
    <div className='flex flex-wrap gap-8 p-16 justify-center'>
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Products;
