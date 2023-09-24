import "./index.hbs";
import "./style.scss";

import img from "./assets/img/03_nature.jpg";

const sum = (a: number, b: number): number => a + b;

console.log(sum(15, 18));

const image = new Image();
image.src = img;
document.body.appendChild(image);
console.log('hello')
