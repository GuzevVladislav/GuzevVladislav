let slider = document.getElementsByClassName("slider-img");
let prev = document.getElementById("prev");
let next = document.getElementById('next');
let pages = document.getElementsByClassName("point");

let imgs = {
    1: "/1.jpg",
    2: "/2.jpg",
    3: "/3.jpg",
    4: "/4.jpg",
    5: "/5.jpg",
    6: "/6.jpg",
    7: "/7.jpg",
    8: "/8.jpg"
};

let curentimg = [1,2,3];

function showPoints()
{
    let left = curentimg[0];
    let right = curentimg[2];
    if(left >= 0 & right <= 3)
    {
        pages[0].style.backgroundColor = "#000000";
        pages[1].style.backgroundColor = "#fff";
        pages[2].style.backgroundColor = "#fff";
    }
    if(left >= 3 & right <= 6)
    {
        pages[0].style.backgroundColor = "#fff";
        pages[1].style.backgroundColor = "#000000";
        pages[2].style.backgroundColor = "#fff";
    }
    if(left >= 6 && right <= 8)
    {
        pages[0].style.backgroundColor = "#fff";
        pages[1].style.backgroundColor = "#fff  ";
        pages[2].style.backgroundColor = "#000000";
    }

}

function show()
{
    slider[0].src = imgs[curentimg[0]];
    slider[1].src = imgs[curentimg[1]];
    slider[2].src = imgs[curentimg[2]];
    showPoints();
}

next.onclick = function()
{
    let k = curentimg[2] + 1;
    if(k > 8)
    {
        k %= 8;
    }

    curentimg[0] = curentimg[1];
    curentimg[1] = curentimg[2];
    curentimg[2] = k;
    show();
}
prev.onclick = function()
{
    curentimg[2] = curentimg[1];
    curentimg[1] = curentimg[0];
    if(curentimg[0] - 1  == 0)
    {
        curentimg[0] = 8;
    }
    else {
        curentimg[0]--;

    }

    show();
}


