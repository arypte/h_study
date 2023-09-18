'use client';

import ReviewCard from '@/components/ReviewCard';
import { NextPage } from 'next';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import data from '@/data.json';
import { useEffect, useState } from 'react';

export type TReview = {
  day: number;
  title: string;
  sentences: {
    english: string;
    korean: string;
  }[];
};

const Day: NextPage = () => {
  const [review, setReview] = useState<TReview>();
  const [currentReviewIndex, setCurrentReviewIndex] = useState<number>(0);

  const { id } = useParams();
  // 폴더 명과 일치해야함

  useEffect(() => {
    if (typeof id !== 'string') return;

    setReview(data[parseInt(id, 10) - 1]);
  }, [id]);

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
      {review && (
        <ReviewCard
          sentences={review.sentences}
          currentReviewIndex={currentReviewIndex}
          setCurrentReviewIndex={setCurrentReviewIndex}
        />
      )}
    </main>
  );
};

export default Day;
