
// function guessword(){
//     window.open("guessword.html", "_blank");
// }
// function memoryGame(){
//     window.open("memoryGame.html", "_blank");
// }

// document.addEventListener("DOMContentLoaded", () => {
//   const form = document.getElementById("form");
//   const textInput = document.getElementById("textInput");
//   const msg = document.getElementById("msg");
//   const add = document.getElementById("add");

//   let playersCount = 0;

//   form.addEventListener("submit", (e) => {
//       e.preventDefault();
//       formValidation();
//   });

//   let formValidation = () => {
//       const value = textInput.value;
//       if (value === "" || value < 1 || value > 5) {
//           msg.innerHTML = "Please enter a number between 1 and 5!";
//           console.log("failure");
//       } else {
//           console.log("success");
//           msg.innerHTML = "";
//           playersCount = value;
//           console.log("Number of players:", playersCount);
//           add.setAttribute("data-bs-dismiss", "modal");
//           add.click();
//           setTimeout(() => {
//               add.removeAttribute("data-bs-dismiss");
//               // Redirect to memory.html
//               window.location.href = "memoryGame.html";
//           }, 1000);
//       }
//   };



// CSS.registerProperty({
//     name: "--gradientColor1",
//     syntax: '<color>',
//     inherits: true,
//     initialValue: "#09ec3a"
//   });

//   CSS.registerProperty({
//     name: "--gradientColor2",
//     syntax: '<color>',
//     inherits: true,
//     initialValue: "#040c27"
//   });

//   CSS.registerProperty({
//     name: "--gradientColor3",
//     syntax: '<color>',
//     inherits: true,
//     initialValue: "#37a5ee"
//   });







function guessword() {
  window.open("guessword.html", "_blank");
}

function memoryGame() {
  // Trigger the modal for memory game
  const memoryGameElement = document.getElementById("memory-game");
  memoryGameElement.click();
}

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form");
  const textInput = document.getElementById("textInput");
  const msg = document.getElementById("msg");
  const add = document.getElementById("add");

  let playersCount = 0;

  form.addEventListener("submit", (e) => {
      e.preventDefault();
      formValidation();
  });

  let formValidation = () => {
      const value = parseInt(textInput.value, 10);
      if (isNaN(value) || value < 1 || value > 5) {
          msg.innerHTML = "Please enter a number between 1 and 5!";
          console.log("failure");
      } else {
          console.log("success");
          msg.innerHTML = "";
          playersCount = value;
          console.log("Number of players:", playersCount);
          add.setAttribute("data-bs-dismiss", "modal");
          add.click();
          setTimeout(() => {
              add.removeAttribute("data-bs-dismiss");
              // Redirect to memoryGame.html
              window.location.href = "memoryGame.html";
          }, 500); // Reduced timeout for a quicker response
      }
  };

  // Register CSS properties (if needed)
  if (CSS && CSS.registerProperty) {
      CSS.registerProperty({
          name: "--gradientColor1",
          syntax: "<color>",
          inherits: true,
          initialValue: "#09ec3a"
      });

      CSS.registerProperty({
          name: "--gradientColor2",
          syntax: "<color>",
          inherits: true,
          initialValue: "#040c27"
      });

      CSS.registerProperty({
          name: "--gradientColor3",
          syntax: "<color>",
          inherits: true,
          initialValue: "#37a5ee"
      });
  }
});
