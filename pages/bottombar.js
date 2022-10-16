const template = document.createElement("template");
template.innerHTML = `
  <style>
  /* Add a black background color to the bottom navigation */
    .botomnav {
      background-color: rgb(98, 37, 37);
      opacity: 0.5;
      overflow: hidden;
      width: 99%;
       position: fixed;
      bottom: 0;
    }

    /* Style the links inside the navigation bar */
    .botomnav a {
      float: left;
      color: #f2f2f2;
      text-align: center;
      padding: 14px 16px;
      text-decoration: none;
      font-size: 17px;
      font-family: system-ui;
    }
   </style>
    <div class="botomnav">
        <a href="https://www.linkedin.com/in/hadas-arbel-HA" target="_blank">Linkedin</a>
        <a href="mailto: steinberg.h@gmail.com">Send Email</a>
    </div>
`;

class BBar extends HTMLElement {
  constructor() {
    super();
    // attach shadow DOM to element
    const shadow = this.attachShadow({ mode: "open" });
    // Apply template
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    // shadow.appendChild(template.content.cloneNode(true));
  }
}
customElements.define("bottom-bar", BBar);
