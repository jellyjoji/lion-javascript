import { addClass,removeClass } from "./css"
import { addNode } from "./getNode.js"

// 재사용가능한 함수 Alert

// text = '에러입니다 ' 기본값 설정 
export function showAlert(node,text,timeout){
  if(typeof node === 'string'){
    // 문자가 오면 getNode 로 한번 더 만들어주겠다
    node = getNode(node)
  }

  // 알람 내용 불러오기. 텍스트 컨텐트를 전달받은 문구로 하겠다
  node.textContent = text;

  // addClass
  // 문자가 오면 getNode 로 한번 더 만들어주고 클래스를 추가해주겠다 맞나요 
  addClass(node,'is-active');

  // 비동기 : 알람 띄우고 2초뒤에 자연스럽게 사라지게 하려고 
  // 확실성이 보장되지 않기때문에 나중에 promise 써줄예정
  setTimeout(()=>{
    removeClass(node,'is-active')
  }, timeout)
}

// 메세지를 바꾸면서 에러 알람 창을 뛰어줄려고
// showAlert('.alert','이름이 없습니다!',2000)