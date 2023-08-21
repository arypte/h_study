import { NextPage } from 'next';

const Day: NextPage = () => {
  return (
    <main>
      <div>
        <div>
          <Link href="/">
            <button>Back</button>
          </Link>
        </div>
        <div>Day 1</div>
      </div>
    </main>
  );
};

export default Day;
