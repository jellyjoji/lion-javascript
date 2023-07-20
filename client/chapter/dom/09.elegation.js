/* ------------------------ */
/* Event delegation         */
/* ------------------------ */


/* 클래스를 사용한 위임 ---------------- */
// 본인 자체가 아니라 부모에 이벤트를 걸어 한번에 처리하기위한 방법 
// 이벤트 위임 = 부모에만 걸어서 리소스 소모를 줄이는것, (존재하는 것만으로도 리소스 소모하는건 일반 함수도 같다, 이벤트 리스너가 많으면 관리하기 힘드니까 쓰는 이유도 있다 )

const buttonA = getNode('.a');
const buttonB = getNode('.b');
const buttonC = getNode('.c');
const buttonD = getNode('.d');

const buttons = getNode('button');

console.log( );

// 성능상 forEach 를 사용한 item button 불러내기도 충분이 좋지는 않다
// buttons.forEach(item=>{
//   item.addEventListener('click',()=>{
//     console.log('hit');
//   })
// })


/* -------------------------------------------------------------------------- */
// const container = getNode('.container');
// function handleDelegation(){
// }
// container.addEventListener('click',handleDelegation)
const container = getNode('.container');



function handleDelegation(e){
  // console.log(this ===e.currenTarget);
  // this ===e.currenTarget
  // console.log(this);
  // console.log(e.currenTarget);
  console.log(e.target);

  let target = e.target;

  console.log(target.getAttribute('class'));

  if(target.getAttribute('class')==='a'){

  }
  
}

container.addEventListener('click',handleDelegation)


// data-name 으로 값을 찾아주기 
let dataName = target.dateset.name;
// let dataName = attr(target,'data-name');

if(dataName === 'A'){
  console.log('A버튼 클릭');
}

/* 속성을 사용한 위임 ------------------ */


/* 노드를 사용한 위임 ------------------ */


// 중첩되면 target 만 잡히게된다. target은 누른 첫번째 클래스만 잡힌다.
// closest : 내가 선택한 대상의 가장 가까운 부모만 반환 
target.closest('li')
// 그럼 이제 마음놓고 버튼을 눌러도 영역이 잘 선택된다


// return li 를 잡았을때 함수 끝내기 
if(!li) return ; 
if (clssName === 'home'){
  console.log('홈 실행');
}

// 만약 null 을 찾았는데 null 이 비어있다면 중단 return 시켜줘 
if(!li) return 

