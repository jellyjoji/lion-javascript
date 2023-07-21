console.log('hello js!');

// from 어디에서부터 가져올건데?
// import { 함수 파일이 아닌 본문 } from "module";
import { getNode } from "./lib/dom/getNode.js";
// react 에서는 .js 무조건 생략이나, 바닐라자스에서는 .js 붙여줘야함

const first = getNode('#firstNumber');
const second = getNode('#secondNumber');
const result = getNode('.result');


// 인풋의 value 값 구해서 더하기
function handleInput(){
  // 명시적 형변환 Number()
  // 암시적 형변환 +() 
  // 암시적 형변환 나누기 /1() 혹은 곱하기 *1()
  let firstValue = Number(first.value);
  let secondValue = +(second.value);
  console.log(firstValue + secondValue)

  let total = firstValue + secondValue;

  clearContents('.result')
  clearContents(result)
  insertLast('.result',total)
  // '.result' 값 getNode 로 전환
  insertLast(result,total)



}

first.addEventListener('input',handleInput)
second.addEventListener('input',handleInput)

/* -------------------------------------------------------------------------- */
// clear 버튼 누르면 모든 글자가 초기화 될도록
const clear = getNode('#clear')

function handleClear(){
  // first.value
  // second.value

  // 아 여기서 모르겠다 ;;; 
// first 값을 지운다
  clearContents(first)
// second 값을 지운다
  clearContents(second)
// result 값을 지운다
clearContents(result)

  result.textContent = '-'
}
// 이벤트 핸들러 관련에는 handle 로 작명 명시 해주자고 약속 
clear.addEventListener('click', handleClear)