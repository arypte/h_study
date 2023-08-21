week1

1. npx create-next-app@latest
   app router 때문에?
   cra 에서는 타입스크립트 초기설정 직접했어야함
   cna 에서는 처음에 설정가능
   타입스크립트가 아직까진 손에 익어서 그냥 사용함

2. globals.css 수정
   테일 윈드 수정만 남기기

3. Main Page 초기화 ( 템플릿 제거 )

4. 버튼 추가

5. 디자인
   grid grid-cols-4 gap-4
   한줄에 4개씩 , 갭

   5_2 layout 수정
   max-w-screen-sm mx-auto
   최대 sm 사이즈, 마진 양쪽에 자동으로

6. componeents 분리
   type interface 정리
   제네릭 정리

7. data.json 파일 생성
   map( v , i ) 사용할때 v 안쓰면 _ 표시 ( _ , i )

8. 동적 라우팅
   {`/day/${index+1}`} : index 0 ~ n-1
   /day/[id]/page.tsx

9. 아이콘 가져오기
   svg , jsx 파일 차이
   뱀 표기법, 카밀표기법? ( 이어서 쓰면서 대문자 or 문자 사이에 - 넣기)

10. 뒤로가기 버튼 추가

11. Day/[id] 페이지 디자인 - 상단부

    - justify-start 가 기본옵션이라 생략가능
      테일윈드가 편하긴 하지만 오리지널 옵션을 알아두는것이 좋다
    - absolute 절대좌표 , 부모 태그에 relative 가 있으면 그 안에서 적용
      대부분 같이씀, 따로 쓸때는 fixed? 를 사용
    - global.css 설정( 내용정리 )

12. li 태그와 link 위치 변경 ( 버튼을 클릭하냐 , 버튼 안 문자를 클릭하냐 )

13. Day/[id] 페이지 디자인 - 하단부
    - span태그는 줄바꿈안할때 사용
