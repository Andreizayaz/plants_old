import "./index.html";
import "./style.scss";

import img from "./assets/img/02_nature_korea.jpg";

const sum = (a: number, b: number): number => a + b;

console.log(sum(15, 18));

const image = new Image();
image.src = img;
document.body.appendChild(image);
