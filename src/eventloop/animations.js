const rect = document.createElement('div');
rect.id = 'rect';
rect.textContent = 'Timeout 0';
rect.style.cssText = `
width: 100px;
height: 100px;
background: black;
color: white;
`;
document.body.appendChild(rect);

const rect1 = document.createElement('div');
rect1.id = 'rect1';
rect1.textContent = 'Request Animation Frame';
rect1.style.cssText = `
    width: 100px;
    height: 100px;
    background: black;
    color: white;
`;
document.body.appendChild(rect1);



let count = 1;
const animateRect = () => {
    // const rect = document.querySelector('#rect');
    // console.log(rect.offsetLeft, 'rect.offsetLeft')
    rect.style.transform = `translateX(${count}px)`;
    count++;
    if (count >= window.innerWidth) {
        count = -100;
    }

    setTimeout(() => {
        animateRect();
    }, 0)
}
// animateRect();

let counter = 0;
const perFrameDisplacement = 5;
/**
 * Animation using requestAnimationFrame which uses the rendering frames to animate.
 * 
 * We're telling browser here to translate this box by `perFrameDisplacement` px 
 * whenever next render paint is being done in event loop.
 * @param {*} timestamp 
 */
const animateRect1 = (timestamp) => {
    /**
     * getcomputed styles let browser compute the css before next paint.
     */
    // getComputedStyle(rect).transform;
    // rect1.style.transition = `transform .5s`;
    rect1.style.transform = `translateX(${counter}px)`;
    // rect1.style.transform = `translateX(${counter}px)`;
    counter += perFrameDisplacement;
    requestAnimationFrame(() => requestAnimationFrame(animateRect1));
    if (counter >= window.innerWidth) {
        counter = -100;
    }

}
requestAnimationFrame(animateRect1)