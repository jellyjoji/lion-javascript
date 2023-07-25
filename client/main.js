

import { diceAnimation } from "./lib/index.js";

const button = getNode('buttonGroup > button')

// dice animation 불러오기
setInterval(()=>{

  diceAnimation()

}, 100);

// 배열 구조 분해 할당
const [startButton, recordButton, resetButton] = getNodes('.buttonGroup>button');
const buttonGroup = getNode('.buttonGroup');

let isClicked = false;

  // 이렇게 지정하면 아래에서 한번에 사용 가능
  let stopAnimation;

(function handleRollingDice(e){

  let isClicked = false;

  // 이렇게 지정하면 아래에서 한번에 사용 가능
  let stopAnimation;
  // stopAnimation 안에 값이 없어 undefined

  // 함수가 return 으로 함수를 내보내는것 : 클러저
  return ()=>{

  if(!isClicked){

    // setIn  terval(()=>{},100)
    // 0.1초씩 계속 하겠다 
    const id = setInterval(diceAnimation,100);

      console.log('첫번째 클릭');
    }else{
      console.log('두번째 클릭');

      clearInterval(id)
      // 
      clearInterval(stopAnimation)
    }
    // 반전시키기
    isClicked = !isClicked; 
  }
// ()() 즉시 실행 함수 
})()
startButton.addEventListener('click',handleRollingDice)

button.addEventListener('click',diceAnimation())
/* -------------------------------------------------------------------------- */

import { diceAnimation, getNode, getNodes } from "./lib/index.js";


// [phase-1] 주사위 굴리기
// 1. dice animation 불러오기
// 2. 주사위 굴리기 버튼을 클릭하면 diceAnimation 실행 될 수 있도록
//       - 주사위 굴리기 버튼을 가져온다.
//       - 이벤트 핸들러를 연결한다.
//       - 애니메이션 코드를 작성한다.
// 3. 애니메이션 토글 제어 
// 4. 클로저 + IIFE 를 사용한 변수 보호


// [phase-2] 레코드 리스트 control / view
// 1. 주사위가 멈추면 기록/초기화 버튼 활성화


// 배열 구조 분해 할당


const [startButton,recordButton,resetButton] = getNodes('.buttonGroup > button');






const handleRollingDice = ((e)=>{

  let isClicked = false;
  let stopAnimation;  

  return ()=>{

    if(!isClicked){
      stopAnimation = setInterval(diceAnimation, 100);
      recordButton.disabled = true;
      resetButton.disabled = true;

    }else{
      clearInterval(stopAnimation)
      recordButton.disabled = false;
      resetButton.disabled = false;



    }

    isClicked = !isClicked;
  }
})()



startButton.addEventListener('click',handleRollingDice);