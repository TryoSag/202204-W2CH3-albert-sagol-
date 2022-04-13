//Calculadora                                                         

function valores(valor) {
    while(true){ 
        
        let num = prompt('Enter the ' + valor + ' numbers');
        if(num === '' || num == null) {                               
            num = '';
        }
        if(valor == 'second' && num == '') {
            return num;
        }else if(isNaN(num) || num == '') {
            alert('Wrong number');
        }else {   
            num = num.trim();
            return Number(num);
        }
    }
}
function suma(sum1, sum2) {
    return sum1 + sum2;
}
function resta(res1, res2) {
    return res1 - res2;
}
function multiplicacion(mul1, mul2) {
    return mul1 * mul2;
}
function division(div1, div2) {
    return div1 / div2;
}
function formatResult(res) {                                            
    res = res.toFixed(3);
    for(let j = 0  ; j < 3 ; j++) {
        if(res[res.length - (j + 1)] != 0) {
            return res.slice(0, (res.length - j));
        }     
    }
    return res.slice(0, (res.length - 4));
}

const valor1 = valores('first');
const valor2 = valores('second');
const operations =['sum','substract','multiplication','division'];
let results = [];

if(valor2 === '') {                                 
    let resultSquare = Math.sqrt(valor1);

    console.log('The result of the square root is ' + formatResult(resultSquare)); 
    
}else {
    results[0] = suma(valor1,valor2);
    results[1] = resta(valor1,valor2);
    results[2] = multiplicacion(valor1,valor2);
    results[3] = division(valor1,valor2);

    for(let i = 0 ; i < results.length ; i++) {
        
        console.log('The result of the ' + operations[i] + ' is ' + formatResult(results[i]));
    }
}