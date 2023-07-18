<<<<<<< HEAD
=======

>>>>>>> a3fb15fffb8f973ea9aec5d607d52e0af87d6798
/* ------------------------------------ */
/* HTML Attributes vs. DOM Properties   */
/* ------------------------------------ */

<<<<<<< HEAD
// 속성과 프로퍼티의 차이?
// 속성 HTML 안에 쓰임
// 프로퍼티 DOM 객체 안에 쓰임
// HTML 을 파싱해서 DOM 을 만든다. 
// 생성된 DOM 객체들이 어떻게 속성을 가져가냐? HTML의 속성에 DOM property (1:1매칭) 를 만들어서 가져간다.
// 속성에 접근하는 방법과 프로퍼티에 접근하는 방법, 비표준에 접근하는 방법을 배울 예정
=======
>>>>>>> a3fb15fffb8f973ea9aec5d607d52e0af87d6798

/* HTML 속성 ------------------------------------------------------------- */

// 브라우저는 HTML 태그를 해석해 DOM 객체를 만들 때 HTML 표준 속성을 인식하고, 
// 이 표준 속성을 사용해 DOM 프로퍼티를 생성합니다. 표준 속성이 아닌 경우, 
// 이에 매핑하는 DOM 프로퍼티가 생성되지 않습니다.
// HTML 속성 값은 항상 문자열입니다.

<<<<<<< HEAD
// HTML 속성의 값을 가져오면 프로퍼티가 된다



const first = getNode('.first');

console.dir(first);
console.log(first.id);
// .class 가 아닌 className 이라고 써줘야 인식 
console.log(first.className);
// HTML 의 표준 속성이 아닐경우 DOM 에 쓸수없다.
// console.log(first.size); (X)

=======
class aa{

}

const first = getNode('.first');

console.log( first.size );
>>>>>>> a3fb15fffb8f973ea9aec5d607d52e0af87d6798

/* DOM 프로퍼티 ----------------------------------------------------------- */

// DOM 노드(DOM node)는 JavaScript 객체입니다.
// DOM 프로퍼티와 메서드는 일반 JavaScript 객체처럼 행동하므로 아래와 같은 특징을 보입니다.
// - 어떤 값이든 가질 수 있습니다.
// - 대·소문자를 구분하므로 `elem.nodeType`이 아닌, `elem.NoDeTyPe`는 동작하지 않습니다.
// - DOM 프로퍼티는 HTML 속성과 달리 값이 항상 문자열이 아닙니다.


/* DOM 프로퍼티 검토 ------------------------------------------------------- */

// - elementNode.hasAttribute(name) – 속성 존재 여부 확인
// - elementNode.getAttribute(name) – 속성값을 가져옴
// - elementNode.setAttribute(name, value) – 속성값을 변경함
// - elementNode.removeAttribute(name) – 속성값을 지움
// - elementNode.attributes – 열거 가능한(iterable) 속성 집합을 반환함

<<<<<<< HEAD
// 속성이 있는지 없는지 여부만 true false 로 반환
console.log(first.hasAttribute('class'));
console.log(first.hasAttribute('id'));
console.log(first.hasAttribute('size'));

// getAttribute : 속성값을 가져올때
console.log(first.getAttribute('class'));
// setAttribute : setting. title을 message 라는 이름으로 세팅하겠다.
first.setAttribute('title','message') // title='message'
first.setAttribute('class','second') // class='second'

// removeAttribute : 삭제
first.removeAttribute('title') // title 항목 삭제
first.setAttribute('title','') // title 내용 비우기

// 모든 값들을 객체로 반환
console.log(first.attribute)
// iterator 내장
// for(let value of first.attribute){console.log(value);}
=======

// console.log( first.hasAttribute('title') );
// console.log( first.getAttribute('size') );
first.setAttribute('title','메세지')
// first.setAttribute('class','')
first.removeAttribute('title');
// console.log( first.attributes );


first.getAttribute('id') // message

>>>>>>> a3fb15fffb8f973ea9aec5d607d52e0af87d6798

/* 비표준 속성, 프로퍼티 설정 ------------------------------------------------- */

// data-* 속성은 커스텀 데이터를 안전하고 유효하게 전달해줍니다.
// data-* 속성을 사용하면 읽기 쉽고, 수정도 손쉽습니다.

// - elementNode.dataset

<<<<<<< HEAD
// data- : data-(하이픈) 으로 적어야 가져올수 있다. 예시 data-size
console.log(first.dataset);
console.log(first.dataset.size);
console.log(first.dataset.tabIndex); // getter 
console.log(first.dataset.animation = 'paused'); //setter

// data-(하이픈) 으로 적어야 가져올수있고 first.dataset 으로 사용할수있다


first.getAttribute('id') // 대신에 attribute 를 바로 가져올수있는 유틸 함수 만들기

// 함수 선언부
// 인수의 변수명은 알아보기 쉽게 짓는게 좋다. (node를 받는다,prop을 전달시킨다)
function getAttr(node,prop){

  // 내부적을 쓸 변수 정의
  // const node = '.first';
  // const prop = 'id';

  // 0. 넘어온 대상이 문자인지를 체크
  // 1. 체크후 element node 로 변경해줘야함

  // 문자인 .second를 DOM 으로 바꿔주기 
  // 만약 전달받은 값이 문자라면
  // validation 확인작업
  if(typeof node === 'string'){ 
    // 변환된 대상을 사용해줘
    node = getNode(node);
  }

  //return .frist.getAttribut('id');
  return node.getAttribute(prop)
}

// 함수 실행부
// 값을 가져오는 함수
getAttr('.first','id')

/* -------------------------------------------------------------------------- */

// 대상을 받고 

function setAttr(node,prop,value){
  // 문자로 받은 node 바꿔주기
  if(typeof node === 'string'){ 
    node = getNode(node);
  }
  // 만약 전달받은 prop의 타입이 string 이 아니라면 에러 송출
  if(typeof node !== 'string'){
    throw new Error('...')
  }

  // 만약 노드의 prop 이 아닐때 dataset 을 붙여
  if(!node[prop]){
    node.dataset[prop]=value;
    return;
  }

  // node 로 넘어온 first 가 'class'가 아니라면 dataset으로 정의해라 
  if(!node[prop] && prop !== 'class'){
    node.dataset[prop] = value;
    return;
  }

    // return 함수가 내뱉어서 어떤값을 줄때 사용
  // set 은 setting 을 하고 완료하기때문에 return 이 필요가 없다
  node.setAttribute(prop,value)
  // return 'success'
}


setAttr('.first','title','인사멘트');


function attr(node,prop,value){
  if(!value){
    node.getAttr(node.prop);
  }else{
    setAttr(node,prop,value)
  }
}



/* -------------------------------------------------------------------------- */
=======


// console.log( first.dataset.tabIndex ); // getter

console.log( first.dataset.animation = 'paused' ); // setter






const value = attr('.first','class') // getter

console.log( value );



// attr('.first','class','second') // setter
















>>>>>>> a3fb15fffb8f973ea9aec5d607d52e0af87d6798
