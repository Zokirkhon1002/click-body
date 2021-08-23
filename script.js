let body = document.body;

body.addEventListener('click', (e)=>{
    const x = e.clientX;
    const y = e.clientY;

    const bdTop = e.target.offsetTop;
    const bdLeft = e.target.offsetLeft;

    const xIn = x-bdLeft;
    const yIn = y-bdTop;

    const circle = document.createElement("span");
    circle.classList.add("circle");
    circle.style.top = yIn + 'px';
    circle.style.left = xIn + 'px';

    body.appendChild(circle);

    setTimeout(()=> circle.remove(), 500)
})