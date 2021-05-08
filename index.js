'use strict';

class Calculator {
    
    constructor(){
        this.saveNum    = 0;
        this.currentNum = 0;
        this.resultNum  = 0;
    }
    

    num(item){
        debugger;
        let currentNum = parseInt(item);
        if(typeof currentNum === Number){
            this.currentNum = currentNum;

            if(this.saveNum !== 0){
                return this.saveNum + this.currentNum
            }

        }else{

            this.saveNum = this.currentNum;    
        }
    }

    // +를 누르면 =을 누르기 전까지 + 버튼이 active
    // plus(){
    //     debugger;
        
        
    // }

    minus(){

    }

}

let calculator = new Calculator();
window.onload = ()=>{
    // let plusEl = document.querySelector('.plus');
    // plusEl.addEventListener('click',calculator.plus);
    let numArea = document.querySelector('.number-area');
    
    // 이벤트 위임
    numArea.addEventListener('click',function(e){
        console.log(e.target)
        calculator.num(e.target.innerHTML);
    })
}
