

console.log('?');

fetch('https://pokeapi.co/api/v2/pokemon/30')

const data = fetch('https://pokeapi.co/api/v2/pokemon/30')
// fetch('https://pokeapi.co/api/v2/pokemon/30') 에서 내뱉은 값(나온 포켓몬)을 data  담음 

// fetch 에서 값을 빼내서 쓰려면 await 을 써줘야함 

const data = await fetch('https://pokeapi.co/api/v2/pokemon/30')
// 그럼 응답된 결과 reponse 가 나옴


// pomise 객체 찾기
const reponse = await fetch('https://pokeapi.co/api/v2/pokemon/30')
console.log(await reponse.json());

// 안전하게 보는 법: reponse 에 ok 가 떨어졌다면 .json() 를 꺼내보여주세요
if(reponse.ok){
  const data = await response.json();
  console.log(data);
}

// .json() 을 쓰는 이유는 여러 내장 내용중 .json을 뽑아서 안에 뭐가 있는지 보겠다 (JSON.parse 기능 대신 해줌)

// 즉 결론은 xhr 보다 훨씬 편해서 쓰는 fetch

/* -------------------------------------------------------------------------- */

// 변수 자체 앞에 async 사용 불가 
// 화살표 함수를 변수에 담고 있기때문에 
const tiger = async (e) =>{
  // await : okay가 뜨면 실행
  const response = await fetch(e)
  console.log(reponse.json());

  if(reponse.ok){

  // await : okay가 뜨면 실행
  data = reponse.json();
  console.log(data);
}
}

tiger('www.naver.com')

// await 을 콘솔에서 한번 더 쓰는 이유는 ? 떨어지는 값이 객체이기 때문에 계속 okay 인지 아닌지 체크해줘야해서
console.log(await tiger()) 

/* -------------------------------------------------------------------------- */

// await 을 사용하려면 asyn 반드시 함께 사용
const tiger = async (url) => {
  
  // fetch 를 사용하면 알아서 GET 통신이 됨 
  const response = await fetch(url);
  // fetch(url) 를 통해 프라미스 객체가 결과값으로 나옴 
  // fetch(url) 가 resolve 혹은 reject 반환전까지 밑 함수는 실행이 안됨

  // console.log( response );

  if(response.ok){
    // response.data : 키값 = response.json() : 벨류값 
    // response.data 에는 키값을 담고 response.json() 에는 벨류값을 담겠다는 의미
     response.data = await response.json();
  }
  return response;
}

// await 두번하는 이유 : okay 된거 차례대로 확인하기 
// 1. await 한번 오케 다음
// response 안에 키값을 저장시켜 보기 쉽게 만들었다.
const response = await tiger('https://jsonplaceholder.typicode.com/users');
// 2. await 으로 받은 객체 await 으로 한번 더 확인해서 okay 이면 넘어가기 
const userData = await response.data;

// 받은게 모두 결과값이 아닌 '객체'이기 때문에 await 으로 성공인지아닌지 결과값을 받아서 넘어가기 위해 await 사용
// 단 떨어지는 값이 promise 일때 콘솔로 확인하고 사용. await 은 promise 만 받아사용가능

// await 두번으로 받은거 forEach 로 순환돌아서 배열로 반환하기
userData.forEach((item)=>{
  console.log( item );
})

// 어찌됐건 .then 보다는 sync await 쓰는게 훨씬 낫다.

/* -------------------------------------------------------------------------- */
[option]

// default 옵션 주기

const defaultOptions = {
  // method 는 안써줘도 되지만 그냥 기본값 설정으로 써준거임
  method : 'GET',
  body:null,
  headers:{
    'Content-Type' : 'application/json',
    'Access-Control-Allow-Origin':'*'}
}

const tiger = async (url,options) => {
  
  // fetch 를 사용하면 알아서 GET 통신이 됨 
  // [option] 이 있어서 POST 가 됨
  const response = await fetch(url,options);

  if(response.ok){
     response.data = await response.json();
  }
  return response;
}

const response = await tiger(URL,{
  // option
  method : 'POST',
  body:JSON.stringify({name:'tiger'}),
  headers:{
    'Content-Type' : 'application/json',
    'Access-Control-Allow-Origin':'*'
  }
})

const userData = response.data;
console.log(userData);

await tiger.post('www')

// options 을 넣어서 POST 가 되었다.. 인가요
// (매개변수 하나, ...그외 나머지 매개변수) = ('URL',{키:벨류})

// 객체 합성
// 나머지 ...defaultOptions 안에 ...options 전체 내용 담기 (얕은 복사)
// 얕을 복사를 안하면 본래 default 값도 바껴서 해줘야한다

// [얕은 복사] config = {디폴트 전체, 덮어쒸울것 전체}

const config = {...defaultOptions,...options,
  // 깊은 복사
headers:{
  ...defaultOptions.headers,...options.headers
}
}

tiger.get = (url,options)=>{
  return tiger({url,...options})
}

tiger.post = (url,body,options)=>{
  return tiger({
    method:'POST',
    url,
    body:JSON.stringify(body),
    ...options
  })
}
tiger.delete == (url,options)=>{
  return tiger({
    method:'DELETE',
    url,
    ...options
  })
}

tiger.put = (url,body,options)=>{
  return tiger({
    method:'PUT',
    url,
    body:JSON.stringify(body),
    ...options
  })
}


// 아 웹사이트랑 통신하기 졸라 힘드네

// 근데 axios 가 있ㅇ다 


// fetch(url) : 기본 get 통신 = 프라미스 객체 
// -> then 또는 await (async) 로 결과 받을 수 있다.
// + await 역할은
//   1) 코드실행흐름제어 - resolve, reject 반환할때까지
//   2) result 값 내뱉는 역할

// => 프라미스 객체의 ok! 떨어지면
// response.json() 응답을 파싱해 JSON 객체로 변경! -> data 키에 저장 (필수는 아님)

// response = await S2(URL) //^ 응답
// response.data = await response.json() //^ 응답 -> 파싱
// userData = response.data 

// 프로미스 객체로 반환한다는 뜻
// promise 생성자 함수에서 executor 처리를 하면 처리 성공 여부에 따라 resolve나 reject를 호출하는데 이 값을 promise 객체로 반환해준다