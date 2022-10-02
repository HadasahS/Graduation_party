const template = document.createElement("template");
template.innerHTML = `
       <style>
            /* Add a black background color to the top navigation */
            .topnav {
                background-color: rgb(98, 37, 37);
                opacity: 0.5;
                overflow: hidden;
                width: 99%;
                position: fixed;
            }

            /* Style the links inside the navigation bar */
            .topnav a {
                float: left;
                color: #f2f2f2;
                text-align: center;
                padding: 14px 16px;
                text-decoration: none;
                font-size: 17px;
                font-family: system-ui;
            }

            /* Change the color of links on hover */
            .topnav a:hover {
                background-color: #ddd;
                color: black;
            }

            /* Add a color to the active/current link */
            .topnav a.active {
                background-color: #562ddb;
                color: white;
            }
        </style>
  <div class="topnav">
    <a  href="home.html">Home</a>
    <a href="arrival.html">Arrival confirmation</a>
    <a href="#about">About</a>
  </div>
`;

class TopBar extends HTMLElement {
  constructor() {
    super();
    // attach shadow DOM to element
    const shadow = this.attachShadow({ mode: "open" });
    // Apply template
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    // shadow.appendChild(template.content.cloneNode(true));
  }
}
customElements.define("top-bar", TopBar);
