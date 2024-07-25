import { useEffect } from "react";
import { useStateValue } from "../context/CartProvider";
import { BASE_URL } from "../utils/constant";
import Product from "./Product";

const Products = () => {
  const [state, dispatch] = useStateValue();

  useEffect(() => {
    const fetchProducts = async () => {
      console.log("run");
      try {
        dispatch({ type: "startFetching" });

        const res = await fetch(`${BASE_URL}`);

        if (!res.ok) throw new Error("Something went wrong with data fetching");
        const data = await res.json();

        dispatch({ type: "ready", payload: data });
      } catch (error) {
        console.log("Error");
        dispatch({ type: "error" });
      }
    };

    fetchProducts();
  }, [dispatch]);

  if (state.isLoading) {
    return <p>Loading...</p>;
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
