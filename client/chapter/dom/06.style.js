/* -------------------- */
/* DOM Styling          */
/* -------------------- */

const { doc } = require("prettier");


/* 클래스를 관리할 수 있게 해주는 DOM 프로퍼티 ------------------------------------ */

const first = getNode('.first');

// console.log( first.className = 'box second' ); // setter
console.log( first.className ); // getter
// console.log( first.className = 'second' ); // setter

// - className – 클래스 전체를 문자열 형태로 반환해주는 프로퍼티로 클래스 전체를 관리할 때 유용
// - classList – 클래스 하나를 관리할 수 있게 해주는 메서드로 개별 클래스를 조작할 때 유용

// add
// remove
// toggle
// contains

first.classList.add('hello');
first.classList.remove('hello');
first.classList.toggle('is-active'); // boolean 값 반환

console.log( first.classList.contains('is-active') );




addClass('.first','hello');



// attr(first,'class',' ');



/* 스타일 변경 방법 --------------------------------------------------------- */

first.style.backgroundColor = 'orange'; // setter
console.log( first.style.backgroundColor ); // getter



// - style.cssText - "style" 속성 전체에 대응하므로 스타일 전체에 대한 문자열 저장


/* 계산된 스타일 읽기 ------------------------------------------------------- */
// 계산이 끝난 스타일값을 가져옴

// - getComputedStyle(element, [pseudoElement]) `읽기 전용`

// .getPropertyValue('.fontSize') 와 .fontSizen 는 같다
console.log(getComputedStyle(first).getPropertyValue('.fontSize'));
console.log(getComputedStyle(first).fontSize);
console.log(getComputedStyle(first).color);


// 객체의 속성에 접근할때 .표기법은 사용할수없다.
// computed propertyu []

/* css -------------------------------------------------------------------------- */
function setCss(node,prop,value){
  
  // 문자일때 조건 처리 : 인자의 타입값이 문자일때 노드 처리 해주세요 
  if(typeof node === 'string') node = getNode(node);

  if(!(prop in document.body.style)){
    throw new SyntaxError('setCss 함수의 두번째 인자인 prop은 유효한 css 속성이 아닙니다')
  }

  if(!value) throw new SyntaxError('setCss 함수의 세번째 인수는 필수값입니다')

  node.style[prop] = value;
}

setCss('.first','color','pink');


const first = getNode('.first');
first.style.backgroundColor='pink';
console.log(getComputedStyle(first).color);



/* getCss -------------------------------------------------------------------------- */

function getCss(node,prop){
  if(typeof node === 'string') x
  
  if(!(prop in document.body.style)){
    throw new SyntaxError('getCss 함수의 두 번째 인자인 prop은 유효한 css 속성이 아닙니다.')
  }
  return getComputedStyle(node).getPropertyValue(prop);
}

const css = (node,prop,value) => {
  return !value ? getCss(node,prop) : setCss(node,prop,value);
}

/* css-------------------------------------------------------------------------- */

