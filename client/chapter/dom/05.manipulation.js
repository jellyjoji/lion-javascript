/* -------------------------- */
/* DOM Manipulation           */
/* -------------------------- */


/* 노드 생성 메서드 --------------------------------------------------------- */

// - document.createElement(tagName) – 태그 이름을 사용해 새로운 요소 생성
// - document.createTextNode(value) – 새로운 텍스트 노드 생성
// - element.cloneNode(deep) – 요소 복제. deep==true일 경우 모든 자손 요소도 복제

// let div = document.createElement('div');
// div.className = 'box';
// div.textContent = '상자';


/* 노드 삽입, 삭제 메서드 ---------------------------------------------------- */

// getNode('h1').append(div);

// - node.append(노드나 문자열) – node 끝에 노드를 삽입
// - node.prepend(노드나 문자열) – node 맨 앞에 노드를 삽입
// - node.before(노드나 문자열) – node 이전에 노드를 삽입
// - node.after(노드나 문자열) – node 다음에 노드를 삽입
// - node.replaceWith(노드나 문자열) – node를 대체
// - node.remove() – node를 제거

// 옛날에는 위와 같이 썼으니ㅏ 이제 insertAdjacent 로 통합해서 씀

/* '오래된' 메서드 ----------------------------------------------------------- */

// - parent.appendChild(node)
// - parent.insertBefore(node, nextSibling)
// - parent.removeChild(node)
// - parent.replaceChild(newElement, node)


/* 특정 위치에 삽입 --------------------------------------------------------- */

// - elementNode.insertAdjacentHTML(어디에?,값);

// - insertAdjacentElement
// - insertAdjacentText

// - "beforebegin" – elem 바로 앞에 html을 삽입
// - "afterbegin" – elem의 첫 번째 자식 요소 바로 앞에 html을 삽입
// - "beforeend" – elem의 마지막 자식 요소 바로 다음에 html을 삽입
// - "afterend" – elem 바로 다음에 html을 삽입

<<<<<<< HEAD
const body = document.body;

// 들어오는 위치가 위쪽이냐 아래쪽이냐를 결정 
body.insertAdjacentHTML('beforeend','<div>button</div>');

const template = '<div>button</div>';
body.insertAdjacentHTML('beforeend',template);

const data = ['빨래하기','게임하기','유투브보기','산책하기'];

// map 순환해서 배열로 나타내는

// 1. 태그를 생성하기
'<li>${data[0]}</li>'
'<li>${data[1]}</li>'
'<li>${data[2]}</li>'
'<li>${data[3]}</li>'

// 2. 태그 안에 아이템값 넣기
// 3. 생성된 태그를 배열로 내보내기
const todoList = data.map((itme)=>{
  console.log(item);
  return '<li>${item}</li>'
})

// 할당했으면 불러서 실행시켜야 콘솔에 찍힌다 
console.log(todoList);

// 4. 내보낸 배열을 순환하기
todoList.forEach((item)=>{
  console.log(item);
}) 

// 5. 반복문 안에서 렌더링하기 
// 6. 렌더링
document.body.insertAdjacentHTML('beforeend',todoList)

// todo 에 적용시킬때 
const todo = getNode('.todo');
todo.insertAdjacentHTML('beforeend',todoList)


function insertLast(node,text){
  node.insertAdjacentHTML('beforeend',text)

  if(typeof node === 'string') node = getNode(node);
  
  if(node.nodeType !== document.ELEMENT_NODE){
    throw new ReferenceError('insertLast 함수의 첫 번째 인수는 ELEMENT NODE 이어야 합니다.');
  }
  node.insertAdjacentHTML('beforeend',text);
}

insertLast('.todo','<div>문자</div>')


function addClass(node,className){
  // 클래스를 추가 제거만 할거기 때문에 return 필요 없음 
  node.classList.add(className)
}

removeClass toggleClass 

function removeClass(node,className){
  if(typeof node === 'string') node = getNode(node);

}

// removeClass 
removeClass('.first') // 모든 클래스를 제거 
=======

const h1 = getNode('h1');

const template = `<div class="box"></div>`

h1.insertAdjacentHTML('beforebegin',template)




const data = ['빨래하기','게임하기','유튜브 보기','산책하기'];


// forEach => 반환 x 
// reduce  => 아무거나 

// filter  => 배열을 반환
// map     => 배열을 반환

// for 문
const todo = getNode('.todo');

// 1. 태그를 생성하기 
`<li>${data[0]}</li>`


/* function render(){

  return(
   
    <ul>
      {
       data.map(item => `<li>${item}</li>`)
      }
    </ul>
  )
}
 */

// 2. 태그 안에 아이템값 넣기

// 3. 생성된 태그를 내보내기(배열) 
const todoList = data.map((item)=>{
  return `<li>${item}</li>`
})

// todo.insertAdjacentHTML('beforeend',todoList)


// for(let i = 0; i < todoList.length; i++){
//   todo.insertAdjacentHTML('beforeend',todoList[i])
// }


// 4. 내보낸 배열 순환하기
todoList.forEach((item)=>{

  // 5. 반복문안에서 랜더링하기
  // todo.insertAdjacentHTML('beforeend',item)
  insertLast(todo,item);

})


// ElementNode.insertAdjacentHTML('beforebegin','text')
// ElementNode.insertAdjacentHTML('afterbegin','text')
// ElementNode.insertAdjacentHTML('beforeend','text')
// ElementNode.insertAdjacentHTML('afterend','text')




insertLast('.todo', '<li>문자하기</li>')



// insertBefore('.todo',text)

// insertLast('.todo',text)



// 6. 랜더링 



















>>>>>>> a3fb15fffb8f973ea9aec5d607d52e0af87d6798

