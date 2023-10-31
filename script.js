let select = document.getElementById("Goods");
let amount = document.getElementById("input__amount");
let price = document.getElementById('main__price');
let radios = document.getElementById("radios");
let checkbox = document.getElementById("checkboxes");
let radio = document.getElementsByClassName("radio");
let checkboxes = document.getElementsByClassName('check');
let btn = document.getElementById('kol');

let prodTypes = [150, 240, 119];
let prod;

for(let i = 0; i < 2; i++)
{
    checkboxes[i].onclick = function()
    {
        check1();
    }
}

select.addEventListener("change", function()
{
    for(let i = 0; i < radio.length; i++)
    {
        radio[i].onclick = function ()
        {
            prod += parseInt(radio[i].value);
            update();
            prod -= parseInt(radio[i].value);
        }
    } 
    

    if(amount.value > -1)
    {
        if(select.value == 1)
        {
            checkboxes[0].checked = false;
            checkboxes[1].checked = false;
            prod = prodTypes[0];
            radios.style.display = "none";
            checkbox.style.display = "none";
            price.innerHTML = prod * amount.value;
    
        }if(select.value == 2)
        {
            checkboxes[0].checked = false;
            checkboxes[1].checked = false;
            prod = prodTypes[1];
            price.innerHTML = prod * amount.value;
            checkbox.style.display = "none";

            radios.style.display ="block";
    
        }
        if(select.value == 3)
        {
            prod = prodTypes[2];
            radios.style.display = "none";
            checkbox.style.display = "block";
            price.innerHTML = prod * amount.value;

        }
    } else 
    {
        alert("Введено отрицательное значение");
    }


    
});

function update ()
{
    price.innerHTML = prod * amount.value;
}



function check1 ()
{
    if(checkboxes[0].checked & !checkboxes[1].checked)
    {
        prod += parseInt(1);
        update();
        prod -= parseInt(1);
            
    }
        
    else if(!checkboxes[0].checked & checkboxes[1].checked)
    {
        prod += parseInt(2);
        update();
        prod -= parseInt(2);
    }
    else if(checkboxes[0].checked & checkboxes[1].checked)
    {
        prod += parseInt(3);
        update();
        prod -= parseInt(3);
    }
    else { update();}
}
    



// function getPrices() {
//     return {
//       prodTypes: [150, 240, 119],
//       prodOptions: {
//         option2: 10,
//         option3: 5,
//       },
//       prodProperties: [1, 2, 3]
//     };
// }



        




    








