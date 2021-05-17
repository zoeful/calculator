'use strict';

class Calculator {
    
    constructor($calcWrapper){
        this.currentNum    = ''
        this.saveNum       = '';
        this.sign          = '';
        this._$calcWrapper = $calcWrapper;

        this.initCalculatorTemplate();
        this.initCalcEventHandler();
    }
    
    initCalcEventHandler(){
        // this === Calculator

        let _self = this;
        document.querySelector('.number-area').addEventListener('click', function(event){
            // this === window
            _self.calcEventHandler.call(_self, event);
        });
    }

    num(num){
        console.log('number : ',num);

        if(this.currentNum === ''){
            if(num === '.'){
                num = '0.';
            }    
        }

        // +/- 연산을 처리해주기 위해 필요한 로직
        if(this.currentNum !== '' && this.saveNum === '' && this.sign !== ''){
            this.saveNum = this.currentNum;
            this.currentNum = '';
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
        if(this.currentNum === '' && this.sign !== ''){
            this.currentNum = this.saveNum;
            this.saveNum = '';
        }else if(this.currentNum === '' && this.sign === ''){
            this.currentNum = this.saveNum;
            this.saveNum = '';
        }
        this.currentNum = this.currentNum * 0.01
        console.log(this.currentNum);
        document.querySelector('.result-area').innerHTML = this.currentNum;
    }

    plusMinus(){
        if(this.currentNum === '' && this.sign !== ''){
            this.currentNum = this.saveNum;
            this.saveNum = '';
        }else if(this.currentNum === '' && this.sign === ''){
            this.currentNum = this.saveNum;
            this.saveNum = '';
        }
        this.currentNum = this.currentNum * -1;
        document.querySelector('.result-area').innerHTML = this.currentNum;
    }

    equal(){
        this.saveNum = eval(this.saveNum + this.sign + this.currentNum);
        this.currentNum = ''
        this.sign       = '';
        document.querySelector('.result-area').innerHTML = this.saveNum;
    }

    ac(){
        this.currentNum = ''
        this.saveNum    = '';
        this.sign       = '';
        document.querySelector('.result-area').innerHTML = 0;
    }

    initCalculatorTemplate(){
        this._$calcWrapper.innerHTML = `
            <div class="result-area">0</div>
            <div class="calculate-area">
                <section class="number-area">
                    <p class="btn symbol-number">AC</p>
                    <p class="btn symbol-number">+/-</p>
                    <p class="btn symbol-number active">%</p>
                    <p class="btn symbol">÷</p>
                    <p class="btn number active">7</p>
                    <p class="btn number">8</p>
                    <p class="btn number">9</p>
                    <p class="btn symbol">x</p>
                    <p class="btn number">4</p>
                    <p class="btn number">5</p>
                    <p class="btn number">6</p>
                    <p class="btn symbol">-</p>
                    <p class="btn number">1</p>
                    <p class="btn number">2</p>
                    <p class="btn number">3</p>
                    <p class="btn symbol active">+</p>
                    <p class="btn number zero">0</p>
                    <p class="btn number">.</p>
                    <p class="btn symbol equal">=</p>
                </section>
            </div>
        `
    }

    calcEventHandler(e){
        // this === Calculator
        switch(e.target.innerHTML){
            case '+': 
            case '-':
            case 'x':
            case '÷':
                this.operation(e.target.innerHTML);
                break;
            case '%':
                this.per(e.target.innerHTML);
                break;
            case '+/-':
                this.plusMinus(e.target.innerHTML);
                break;
            case '=':
                this.equal(e.target.innerHTML);
                break;
            case 'AC':
                this.ac(e.target.innerHTML);
                break;
            default:
                this.num(e.target.innerHTML);
                break;
        }
    }

}

window.onload = ()=>{
    
    let calcWrapper = document.querySelector('#calculator');
    new Calculator(calcWrapper);

}
