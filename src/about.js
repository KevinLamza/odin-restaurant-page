export const about = function() {
    // const logo = document.createElement("div");
    // logo.className = "logo";

    // const logoImage= document.createElement("img");
    // logoImage.setAttribute("src", logoPNG);
    // logoImage.setAttribute("alt", "noodle logo from https://www.vecteezy.com/");

    const header = document.createElement("div");
    header.className = "header";
    header.textContent = "About us";

    const description = document.createElement("div");
    description.className = "description";
    description.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";

    const content = document.querySelector("#content");
    // content.appendChild(logo);
    content.appendChild(header);
    content.appendChild(description);
    // logo.appendChild(logoImage);
}