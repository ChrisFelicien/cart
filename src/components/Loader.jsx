import { Oval } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className='flex items-center justify-center py-52'>
      <Oval visible={true} height='80' width='80' color='#49494948' />
    </div>
  );
};

export default Loader;
