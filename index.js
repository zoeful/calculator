'use strict';

class Calculator {
    
    constructor(){
        this.currentNum = ''
        this.saveNum    = '';
        this.sign       = '';
    }
    
    num(num){
        console.log('number : ',num);
        
        if(this.currentNum === ''){
            if(num === '.'){
                num = '0.';
            }    
        }

        this.currentNum += num;
        document.querySelector('.result-area').innerHTML = this.currentNum;
        console.log(this.currentNum);
    }

    // Todo
    // +를 누르면 =을 누르기 전까지 + 버튼이 active
    operation(sign){
        console.log('operation : ',sign);

        if(sign === 'x'){
            sign = '*'
        }else if(sign === '÷'){
            sign = '/'
        }

        if(this.saveNum !== ''){
            if(this.currentNum !== ''){
                this.saveNum = eval(this.saveNum + this.sign + this.currentNum);
            }
            document.querySelector('.result-area').innerHTML = this.saveNum;
        }else{
            this.saveNum = this.currentNum;
        }
        
        this.currentNum = ''
        this.sign = sign;
        console.log(this.saveNum);
    }
    
    per(){
        console.log('%');
    }

    plusMinus(){
        if(this.saveNum){
            this.saveNum = this.saveNum * -1;
            document.querySelector('.result-area').innerHTML = this.saveNum;
        }else{
            this.currentNum = this.currentNum * -1;
            document.querySelector('.result-area').innerHTML = this.currentNum;
        }
        
        
    }

    equal(){
        console.log('=');
        this.saveNum = eval(this.saveNum + this.sign + this.currentNum);
        console.log('result : ',this.saveNum);
        this.currentNum = ''
        this.sign       = '';
        document.querySelector('.result-area').innerHTML = this.saveNum;
    }

    ac(){
        console.log('AC');
        this.currentNum = ''
        this.saveNum    = '';
        this.sign       = '';
        document.querySelector('.result-area').innerHTML = 0;
    }

}

let calculator = new Calculator();

window.onload = ()=>{
    
    let numArea = document.querySelector('.number-area');

    // 이벤트 위임
    numArea.addEventListener('click',function(e){
        
        switch(e.target.innerHTML){
            case '+': 
            case '-':
            case 'x':
            case '÷':
                calculator.operation(e.target.innerHTML);
                break;
            case '%':
                calculator.per(e.target.innerHTML);
                break;
            case '+/-':
                calculator.plusMinus(e.target.innerHTML);
                break;
            case '=':
                calculator.equal(e.target.innerHTML);
                break;
            case 'AC':
                calculator.ac(e.target.innerHTML);
                break;
            default:
                calculator.num(e.target.innerHTML);
                break;
        }
        
    });
}
