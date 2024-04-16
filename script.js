const resultElement = document.getElementById('result');
const resultElement2 = document.getElementById('result_gpa');
const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');
const input3 = document.getElementById('input3');
const res = document.getElementById('res');
const res2 = document.getElementById('res1');
const balbtn = document.getElementById('submit1');
const gpabtn = document.getElementById('submit2');

balbtn.onclick = function () {
    const N = Number(input1.value) + Number(input2.value)
    step = N / 2;
    sum = N + Number(input3.value)
    resultElement.textContent = sum / 3
    if(N <50){
        res.textContent = 50-N 
    }
    else{
        res.textContent = 'Емтиханға баллың жетеді :)'
    }

    if(step < 70){
        res2.textContent = 70 - step
    }
    else{
        res2.textContent = 'Степендияға баллың жетеді :)'
    }
}

gpabtn.onclick = function () {
    sum = (Number(input1.value)*4) + (Number(input2.value)*4) + (Number(input3.value)*4)
    resultElement2.textContent = sum / 12
}
