import { Dispatch, FC, SetStateAction, useState, useEffect } from 'react';

import LeftArrow from '@/app/icons/LeftArrow';
import RightArrow from '@/app/icons/RightArrow';
import Speaker from '@/app/icons/Speaker';
import { TReview } from '@/app/day/[id]/page';

type ReviewCardProps = Pick<TReview, 'sentences'> & {
  currentReviewIndex: number;
  setCurrentReviewIndex: Dispatch<SetStateAction<number>>;
};
type TLanguage = 'korean' | 'english';
// string or any 로 적어도 상관없음, 작동함   다만 타입설정은 최대한 줄여주는게 좋다.
// string 으로 하는게 일반적이지만,   이번 케이스 처럼 두가지 값만 가진다는걸 알게 되면 이런식으로 유니온 타입으로 적는게 좋음.

const ReviewCard: FC<ReviewCardProps> = ({
  sentences,
  currentReviewIndex,
  setCurrentReviewIndex,
}) => {
  const [language, setLanguage] = useState<TLanguage>('korean');

  // useEffect(() => {
  //   console.log(currentReviewIndex);
  //   console.log(sentences[currentReviewIndex]);
  // }, []);

  const onClickLanguage = () => {
    if (language === 'korean') {
      setLanguage('english');
    } else {
      setLanguage('korean');
    }
  };

  const onClickPrev = () => {
    if (currentReviewIndex <= 0) setCurrentReviewIndex(sentences.length - 1);
    else setCurrentReviewIndex(currentReviewIndex - 1);
    setLanguage('korean');
  };

  const onClickNext = () => {
    if (currentReviewIndex >= sentences.length - 1) setCurrentReviewIndex(0);
    else setCurrentReviewIndex(currentReviewIndex + 1);
    setLanguage('korean');
  };

  return (
    <div className="w-full">
      <div className="h-60">
        {/* 일단 가로세로 비율을 2:1로 주고  */}
        <div className="border-black border-2 px-4 py-2">
          {/* Working from home isn't for me. I always get distracted */}
          {sentences[currentReviewIndex][language]}
          {/*  {sentences[currentReviewIndex].english or kerean*/}
        </div>
        <div className="mt-2">
          <button className="btn-style">
            <Speaker />
          </button>
        </div>
      </div>
      <div className="mt-4 flex justify-between">
        <button onClick={onClickPrev} className="btn-style">
          <LeftArrow />
        </button>
        <button onClick={onClickLanguage} className="btn-style">
          {/* 줄바꿈이 안일어날 때 쓰는 태그 */}
          <span className={`${language === 'korean' && 'font-semibold'} mr-1`}>
            KOR
          </span>
          /
          <span className={`${language === 'english' && 'font-semibold'} ml-1`}>
            ENG
          </span>
        </button>
        <button onClick={onClickNext} className="btn-style">
          <RightArrow />
        </button>
      </div>
    </div>
  );
};

export default ReviewCard;
