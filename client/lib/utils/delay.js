

// 콜백함수 : 함수의 실행을 뒤로 늦추는 것 

// 언제 실행시킬지 timeout 으로 설정
function delay(callback,timeout=1000){
  setTimeout(callback,timeout);
}

console.log(1);
console.log(2);
console.log(3);

// 위 delay 함수 실행
delay();
// 함수 본문을 던졌고 그 안에서 실행시킨다
delay(()=>{

},2000);

// 1 - 2 - 3

delay(()=>{
  delay2(()=>{
    delay3(()=>{})
  })
});

function delay2(callback,timeout=1000){
  setTimeout(callback,timeout);
}

function delay3(callback,timeout=1000){
  setTimeout(callback,timeout);
}

first.style.top = '-100px';
first.style.transform = 'rotate(360deg)'


/* 콜백 지옥을 벗어나기 위한 promise-------------------------------------------------------------------------- */

new Promise 에 new 를 반드시 붙여줘야한다
onfail 했을때를 대비한다 

buildin : 이미 탑재되어 있는것
resolve = successs
reject = onfail
buildin(이미 탑재)하여 다 알아서 제공

promiseState
promise state fulfilled = resolved 



then,catch

성공하면 뭘받을지(첫번째는 성공했을떄,두번쨰는 실패했을때)
promise.then()
promise.then(result)

.then

성공시 
result((()=>{}),(()=>{}))에서 첫번째가 성공을 전달받음

try catch

function delayP(){
   return new Promise((resolve, reject) => {
    // delayP 함수를 실행하면 리턴되는 값이 promise 객체
    resolve('성공입니다')

    { excutor  : 무조건 실행 1번 }
   })
}
// promise 객체가 튀어나왔기때문에 성공했을때 구절

// 성공하면 결과값이 아니라 promise 에 써놓은 함수가 실행됨 
// 그것을 .then 으로 순서대로 사용

delayP()
.then((resuld)=>{
  console.log(result);
})


new Objext
new Array 생성자 함수
new 는 생성자 함수고 생성자 함수로 만드는것들을 객체를 생성한다.

new promise는 promise 객체를 반환한다.


통신실패일때 
function delayP(){
  return new Promise((resolve, reject) => {
   // delayP 함수를 실행하면 리턴되는 값이 promise 객체
   reject('실패입니다')
  })
}

실패하면 result 에 reject가 들어온다
성공하면 result 에 resolve가 들어온다



1차 성공/실패 => 2차 성공 실패
성공해도 실패해도 .then()은 똑같이 실행
성공해도 실패해도 .then()은 똑같이 실행되고 (첫번째는 성공했을때 결과, 두번째는 실패했을때 실행되는 결과)

그리고 실패했을떄를 위핸 catch

delayP()
.then(결과)=>{
  console.log(결과);
}

실패 = 에러 

promise 와 await 을 쓰면 xhr 은 쓸일이 거의 없다고 봐도될까요?
남이 쓴거 가져오려면 읽을줄 알아야한다

/* -------------------------------------------------------------------------- */
function delayP(shouldReject){
  
  // 성공이야? (약속해 알려주기로) 그러고 나서(then) 이거 해 
  // 실패야? (약속해 알려주기로) 그러고 나서(then) 이거 해 

  return new Promise((성공,실패)=>{
  
    setTimeout(() => {
      if(shouldReject){
        성공('통신 성공');
      }else{
        실패('통신 실패!!')    
      }
    }, 5000);
  })
}

// promise object

delayP(true)
.then((결과)=>{
  console.log(결과);
})

/* -------------------------------------------------------------------------- */

function delayP(shouldReject = false,timeout = 1000){
  
  return new Promise((resolve, reject) => {
    setTimeout(() => {

      if(!shouldReject){
        resolve('성공!')
      }else{
        reject('실패!');
      }  

    }, timeout);
    
  })
}


delayP()
.then((res)=>{
  console.log( res );
})
/* -------------------------------------------------------------------------- */

import { getNode } from "../dom/getNode.js";


function delay(callback,timeout=1000){
  setTimeout(callback,timeout);
}


