export const contact = function() {
    // const logo = document.createElement("div");
    // logo.className = "logo";

    // const logoImage= document.createElement("img");
    // logoImage.setAttribute("src", logoPNG);
    // logoImage.setAttribute("alt", "noodle logo from https://www.vecteezy.com/");

    const header = document.createElement("div");
    header.className = "header";
    header.textContent = "Contact";

    const description = document.createElement("div");
    description.className = "description";
    description.innerHTML = "Grasstraße 24<br>20457 Hamburg<br>Germany";

    const content = document.querySelector("#content");
    // content.appendChild(logo);
    content.appendChild(header);
    content.appendChild(description);
    // logo.appendChild(logoImage);
}