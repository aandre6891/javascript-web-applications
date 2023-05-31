(() => {
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // messageView.js
  var require_messageView = __commonJS({
    "messageView.js"(exports, module) {
      var MessageView2 = class {
        constructor() {
          this.mainContainerEL = document.querySelector("#main-container");
          this.buttonEl = document.querySelector("#show-message-button");
          this.deleteButtonEl = document.querySelector("#delete-message-button");
          this.buttonEl.addEventListener("click", () => {
            this.displayMessage();
          });
          this.deleteButtonEl.addEventListener("click", () => {
            this.hideMessage();
          });
        }
        displayMessage() {
          const messageEl = document.createElement("div");
          messageEl.id = "message";
          messageEl.innerText = "This message displayed by JavaScript";
          this.mainContainerEL.append(messageEl);
        }
        hideMessage() {
          const messageEl = document.querySelector("#message");
          this.mainContainerEL.remove(messageEl);
        }
      };
      module.exports = MessageView2;
    }
  });

  // index.js
  var MessageView = require_messageView();
  var view = new MessageView();
})();
