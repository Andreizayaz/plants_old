import { navLinks } from "./data";
import { getActiveClassName } from "./functions";

const navList = document.getElementById("nav-list");

const linksFragment = document.createDocumentFragment();

navLinks.forEach(({ to, text }, index) => {
  const linkItem = document.createElement("li");
  linkItem.className = "nav-list__item";
  linkItem.innerHTML = `<a href=${to} class='nav-link ${getActiveClassName(
    index
  )}'>${text}</a>`;
  linksFragment.appendChild(linkItem);
});

navList?.appendChild(linksFragment);
