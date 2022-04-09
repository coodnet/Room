let btn = document.querySelector('#btn')
let innerHTML = document.querySelector('.innerHTML')
let order__input = document.querySelector('#order__input')


function go(){
    innerHTML.innerHTML = 'Yuborildi'
    innerHTML.style.cssText = 'color:Green; text-decoration:underline;'
    order__input.value = ' '
    btn.value = 'Send'
    
  
}