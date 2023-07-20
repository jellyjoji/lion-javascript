// evenListener 를 유틸 함수로 뽑아내기
function bindEvent(node,type,handler){
  // 굳이 노드의 타입이 문자라면 조건 쓰는 이유: 나혼자가 아닌 다같이 쓰는 코드이기때문에 다른 사용자가 다른 타입을 가져올수도 있기때문에 
    if(typeof node === 'string'){
      node = getNode(node); 
    }
    // node.addEventListener(type,handler)
    // | or 여러 이벤트를 /g 전역에서 찾아서 .test 테스트하고 ! 일치하지 않으면 에러메시지 
    if(!(/mouseenter|click|mousemove|mouseout|mouseover/g).test(type)){
      throw new TypeError('bindEvent 함수의 두 번째 인수는 유효한 이벤트 타입 이어야 합니다.')
    }
    node.addEventListener(type,handler)

    // closure 왜 클로저인지는 이해가 안감 
    return ()=>{
      return node.addEventListener(type,handler)
    }
};


// bindEvent('.first',handler)
// bindEvent('.first','click',handler)
/* -------------------------------------------------------------------------- */

// event object 이벤트 객체
// 이벤트가 발생하면 브라우전느 이벤트 객체라는 것을 만듭니다.
// 객체에 이벤트에 관한 상세한 정보를 넣고, 핸들러의 인수로 형태를 전달합니다.

// e = event 객체
// click 을 하면 event에 관한 모든 객체를 제공해 주겠다. (e)
function handleClick(e){
  let x = e.offsetX
  let y = e.offsetY

  console.log(x,y);
  // console.log(e.offsetX, e.offsetY);

  // ball.style.transform = `translate(${x}px,${y}px)`
  // 공이 마우스의 중간에 오도록 조정
  ball.style.transform = `translate(${x - (ball.offsetWidth / 2)}px,${y - (ball.offsetHeight / 2)}px)`;

}

const ground = getNode('.ground');
const ball = getNode('#ball')
first.addEventListener('click',handleClick);

ground.addEventListener('mousemove',(e)=>){

}

// 함수를 덜 불러와 성능을 낮추는 함수 throttle debounce
// Debounce(디바운스): 같은 이벤트가 반복되게 발생하는 경우 반복적으로 발생하던 이벤트가 일정 시간동안 다시 발생하지 않으면(즉, 반복적으로 발생하던 이벤트가 끝나면) 콜백 함수를 실행되도록 하는 것.
// Throttle(쓰로틀): 같은 이벤트가 반복되게 발생하는 경우 일정 시간 간격으로 콜백 함수를 실행되도록 하는 것. (즉, 한번 콜백 함수가 한번 실행되면 같은 이벤트가 발생되더라도 일정 시간동안은 해당 콜백함수를 실행시키지 않게 해주는 것)