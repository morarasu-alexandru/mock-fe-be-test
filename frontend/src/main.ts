import "./style.css";
import { Ui } from "./ui";

const app = document.querySelector<HTMLDivElement>("#app")!;

app.innerHTML = `
  <h1>Hello Vite!</h1>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
  <div>
  <p>token with value '1' will work</p>
  <p>other tokens will not work and 401 will be received</p>
  
</div>
  <div>
  <label for="targetInput">token</label>
  <input type="text" id="targetInput" />
  <button id="targetBtn" > fire request</button>
  <div>
  <button id="clearBtn" style="margin-top: 10px">clear</button>
</div>
  <ul id="responseList"></ul>
</div>
`;

const ui = new Ui();

ui.addClickCallToBtn();
ui.addClickClearToBtn();
