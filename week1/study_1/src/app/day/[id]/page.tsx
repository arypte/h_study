'use client';

import LeftArrow from '@/app/icons/LeftArrow';
import RightArrow from '@/app/icons/RightArrow';
import Speaker from '@/app/icons/Speaker';
import ReviewCard from '@/components/ReviewCard';
import { NextPage } from 'next';
import Link from 'next/link';
import { useParams } from 'next/navigation';

const Day: NextPage = () => {
  const { id } = useParams();
  // 폴더 명과 일치해야함
  return (
    <main className="min-h-screen flex flex-col justify-start items-center py-24">
      <div className="relative w-full flex justify-center">
        <Link href="/">
          <div className="absolute top-0 left-0">
            <button className="btn-style text-xs font-semibold">Back</button>
          </div>
        </Link>
        <div className="font-semibold mb-24 bt-2">Day {id}</div>
      </div>
      <ReviewCard />
    </main>
  );
};

export default Day;
