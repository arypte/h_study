'use client';

import LeftArrow from '@/app/icons/LeftArrow';
import RightArrow from '@/app/icons/RightArrow';
import Speaker from '@/app/icons/Speaker';
import { NextPage } from 'next';
import Link from 'next/link';
import { useParams } from 'next/navigation';

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
      <div className="w-full">
        <div className="h-60">
          <div className="border-black border-2 px-4 py-2">
            Working from home isn't for me. I always get distracted.
          </div>
          <div classname="mt-2">
            <button className="btn-style">
              <Speaker />
            </button>
          </div>
        </div>
        <div className="mt-4 flex justify-between">
          <button className="btn-style">
            <LeftArrow />
          </button>
          <button className="btn-style">
            <span className="mr-1">KOR</span>/
            <span className="ml-1 font-semibold">ENG</span>
          </button>
          <button className="btn-style">
            <RightArrow />
          </button>
        </div>
      </div>
    </main>
  );
};

export default Day;
