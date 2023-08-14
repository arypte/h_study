import { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <main className="bg-red-100 py-24 px-12 min-h-screen">
      <div className="font-semibold">Review English</div>
      <ul>
        <li>
          <button>Day 1</button>
        </li>
        <li>
          <button>Day 2</button>
        </li>
        <li>
          <button>Day 3</button>
        </li>
      </ul>
    </main>
  );
};

export default Home;
