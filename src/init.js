import logoPNG from "./assets/logo.png"

export const init = function() {
    const logo = document.createElement("div");
    logo.className = "logo";

    const logoImage= document.createElement("img");
    logoImage.setAttribute("src", logoPNG);
    logoImage.setAttribute("alt", "noodle logo from https://www.vecteezy.com/");

    const header = document.createElement("div");
    header.className = "header";
    header.textContent = "NoodNood";

    const description = document.createElement("div");
    description.className = "description";
    description.innerHTML = "The best noodle bar in town! Come visit us and experience the ultimate taste!<br>Est. 2024";

    const content = document.querySelector("#content");
    content.appendChild(logo);
    content.appendChild(header);
    content.appendChild(description);
    logo.appendChild(logoImage);
}