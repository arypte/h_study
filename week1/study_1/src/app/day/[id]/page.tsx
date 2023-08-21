import { NextPage } from 'next';
import Link from 'next/link';

const Day: NextPage = () => {
  return (
    <main className="min-h-screen flex flex-col justify-start items-center py-24">
      <div className="relative w-full flex justify-center">
        <div className="absolute top-0 left-0">
          <Link href="/">
            <button className="btn-style text-xs font-semibold">Back</button>
          </Link>
        </div>
        <div className="font-semibold mb-24 bt-2">Day 1</div>
      </div>
    </main>
  );
};

export default Day;
