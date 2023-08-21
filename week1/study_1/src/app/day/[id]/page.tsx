import LeftArrow from '@/app/icons/LeftArrow';
import RightArrow from '@/app/icons/RightArrow';
import Speaker from '@/app/icons/Speaker';
import { NextPage } from 'next';
import Link from 'next/link';

const Day: NextPage = () => {
  return (
    <main className="min-h-screen flex flex-col justify-start items-center py-24">
      <div className="relative w-full flex justify-center">
        <Link href="/">
          <div className="absolute top-0 left-0">
            <button className="btn-style text-xs font-semibold">Back</button>
          </div>
        </Link>
        <div className="font-semibold mb-24 bt-2">Day 1</div>
      </div>
      <div className="bg-red-100 w-full">
        <div>
          <div>Working from home isn't for me. I always get distracted.</div>
          <div>
            <button>
              <Speaker />
            </button>
          </div>
        </div>
        <div>
          <button>
            <LeftArrow />
          </button>
          <button>
            <span>KOR</span>/<span>ENG</span>
          </button>
          <button>
            <RightArrow />
          </button>
        </div>
      </div>
    </main>
  );
};

export default Day;
