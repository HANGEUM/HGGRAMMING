// ==============================
// Terminal Core Logic
// ==============================

document.addEventListener("DOMContentLoaded", () => {
  Terminal.init();
});

const Terminal = {
  outputEl: null,
  inputEl: null,
  prompt: "hg@hggramming:~$",

  init() {
    this.outputEl = document.getElementById("terminal-output");
    this.inputEl = document.getElementById("terminal-input");

    if (!this.outputEl || !this.inputEl) {
      console.error("Terminal elements not found");
      return;
    }

    this.bindEvents();
    this.printSystemMessage("Type 'help' to see available commands.");
  },

  bindEvents() {
    this.inputEl.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        const command = this.inputEl.value.trim();
        this.inputEl.value = "";

        this.printCommand(command);
        this.execute(command);
      }
    });
  },

  printCommand(command) {
    const line = document.createElement("div");
    line.className = "line fade-in";

    const promptSpan = document.createElement("span");
    promptSpan.className = "prompt";
    promptSpan.textContent = this.prompt;

    const textSpan = document.createElement("span");
    textSpan.className = "text";
    textSpan.textContent = command;

    line.appendChild(promptSpan);
    line.appendChild(textSpan);
    this.outputEl.appendChild(line);

    this.scrollToBottom();
  },

  print(text = "") {
    const line = document.createElement("div");
    line.className = "line fade-in";

    const spacer = document.createElement("span");
    spacer.className = "prompt";
    spacer.textContent = "";

    const textSpan = document.createElement("span");
    textSpan.className = "text";
    textSpan.textContent = text;

    line.appendChild(spacer);
    line.appendChild(textSpan);
    this.outputEl.appendChild(line);

    this.scrollToBottom();
  },

  printSystemMessage(text) {
    const line = document.createElement("div");
    line.className = "line fade-in";

    const textSpan = document.createElement("span");
    textSpan.className = "text";
    textSpan.style.color = "var(--accent-cyan)";
    textSpan.textContent = text;

    line.appendChild(textSpan);
    this.outputEl.appendChild(line);

    this.scrollToBottom();
  },

  execute(command) {
    if (!command) return;

    const args = command.split(" ");
    const base = args[0].toLowerCase();

    if (window.TerminalCommands && typeof TerminalCommands[base] === "function") {
      TerminalCommands[base](args.slice(1));
    } else {
      this.print(`command not found: ${base}`);
    }
  },

  clear() {
    this.outputEl.innerHTML = "";
  },

  scrollToBottom() {
    this.outputEl.scrollTop = this.outputEl.scrollHeight;
  }
};

function executeCommand(input) {
  const [cmd, ...args] = input.trim().split(" ");

  if (COMMANDS[cmd]) {
    return COMMANDS[cmd](args, terminal);
  }

  return `command not found: ${cmd}`;
}

function print(text) {
  const line = document.createElement("div");
  line.className = "line fade-in";
  
  const textSpan = document.createElement("span");
  textSpan.className = "text";
  textSpan.textContent = text;
  
  line.appendChild(textSpan);
  terminal.outputEl.appendChild(line);
  
  terminal.scrollToBottom();
}

function printSystemMessage(text) {
  const line = document.createElement("div");
  line.className = "line fade-in";
  
  const textSpan = document.createElement("span");
  textSpan.className = "text";
  textSpan.style.color = "var(--accent-cyan)";
  textSpan.textContent = text;
  
  line.appendChild(textSpan);
  terminal.outputEl.appendChild(line);
  
  terminal.scrollToBottom();
}

function clear() {
  terminal.outputEl.innerHTML = "";
}

function openterminal() {
  window.open("terminal.html", "_blank");
}