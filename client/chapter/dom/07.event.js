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

<<<<<<< HEAD

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
=======
// const first = getNode('.first');



function handler(){
  // console.log('HTML 속성에서 이벤트를 실행합니다.');
  console.log('DOM 프로퍼티에서 이벤트를 실행합니다.');
}
// first.onclick = handler;




// click, mousemove, mouseover, mouseout, mousedown, mouseup
// first.addEventListener('click',handleClick);

// const remove = bindEvent('.first','click',handleClick);
// setTimeout(() => {
//   remove()
// }, 3000);




// 이벤트 객체 (event object)
// 이벤트가 발생하면 브라우저는 이벤트 객체라는 것을 만듭니다.
// 객체에 이벤트에 관한 상세한 정보를 넣고, 핸드러의 인수로 형태를 전달한다.

const ground = getNode('.ground');
const ball = getNode('#ball');


function handleClick(e){
  
  let x = e.offsetX;
  let y = e.offsetY;

  ball.style.transform = `translate(${x - (ball.offsetWidth / 2)}px,${y - (ball.offsetHeight / 2)}px)`;

}

function debounce(callback, limit = 100) {
  let timeout
  return function(...args) {
      clearTimeout(timeout)
      timeout = setTimeout(() => {
          callback.apply(this, args)
      }, limit)
  }
}


function throttle(callback, limit = 100) {
  let waiting = false
  return function() {
      if(!waiting) {
          callback.apply(this, arguments)
          waiting = true
          setTimeout(() => {
              waiting = false
          }, limit)
      }
  }
}


ground.addEventListener('click',handleClick);


// throttle debounce

ground.addEventListener('mousemove',debounce((e)=>{
  let x = e.offsetX;
  let y = e.offsetY;

  let template = `
    <div class="emotion" style="top:${y}px;left:${x}px">😍</div>
  `

  insertLast(ground,template)
}));



























// 이벤트 객체














>>>>>>> ed45d9fb4f3144c85998bcafcfe507597694827d
