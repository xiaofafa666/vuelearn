export function sun(num1,num2){
    return num1 * num2
}

 //防抖函数
 export function debounce(func,dealy){
    let timer = null
    return function (...args) {
      if(timer) clearTimeout(timer)
      timer = setTimeout(()=>{
        func.apply(this,args)
      },dealy)
    }
  }