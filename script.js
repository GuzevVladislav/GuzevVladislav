let goods = document.getElementsByClassName("good");
let input = document.querySelector('input');
let res = document.getElementById('result');
let sum = document.getElementById('sum');
let good;
for (let i = 0; i < 3; i++) { // выведет 0, затем 1, затем 2
    goods[i].onclick = function()
    {
        good = goods[i].innerHTML;

    }
}

res.onclick = function ()
{
    if(input.value < 0) alert("Введено отрицательное число");
    else 
    {
        if(good == "Хлеб 30 руб.") sum.innerHTML =  input.value * 30;
        if(good == "Молоко 70 руб.") sum.innerHTML = (input.value * 70);
        if(good == "Сыр 140 руб.") sum.innerHTML = (input.value * 140);
    
    }
}
