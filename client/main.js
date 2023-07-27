// global gsab

// 이렇게 써야 에러가 안남

import {changeColor, insertLast, tiger, renderSpinner} from "./lib/index.js";



fetch('https://jsonplaceholder.typicode.com/users')

.then((res)=>res.json())
.then((res)=>{
  console.log(res);
})

/* -------------------------------------------------------------------------- */
// tiger 함수를 사용해서 user 를 가져와 주세요

// 비동기 할꺼야 라는 async 써주기 (안하고 await 하면 오류)
async function renderUserList(){

  renderSpinner(userCardInner)

  const response = tiger.get('http://localhost:3000/users')

  // 서버와 통신하면 떨어지는 값 promise object 객체 [[result]]를 얻으려면 await 을 써줘야 한다. 
  // [[result]] 에서 [[]] 를 얻애고 reponse object 객체를 반환해서 tiger.get 에 담다
  console.log(response.data);

  // response.data 결과값(키와 벨류)들을 const userData 에 담고 있게 만든다
  const userData = response.data

  // 아이템을 뽑아내기 위한 forEach
  userData.forEach((item) => {
    // userData 는 배열 객체
    // 모든 객체를 모두 열거
    console.log(item);

    // 생성
  //   const template = `
  //   <article class="user-card" data-index="user-${item.id}">
  //     <h3 class="user-name">${item.name}</h3>
  //     <div class="user-resouce-info">
  //       <div>
  //         <a class="user-email" href="mailto:${item.email}">${item.email}</a>
  //       </div>
  //       <div>
  //         <a class="user-website" href="http://${item.website}" target="_blank" rel="noopener noreferer">${item.website}</a>
  //       </div>
  //     </div>
  //     <button class="delete">삭제</button>
  //   </article>
  // `

  
  // 렌더
  // '.list-wrapper' 안에 template 을 뿌려주세요
  insertLast('.user-card-inner',template)
  
  });


  changeColor('.user-card')

  gsap.to('.user-card',{
    x:0,
    opacity:1,
    // 스무스한 효과
    stagger:0.2
  })
}
// render로 호출하게 해준다
renderUserList()




// 버튼을 클릭했을때 해당 article 의 id 값을 가져옴

// 이벤트 위임

else.target 해서 나온 값을 부모를 잡는다
button.closest('button')
attr()
dataset