const first = getNode('.first');
const second = getNode('.second');



// delay(()=>{
//   console.log(1);
//   first.style.top = '-100px';
//   delay(()=>{
//     console.log(2);
//     first.style.transform = 'rotate(360deg)';
//     delay(()=>{
//       console.log(3);
//       first.style.top = '0';
//       second.style.top = '0';
//     })
//     second.style.top = '100px';
//     console.log('b');
//   })
// })


// delayP 함수를 실행하면 리턴되는 값이 promise 객체입니다.

defaultOptions = {
  shouldReject:false,
  timeout:1000,
  data:'성공!',
  errorMessage:'알 수 없는 오류가 발생했습니다.'
}

function delayP(
  shouldReject = false,
  timeout = 3000, 
  data = '성공!',
  errorMessage = '알 수 없는 오류가 발생했습니다.'
  ){
  
  return new Promise((resolve, reject) => {
    setTimeout(() => {

      if(!shouldReject){
        resolve(data)
      }else{
        reject({message:errorMessage});
      }  

    }, timeout);
    
  })
}


delayP()
.then((res)=>{
  console.log( res );
})

/* promise API -------------------------------------------------------------------------- */


function xhrPromise(method,url,body){

  const xhr = new XMLHttpRequest();

  xhr.open(method,url)

  // body 는 문자화 시켜서 전달
  xhr.send(JSON.stringify(body))

// send and receive 

  return new Promise((resolve, reject) => {
  
    xhr.addEventListener('readystatechange',()=>{
      console.log(xhr,readyState);
    })
  })


  

}

// 함수 실행
xhrPromise('GET','https://jsonplaceholder.typicode.com/users')


/* -------------------------------------------------------------------------- */
/* promise API -------------------------- */

const defaultOptions = {
  method:'GET',
  url: '',
  body:null,
  errorMessage:'서버와의 통신이 원활하지 않습니다.',

  headers:{
    'Content-Type':'application/json',
    // 권한 설명 : 아무나 데이터를 요청하고 가져올수 있는 오픈 API 이외에도 모든걸 다 "*" 허용해주겠다는 표시
    'Access-Control-Allow-Origin':'*'
  }
}


function xhrPromise(options){

  // mixin 

  // const config = {...defaultOptions,...options}
  const {method,url,body,errorMessage,headers} = Object.assign({},defaultOptions,options)

  // 빈 객체를 만들어 준다  : {}
// 맨 앞에 기존에 있는 객체를 넣으면 그 원본 객체가 훼손되어서 {} 안에 두개 합친걸 넣어준다. 즉 빈객체를 맨앞에 넣고 그 빈객체를 수정하는거
// defaultOptions 가 기본값으로 있는데 options 를 덮어쒸어 만들어진 데이터를 {} 에 넣는다 

  const xhr = new XMLHttpRequest();
  
  xhr.open(method,url);


  Object.entries(headers).forEach(([key,value])=>{
    xhr.setRequestHeader(key,value);
  })

  
  xhr.send(JSON.stringify(body))

  return new Promise((resolve, reject) => {
    xhr.addEventListener('readystatechange',()=>{
      if(xhr.readyState === 4){
        if(xhr.status >= 200 && xhr.status < 400){
          resolve(JSON.parse(xhr.response))
        }else{
          reject({message:errorMessage})
        }
      }
    })
  })
}

xhrPromise({
  errorMessage:'알 수 없는 오류'
})
.then((res)=>{
  console.log( res );
})

/* -------------------------------------------------------------------------- */

xhrPromise({
  url: 'https://jsonplaceholder.typicode.com/users'
})
// 여기서 반환한 객체가 promise 객체, console.log 로 찍어보기
.then (res) =>{
  // result 가 떨어질거고 난 그 result 를 가져다 쓰겠다
  // .forEach 로 열거하겠다 
  res.forEach((item)=>{
    console.log(res);
  })

}

xhrPromise.get = (url) =>{
  xhrPromise({
    url
  })
}

xhrPromise.get()
xhrPromise.get('https://jsonplaceholder.typicode.com/users')

/* -------------------------------------------------------------------------- */

function delayA(){

}


