import { Link } from "react-router-dom";

const Product = ({ product }) => {
  return (
    <div className='w-64 shadow-md self-start'>
      <img
        src={product.image}
        alt='product image'
        className='fit object-cover  h-52 w-full'
      />
      <div className='py-8 px-4'>
        <p className='font-bold text-xl text-slate-800'>
          {product.title.slice(0, 18)}
        </p>
        <div className='flex justify-between items-center'>
          <p className='text-slate-400 text-xl'>{product.price}$ </p>
          <p className='text-slate-400 uppercase text-sm'>{product.category}</p>
        </div>

        <div className='flex justify-between items-center'>
          <p className='text-slate-400'>{product.rating.rate} </p>
          <p className='text-slate-400'>{product.rating.count} In stock</p>
        </div>
      </div>
      <Link
        to={`${product.id}`}
        className='bg-slate-950 block text-slate-100 uppercase text-center py-2 hover:bg-slate-900'
      >
        Details
      </Link>
    </div>
  );
};

export default Product;
