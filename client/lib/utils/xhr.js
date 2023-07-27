// CRUD는 데이터베이스와 관련된 기본적인 작업을 의미하는 약어로서,
// Create(생성), Read(읽기), Update(수정), Delete(삭제)의 네 가지 작업을 포함하고, 
// 데이터를 관리하는데 필요한 가장 기본적인 작업들을 나타냅니다

// 반면 GET/POST/UPDATE/DELETE는 HTTP 메소드로, 
// 웹에서 데이터를 전송하기 위해서 프로토콜내에서 주어진 약속과 같은 겁니다.

// 둘이 혼동되는 이유는, HTTP 메서드의 종류와 기능이 CRUD 작업과 매우 유사하고, 
// 관례로 CRUD 작업에 대응하는 HTTP 메서드를 사용하는 경우가 많다고 합니다!

// * Create 작업은 새로운 데이터를 생성하므로 HTTP POST 메서드와 연관됩니다.
// * Read 작업은 데이터를 조회하므로 HTTP GET 메서드와 연관됩니다.
// * Update 작업은 데이터를 수정하므로 HTTP PUT(리소스 전체 수정) 또는 PATCH(리소스 일부 수정)메서드와 연관됩니다.
// * Delete 작업은 데이터를 삭제하므로 HTTP DELETE 메서드와 연관됩니다.
/* -------------------------------------------------------------------------- */


// [readystate] 현재의 상태

// xhr 의 readyState 가 아래 내용을 제공
// 0: uninitalized
// 1: loading
// 2: loaded
// 3: interactive
// 4: complete


// 1. UNSENT (숫자 0) : XMLHttpRequest 객체가 생성됨.

// 2. OPENED (숫자 1) : open() 메소드가 성공적으로 실행됨.

// 3. HEADERS_RECEIVED (숫자 2) : 모든 요청에 대한 응답이 도착함.

// 4. LOADING (숫자 3) : 요청한 데이터를 처리 중임.

// 5. DONE (숫자 4) : 요청한 데이터의 처리가 완료되어 응답할 준비가 완료됨.


console.log('?');

// 비동기 통신 종류 xhr and fetch
// xhr 에서 GET 하는 방식을 배울 예정
// xhr 은 비동기통신을 위해 필요한 객체일 뿐인다

/* 기본 문법-------------------------------------------------------------------------- */
// 비동기 통신을 위한 xhr
const xhr = new XHLHttpRequest();

// (메서드 선택, 주소입력)
xhr.open('GET', 'https://jsonplaceholder.typicode.com/users')

// readystatechange 는 콜백함수
xhr.addEventListener('readystatechange',()=>{
  // 이 사이에 이벤트 리스터 성공 실패 내용 여기
})

console.log(xhr.readyState);

// send 해줘야 완료
xhr.send();

// 1. open 
// 2. send
// 3. addEventListener 성공여부 내용으로 확인

/* -------------------------------------------------------------------------- */
// XHLHttpRequest 는 브라우저가 가진 xhr 엔진 
// 이걸 가지고 비동기 통신 가능

// 실행부에서 받은(인자)
function xhr(method,url){

  const xhr = new XHLHttpRequest();

  xhr.open('GET', 'https://jsonplaceholder.typicode.com/users')

  // readystatechange : 상태가 변경이 되면 그때 실행이 되게 해줘
  xhr.addEventListener('readystatechange',()=>{

    // 구조분해할당
    const{status,readyState,response} = xhr;

    // xhr 의 상태가 200 이상 400 미만일때 성공 (성공여부 확인)
    if(xhr.status >= 200 && xhr.status < 400){

      // 문자로 변환
      if(readyState === 4){
        console.log(JSON.parse(response));
      }


      console.log('pass');
    }else{
      console.log('fail');
    }

    // 통신이 성공했을때 보임
    console.log(xhr.status);
    console.log(xhr.readyState);

  })

  xhr.send();

}

// 함수 실행부 (인수)
xhr('GET','https://jsonplaceholder.typicode.com/users',
(result)=>{
  console.log(result);
}
)

/* post 통신-------------------------------------------------------------------------- */
// 값을 생성해서 보내기


/* callback --------------------------------------------- */

function xhr(method, url, onSuccess, onFail, body) {
  const xhr = new XMLHttpRequest();

  xhr.open(method, url);
  xhr.addEventListener('readystatechange', () => {
    const { status, readyState, response } = xhr;
    if (readyState === 4) {
      if (status >= 200 && status < 400) {
        onSuccess(JSON.parse(response));
      } else {
        onFail('실패');
      }
    }
  });
  xhr.send(JSON.stringify(body));
}
// stringify() 안에 넣으면 싹다 문자로 바꿔줌 (다른 기기에서 다른 언어로 보냈을수도 있으니까) a
// JSON.parse : 문자로 받으니까 다시 해석기로 해석

// 이에 반해 fetch 는 간단하다. 

xhr(
  'POST',
  'https://jsonplaceholder.typicode.com/users',
  (result) => {
    console.log(result);
  },
  (err) => {
    console.log(err);
  },
  {
    name:'tiger'
  },
  {
    'content-Type':'application/json',
    'Access-Control-Allow-Origin':'*'
    // 동일출처정책 오류가 나면 손을 벗어난거다. 
    // 던져도 받는게 없으면 작동안한다 (그건 관리자가 허용을 안한거기 때문에)
    // 나는 호스트가 누구건 다 받아서 쓸거야 라는 뜻
  }
);



