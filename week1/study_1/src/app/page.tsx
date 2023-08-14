import { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <main className="py-24 px-12 min-h-screen flex flex-col justify-start items-center">
      <div className="font-semibold">Review English</div>
      <ul className="mt-12 w-full grid grid-cols-4 gap-4">
        <li className="text-center border-black border-2 font-medium rounded-lg shadow-md shadow-gray-300">
          <button>Day 1</button>
        </li>
        <li className="text-center border-black border-2 font-medium rounded-lg shadow-md shadow-gray-300">
          <button>Day 2</button>
        </li>
        <li className="text-center border-black border-2 font-medium rounded-lg shadow-md shadow-gray-300">
          <button>Day 3</button>
        </li>
      </ul>
    </main>
  );
};

export default Home;
