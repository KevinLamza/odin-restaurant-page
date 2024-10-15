import "./styles.css";
import { test } from "./test.js";
import { init } from "./init.js";
import { about } from "./about.js";
import { menu } from "./menu.js";
import { contact } from "./contact.js";



console.log(test);

function clearPage() {
    const content = document.querySelector("#content");
    while (content.firstChild) {
        content.removeChild(content.firstChild);
    }
}


function bindEvents() {
    document.addEventListener('click', function (event) {
        if (event.target.matches('.buttonHome')) {
            clearPage();
            init();
        }
        if (event.target.matches('.buttonAbout')) {
            clearPage();
            about();
        }
        if (event.target.matches('.buttonMenu')) {
            clearPage();
            menu();
        }
        if (event.target.matches('.buttonContact')) {
            clearPage();
            contact();
        }
    }, false);
}

bindEvents();
init();
console.log("am I alive?");
// about();
// menu()
// contact()