/* 동일 출처 정책-------------------------------------------------------------------------- */
// 'Access-Control-Allow-Origin'

// 동일 출처 정책(SOP)는 "Same-Origin Policy"의 약자로, 웹 브라우저에서 보안을 강화하기 위해 적용되는 정책입니다. 이 정책은 웹 페이지의 자바스크립트나 XMLHTTPRequest와 같은 리소스들이 동일 출처(origin)에서만 요청하도록 제한하는 보안 메커니즘입니다.

// 출처(origin)란 프로토콜, 호스트, 포트 번호로 구성된 URL을 말합니다. 예를 들어, https://www.example.com와 https://api.example.com은 서로 다른 출처로 간주됩니다. 따라서 www.example.com에서 로드된 웹 페이지는 api.example.com의 리소스를 요청하는 것이 SOP에 위배되며, 브라우저는 이러한 요청을 차단합니다.

// SOP의 목적은 사용자의 개인 정보와 보안을 보호하기 위함입니다. 만약 SOP가 없다면, 악성 웹 사이트가 다른 도메인의 사용자 정보에 접근하는 등 보안 위협이 발생할 수 있기 때문입니다.

// 하지만 SOP는 동일 출처 정책이기 때문에, 웹 애플리케이션에서 다른 도메인의 리소스에 접근해야 하는 경우에는 CORS (Cross-Origin Resource Sharing)와 같은 보안 메커니즘을 사용하여 이를 허용할 수 있습니다. CORS는 서버에서 특정 도메인에서의 요청을 허용하도록 설정하는 방식으로, SOP를 우회하는 방법 중 하나입니다. 이를 통해 웹 애플리케이션이 여러 도메인 간에 안전하게 데이터를 공유하고 상호작용할 수 있도록 합니다.

/* -------------------------------------------------------------------------- */

// method, url, onSuccess, onFail, body, headers
xhr({
  method : 'GET',
  url:'https://jsonplaceholder.typicode.com/users',
  onSuccess:()=>{},
  onFail:()=>{},
  body:{
    name:'tiger'
  },
  headers:{
    'content-Type':'application/json',
    'Access-Control-Allow-Origin':'*'
  }
})

/* -------------------------------------------------------------------------- */
// callback 객체 구조 분해 할당

// 많은 내용을 구조분해할당하기위해 파라미터 영역에 넣어버리면 심플하게 이름을 가져와서 쓸수있다
xhr({
  url:'https://jsonplaceholder.typicode.com/users',
  onSuccess(result){
    console.log( result );
  },
  onFail(err){
    console.log( err );
  },
  body:{
    name:'tiger'
  },
});

/* -------------------------------------------------------------------------- */

// method, url, onSuccess, onFail, body, headers

xhr({
  url:'https://jsonplaceholder.typicode.com/users',
  onSuccess(result){
    console.log( result );
  },
  onFail(err){
    console.log( err );
  },
  body:{
    name:'tiger'
  },
});

// 자스 함수의 본질은 객체다. 그래서 키 벨류를 넣을수있다.
// 사용자(현업자)입장에서는 쉽게 쓰자. 
// 그럴려면 설계자가 함수안에 메서드를 넣어버림. 근데 메서드는 객체안에 함수가 있는게 메서드임
// 객체인데 함수를 객체로 받을수있음. 
// xhr.get(통실할 주소, 성공했을때 콜백함수()=>{},실패했을때 함수()=>{})


xhr.get = ()=>{

}
console.dir(xhr);

// console.log
// 매개변수로 전달된 값을 출력한다.
// 요소를 HTML과 같은 트리 구조로 출력한다.
// console.log로 document.body 객체를 출력하면 태그내용이 출력되고,

// console.dir
// 매개변수로 전달된 객체의 속성을 출력한다.
// 요소를 JSON과 같은 트리 구조로 출력한다.
// console.dir로 document.body 객체를 출력하면 객체의 속성이 출력된다.
// 원래 함수를 호출 


// 강제하기보단 설명서같은 역할 jsDoc
// jsDoc vs typescript 
// jsDoc 필수는 아닌 설명서 https://jsdoc.app/ 나중에 자동 문서화 되서 README 용으로도 쓸수있고 편함
/**
 * @param {string} url 서버와 통신할 주소
 * @param {function} onSuccess 서버와 통신 성공시 실행될 콜백함수
 * @param {function} onFail 서버와 통신 실패시 실행될 콜백함수
 * @returns server data
 */



/* -------------------------------------------------------------------------- */

/**
 * 
 * @param {string} url 서버와 통신할 주소
 * @param {function} onSuccess 서버와 통신 성공시 실행될 콜백 함수 
 * @param {function} onFail 서버와의 통신 실패시 실행될 콜백 함수
 * @return server data
 */

// GET POST PUT 모두 유틸함수로 만들어버림



xhr.get = (url,onSuccess,onFail)=>{
  xhr({
    url,
    onSuccess,
    onFail
  })
}


xhr.post = (url,body,onSuccess,onFail)=>{
  xhr({
    method:'POST',
    url,
    body,
    onSuccess,
    onFail
  })
}


xhr.put = (url,body,onSuccess,onFail)=>{
  xhr({
    method:'PUT',
    url,
    body,
    onSuccess,
    onFail
  })
}

xhr.delete = (url,onSuccess,onFail)=>{
  xhr({
    method:'DELETE',
    url,
    onSuccess,
    onFail
  })
}