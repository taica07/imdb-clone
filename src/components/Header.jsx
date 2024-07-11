import Link from 'next/link';
import MenuItems from './MenuItems';
import { AiFillHome } from 'react-icons/ai';
import { BsFillInfoCircleFill } from 'react-icons/bs';

const Header = () => {
  return (
    <div className="flex justify-between items-center p-3 max-w-6xl mx-auto ">
      <div className="flex gap-4">
        <MenuItems title="home" adress="/" Icon={AiFillHome} />
        <MenuItems title="about" adress="/about" Icon={BsFillInfoCircleFill} />
      </div>
      <Link href={'/'} className="flex gap-1 items-center ">
        <span className="text-2xl font-bold bg-amber-500 py-1 px-2 rounded-lg">
          IMdb
        </span>
        <span className="text-xl hidden sm:inline">Clone</span>
      </Link>
    </div>
  );
};

export default Header;
