// Memoization
// 값을 기억할때 사용
// 패턴 : 객체를 만들어서 객체 안에 key:value 쌍으로 저장
// 메모이제이션(memoization)은 컴퓨터 프로그램이 동일한 계산을 반복해야 할 때, 이전에 계산한 값을 메모리에 저장함으로써 동일한 계산의 반복 수행을 제거하여 프로그램 실행 속도를 빠르게 하는 기술이다. 동적 계획법의 핵심이 되는 기술이다.

const cache = {}

export const memo = (key,callback)=>{

  if(!callback) return cache[key];

  cache[key] = callback();
  console.log(cache);

}

memo('cube',()=>getNode('#cube'));

memo('cube')