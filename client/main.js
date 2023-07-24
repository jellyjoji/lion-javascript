
// import { clearContents, getNode, getRandom, isNumericString, addClass, removeClass, copy } from './lib/index.js'

import { 
  shake,
  getNode, 
  addClass,
  showAlert,
  getRandom, 
  insertLast,
  removeClass,
  clearContents,
  isNumericString,
  toggleClass,
  copy,
 } from './lib/index.js';

import { jujeobData } from './data/data.js'
import { showAlert } from './lib/dom/showAlert.js';


// [phase-1]
// 1. 주접 떨기 버튼을 클릭할 수 있는 핸들러를 연결해 주세요.
// 2. nameField에 있는 값을 가져와 주세요.
// 3. jujeob 데이터 가져오기
// 4. jujeobData에서 랜덤한 주접 한개를 가져와야함.
// 5. pick 항목을 result에 랜더링해 주세요.

// [phase-2]
// 1. 아무 값도 입력 받지 못했을 때 예외처리
// 2. 공백 문자를 받았을 때 예외처리  replace => regEXP
// 3. 숫자형 문자를 받았을 때 (e.g  123, 기안84)


// [phase-3]
// 1. 잘못된 정보를 입력 받으면 사용자에게 알려주세요.
// 2. 재사용 가능한 함수 (showAlert)

// getNode()

const submit = getNode('#submit');
const nameField = getNode('#nameField');
const resultArea = getNode('.result')

function handleSumbmit(e){
  e.preventDefault()

  let name = nameField.value

  console.log(nameField.value);
  console.log(jujeobData(name)[0]);

  const list = jujeobData(name);

  console.log(list[getRandom(list.length-1)]);
  // length 는 9 가 나오고 실제는 0-8까지의 배열 숫자가 필요하므로 -1

  const pick = list[getRandom(list.length-1)]
  console.log(pick);

  if(nameField.value === ''){
    throw error {
    console.log('내용을 입력해주세요')}
  }
  if(!name){
    console.log('이름이 없어요!');

    // 실행되게 해주어야 해서 return
    return
  }
  // 정규 표현식 : 모든 공백을 찾아서 빈 문자로 만들어버리겠다
  if (!name || name.replace(/\s*/g,'') === ''){
    console.log('이름이 없어요');

    // addClass('.alert-error','is-active');
    // getNode('.alert-error').textContent 
    // setTimeout(() => {
    //   removeClass('.alert-error','is-active')
    // }, 2000);

    showAlert('.alert-error','제대로된 이름을 입력해주세요',2000)

    // global gsap
    // 불러온 gsap 사용
    // gsap.to('form',{
    //   duration: 0.1,
    //   x:-10,
    //   repeat:5,
    //   // yoyo 는 돌아오는것 
    //   yoyo:true;
    //   // x 좌표를 클리어 시켜쥬겠다
    //   clearPrrp:'x'

    // })

    // gsap 자체를 새로 실행시키겠다
    shake.restart();
    
    
    return
  }

  // NaN 도 숫자 
  console.log(typeof name);
  // 들어온것 명시적 형변환 시켜서 숫자로 바꿈 
  console.log(Number(name));

  clearContents(resultArea)

  insertLast(resultArea,pick)

}
// NaN 인지 아닌지 확인하기 위해
if(!isNumericString(name)){
  console.log('숫자 타입입니다');
  return;
}

function handleCopy(){
  const text = resultArea.textContent;

   // handleCopy 함수는 네비게이터의 클립보드의 writeText 를 이용하여 resultArea 에 전달 된 textContent 를 복사하는 함수

  // 클립보드 clipboard = 임시저장소. 복사 붙여넣기할때 잠깐 저장하는 공간
  // .then 은 앞에꺼가 잘 생행되면 되에꺼가 실행되게 해주세요 / 성공, then 실행 실패하면 안실행
  // .then : 이루어졌다면 
  // navigator.clipboard.writeText(text).then(()=>{
    // navigator.clipboard.writeText(text)를 util 함수화 copy.js
  copy(text).then(()=>{
    showAlert('.alert-success','클립보드 복사 완료',2000)
})
// 복사가 완료되면 어떻게 처리할지 나중에 설명
// , ()=>{})


}

submit.addEventListener('click',handleSumbmit);
resultArea.addEventListener('click',handleCopy)