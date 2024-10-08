import Link from 'next/link';
import InputSearch from './InputSearch';

const Navbar = () => {
  return (
    <header className="bg-indigo-500">
      <div className="flex md:flex-row flex-col justify-between p-4 items-center">
        <Link href="/" className='font-bold text-white text-2xl'>ANIMELIST</Link>
        <InputSearch/>
      </div>
    </header>
  )
}

export default Navbar