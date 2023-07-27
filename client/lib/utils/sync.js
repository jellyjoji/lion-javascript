
// async 를 부이면 promise 객체가 떨어진다
async function delayA(){
  return '성공'
}

console.log(delayA());
// .then 대신 await 
// await 은 코드의 실행 흐름을 제어하고 성공하면 출력하게 해준다
console.log( await delayA());


function 라면끊이기(){


  // 코드의 실행흐름을 제어
  // await 뒤에는 promise 객체가 와야한다
  await delayP

  // 실행이 멈춰있음 그리고 결과가 떨어지면 실행 

  console.log('물넣기');
  console.log('스프넣기');
}

라면끊이기()


// aync - 함수가 promise 객체를 반환하도록 await 사용
// await - 코드의 실행 흐름 제어 (멈춰)
//       - result 값 가져오기 
/* -------------------------------------------------------------------------- */

// async - 함수가 promise 객체를 반환 하도록
//       - await 사용 

// await - 코드의 실행 흐름 제어 (멈춰)
//       - result값 가져오기 


async function 라면끓이기(){

  // .then 과 화살표 함수의 조합보다
  delayP({data:'물넣기'}).then((res)=>{
    console.log( res );
  })

  // 위 아래는 같은 기능 : 코드의 실행 흐름 제어

  // await 문이 가독성이 더 좋아서 사용
  const 스프 = await delayP({data:'스프넣기'})
  console.log(스프);

  const 면 = await delayP({data:'면넣기'})
  console.log(면);

  const 계란 = await delayP({data:'계란넣기'})
  console.log(계란);

  const 접시 = await delayP({data:'접시'})
  console.log(접시);
}

라면끓이기()

/* -------------------------------------------------------------------------- */
import { xhrPromise } from "./xhr.js"; // import 시키는거 잊지않기

function getUserData(){
  // 뭐든지 다 상수화
  const data = xhrPromise.get('https://jsonplaceholder.typicode.com/users')

  console.log(data);
}

getUserData()

// await getting result

async function getUserData(){
  // 뭐든지 다 상수화
  const data = xhrPromise.get('https://pokeapi.co/api/v2/pokemon')

  data.then((res)=>{
    console.log(res);
  })

  // await data
  // 여기서 잘못되면 에러를 던지고 vs 잘되면 result 값을 내보냄

  // result 에 await data 를 담아서 내보내기 위해
  const result = await data;

  console.log(result);
  
}

getUserData() // data 안의 데이터 보이기 

/* -------------------------------------------------------------------------- */

// 포켓몬 카드 비동기 통신 
async function getData(){

  const data = xhrPromise.get('https://pokeapi.co/api/v2/pokemon/50')

  // data.then((res)=>{
  //   console.log( res );
  // })
  
  const pokemon = await data;

  console.log( pokemon.sprites['front_default'] );

  insertLast(document.body,`<img src="${pokemon.sprites['back_default']}" alt="" />`)

}

getData()

/* -------------------------------------------------------------------------- */

// xhr 보다 훨씬 쉬운 fetch 

fetch(url, [option])
url 을 던지면 알아서 컨텐츠를 다운로드하고 프로미스를 반환함. 그 프로미스는 fetch 호출하는데 사용

[option] 가 없으면 알아서 GET 으로 인식함 
있으면 POST 로 인식함 ? 

알아서 json 파싱해서 문자로 떨어뜨리기 때문에 편하다 

const response = await fetch(URL);
const data = await response.json();
// 내장 .json() 안의 promise 를 반환받음

console.log( data );

// fetch(URL).then((result)=>{

//     result // response object
//     return result.json()
// })
// .then((result)=>{
//   console.log( result );
// })

