export const menu = function() {
    // const logo = document.createElement("div");
    // logo.className = "logo";

    // const logoImage= document.createElement("img");
    // logoImage.setAttribute("src", logoPNG);
    // logoImage.setAttribute("alt", "noodle logo from https://www.vecteezy.com/");

    const header = document.createElement("div");
    header.className = "header";
    header.textContent = "Menu";

    const listContainer = document.createElement("div");
    listContainer.className = "listContainer";

    const list = document.createElement("ul");

    const subHeader1 = document.createElement("li");
    subHeader1.className = "subHeader";
    subHeader1.textContent = "Dish 1 - 10€";

    const subHeader2 = document.createElement("li");
    subHeader2.className = "subHeader";
    subHeader2.textContent = "Dish 2 - 8€";

    const subHeader3 = document.createElement("li");
    subHeader3.className = "subHeader";
    subHeader3.textContent = "Dish 3 - 7€";

    const subHeader4 = document.createElement("li");
    subHeader4.className = "subHeader";
    subHeader4.textContent = "Dish 4 - 13€";

    const subHeader5 = document.createElement("li");
    subHeader5.className = "subHeader";
    subHeader5.textContent = "Dish 5 - 3€";

    const subHeader6 = document.createElement("li");
    subHeader6.className = "subHeader";
    subHeader6.textContent = "Dish 6 - 4€";

    const description = document.createElement("div");
    description.className = "description";
    description.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";

    const content = document.querySelector("#content");
    // content.appendChild(logo);
    content.appendChild(header);
    content.appendChild(listContainer);
    listContainer.appendChild(list);
    list.appendChild(subHeader1);
    list.appendChild(subHeader2);
    list.appendChild(subHeader3);
    list.appendChild(subHeader4);
    list.appendChild(subHeader5);
    list.appendChild(subHeader6);
    content.appendChild(description);
    // logo.appendChild(logoImage);
}