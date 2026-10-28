// ===== Runs when the file loads =====
console.log("script.js loaded");

// ===== 1. External script button =====
document.getElementById("btn-external").addEventListener("click", () => {
  document.getElementById("way-output").textContent = "External script ran.";
});

// ===== 2. DOM: select and change =====
const domText = document.getElementById("dom-text");

document.getElementById("btn-text").addEventListener("click", () => {
  domText.textContent = "The text was changed with JavaScript.";
});

document.getElementById("btn-html").addEventListener("click", () => {
  // innerHTML parses HTML tags. Only use it with trusted content.
  domText.innerHTML = "This has <strong>bold</strong> and <em>italic</em> text.";
});

document.getElementById("btn-style").addEventListener("click", () => {
  domText.style.color = "crimson";
  domText.style.fontSize = "24px";
});

document.getElementById("btn-class").addEventListener("click", () => {
  domText.classList.toggle("highlight");
});

document.getElementById("btn-hide").addEventListener("click", () => {
  domText.classList.toggle("hidden");
});

document.getElementById("btn-attr").addEventListener("click", () => {
  const link = document.querySelector("#dom-link");
  link.setAttribute("href", "https://www.w3.org");
  link.textContent = "Now pointing to W3C";
});

// ===== 3. Events =====
let count = 0;
const countButton = document.getElementById("btn-count");
countButton.addEventListener("click", () => {
  count++;
  countButton.textContent = `Clicked ${count} time${count === 1 ? "" : "s"}`;
});

const liveInput = document.getElementById("live-input");
liveInput.addEventListener("input", () => {
  document.getElementById("live-output").textContent = liveInput.value;
  document.getElementById("live-count").textContent = liveInput.value.length;
});

const hoverBox = document.getElementById("hover-box");
hoverBox.addEventListener("mouseover", () => { hoverBox.style.background = "#fdebd0"; });
hoverBox.addEventListener("mouseout",  () => { hoverBox.style.background = ""; });

document.getElementById("greet-form").addEventListener("submit", (event) => {
  event.preventDefault();            // stop the page from reloading
  const name = document.getElementById("greet-name").value.trim();
  document.getElementById("greet-output").textContent = `Hello, ${name}!`;
});

// ===== 4. Create and remove elements =====
const todoForm = document.getElementById("todo-form");
const todoInput = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");

todoForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const li = document.createElement("li");
  li.textContent = todoInput.value.trim() + " ";

  const removeButton = document.createElement("button");
  removeButton.textContent = "Remove";
  removeButton.className = "remove";
  li.appendChild(removeButton);

  todoList.appendChild(li);
  todoInput.value = "";
  todoInput.focus();
});

// Event delegation: one listener on the list handles every Remove button
todoList.addEventListener("click", (event) => {
  if (event.target.classList.contains("remove")) {
    event.target.parentElement.remove();
  }
});

// ===== 5. Mini chat =====
const chatWindow = document.getElementById("chat-window");
const chatForm = document.getElementById("chat-form");
const chatInput = document.getElementById("chat-input");

function addMessage(text, sender) {
  const div = document.createElement("div");
  div.className = `msg ${sender}`;
  div.textContent = text;            // textContent keeps user text safe from HTML injection
  chatWindow.appendChild(div);
  chatWindow.scrollTop = chatWindow.scrollHeight;
}

addMessage("Hi! I am a demo bot. Type anything.", "bot");

chatForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const text = chatInput.value.trim();
  if (text === "") return;

  addMessage(text, "user");
  chatInput.value = "";

  // Pretend the bot needs a moment to answer (later: a real API call)
  setTimeout(() => {
    addMessage(`You said: "${text}"`, "bot");
  }, 600);
});