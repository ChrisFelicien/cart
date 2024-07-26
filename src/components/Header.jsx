import { IoCartOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useStateValue } from "../context/CartProvider";
const Header = () => {
  const [{ cart }] = useStateValue();
  const numInCart = cart.length;
  return (
    <header className='bg-slate-900 text-slate-100 py-6 px-16 flex items-center justify-between'>
      <p className='text-3xl font-bold uppercase'>
        <Link to='/'>Logo</Link>
      </p>
      <div className='relative'>
        <Link to='/cart'>
          <IoCartOutline className='font-bold text-4xl' />
        </Link>
        <p className='bg-red-400 rounded-full flex justify-center items-center w-6 h-6 absolute bottom-5 left-6'>
          {numInCart}
        </p>
      </div>
    </header>
  );
};

export default Header;
