/* ---------------------------- */
/* Event bubbling & capturing   */
/* ---------------------------- */


/* 버블링 ----------------------------------------------------------------- */
// 버블링은 버튼을 누를때 차례대로 올라가는 형태
// 캡쳐링은 거꾸로 올리가는 형태
const section = getNode('section');
const article = getNode('article');
const p = getNode('p');

// %c section 콘솔 글자에 색상 넣기
section.addEventListener('click',()=>{
  console.log('%c section','color:orange');
})

article.addEventListener('click',(e)=>{
  e.stopPropagation()
  console.log('%c article','color:dodgerblue');
})

p.addEventListener('click',(e)=>{
  // stopPropagation : 번지는검 멈춤. 중복되는 요소를 멈추게 해줌. 상위 엘리먼트들로의 이벤트 전파를 중단
  e.stopPropagation()
  console.log('%c p','color:hotpink');
})

/* 캡처링 ----------------------------------------------------------------- */