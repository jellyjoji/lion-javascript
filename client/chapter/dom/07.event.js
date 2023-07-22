/* --------------------- */
/* Event Handling        */
/* --------------------- */


/* 이벤트 핸들링 3가지 방법 --------------------------------------------------- */

// 1. HTML 속성 : onclick="handler()"
// 2. DOM 프로퍼티 : element.onclick = handler
// DOM 프로퍼티 와 HTML 속성 이벤트는 덮여씌여져서 하나만 작동하기때문에 잘 사용하지 않는다 지양

// best 한 방식
// 3. 메서드 : element.addEventListener(event, handler[, phase])


/* 이벤트 추가/제거 --------------------------------------------------------- */

// - addEventListener
// - removeEventListener


const first = getNode('.first')
// 2. DOM 프로퍼티
// 이벤트 하나만 작동하기 때문에 잘 사용안함
first.onclick = handler

// 1. HTML 속성 click 으로 이벤트를 넣으면 하나밖게 넣지 못하는 단점. 그래서 onclick 지양
function handler(){
  console.log('handler working');
};

// 3. 메서드
// 메서드는 이벤트를 여러개 넣을수 있기 때문에 
function handleClick(){
  console.log('event method');
};
first.addEventListener('click',handleClick);
first.addEventListener('mousemove',handleClick);
first.addEventListener('mouseover',handleClick);
first.addEventListener('mouseout',handleClick);
// mouseup 마우스는 클릭하는 순간
first.addEventListener('mousedown',handleClick);
// mouseup 마우스는 떼는 순간
first.addEventListener('mouseup',handleClick);
// 제거 removeEventListener
first.removeEventListener('mouseup',handleClick);

// 2초 뒤에 이벤트를 제거해주세요 
// 제거할때 동일하게 생긴 함수로 작성해주기 (화살표 함수로 변경시 다른 함수가 됨)
setTimeout(() => {
  first.removeEventListener('mouseup',handleClick);
}, 2000);

// 유틸함수로 뽑아내기
bindEvent('.first','click',handler)
