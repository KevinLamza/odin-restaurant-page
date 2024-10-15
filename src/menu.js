export const menu = function() {
    // const logo = document.createElement("div");
    // logo.className = "logo";

    // const logoImage= document.createElement("img");
    // logoImage.setAttribute("src", logoPNG);
    // logoImage.setAttribute("alt", "noodle logo from https://www.vecteezy.com/");

    const header = document.createElement("div");
    header.className = "header";
    header.textContent = "Menu";

    const subHeader1 = document.createElement("div");
    subHeader1.className = "subHeader";
    subHeader1.textContent = "Dish 1";

    const subHeader2 = document.createElement("div");
    subHeader2.className = "subHeader";
    subHeader2.textContent = "Dish 1";

    const subHeader3 = document.createElement("div");
    subHeader3.className = "subHeader";
    subHeader3.textContent = "Dish 1";

    const subHeader4 = document.createElement("div");
    subHeader4.className = "subHeader";
    subHeader4.textContent = "Dish 1";

    const subHeader5 = document.createElement("div");
    subHeader5.className = "subHeader";
    subHeader5.textContent = "Dish 1";

    const subHeader6 = document.createElement("div");
    subHeader6.className = "subHeader";
    subHeader6.textContent = "Dish 1";

    const description = document.createElement("div");
    description.className = "description";
    description.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";

    const content = document.querySelector("#content");
    // content.appendChild(logo);
    content.appendChild(header);
    content.appendChild(subHeader1);
    content.appendChild(subHeader2);
    content.appendChild(subHeader3);
    content.appendChild(subHeader4);
    content.appendChild(subHeader5);
    content.appendChild(subHeader6);
    content.appendChild(description);
    // logo.appendChild(logoImage);
}