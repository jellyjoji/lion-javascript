    /* global gsap */

    export const shake = gsap.to('form',{
      duration:0.1,
      x:-10,
      repeat:5,
      yoyo:true,
      clearProp:'x',
      // 바로 실행되기 때문에 필요할때 재생시키려고 .restart 일시정지하고 재시작 시켜주는것임

      // 일시정지 : 멈췄다가 재생할때 실행시키려고
      paused:true
    })