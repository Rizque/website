const canvas = document.getElementById("drawing-board");
const toolbar = document.getElementById("toolbar");
const ctx = canvas.getContext("2d");

const canvasOffsetX = canvas.offsetLeft;
const canvasOffsetY = canvas.offsetTop;

canvas.width = window.innerWidth - canvasOffsetX;
canvas.height = window.innerHeight - canvasOffsetY;
// rand = document.getElementById("rand").checked;

let isPainting = false;
let lineWidth = 5;
let startX;
let startY;

// Notīra canvas
toolbar.addEventListener("click", (e) => {
  if (e.target.id === "draw") {
    for (let i = 0; i < count.value; i++) {
      rx = Math.floor(Math.random() * canvas.width);
      ry = Math.floor(Math.random() * canvas.height);

      ctx.rect(rx, ry, size.value, size.value);
      ctx.fill();
      ctx.stroke();
      ctx.beginPath();
    }
  }
});

toolbar.addEventListener("click", (e) => {
  if (e.target.id === "clear") {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
});

// Nomaina krāsu un līnijas platumu
toolbar.addEventListener("change", (e) => {
  if (e.target.id === "stroke") {
    ctx.strokeStyle = e.target.value;
    ctx.fillStyle = e.target.value;
  }

  if (e.target.id === "lineWidth") {
    lineWidth = e.target.value;
  }
});

// Zīmēt
const draw = (e) => {
  if (!isPainting) {
    return;
  }

  ctx.lineWidth = lineWidth;
  ctx.lineCap = "round";

  ctx.lineTo(e.clientX - canvasOffsetX, e.clientY);
  ctx.stroke();
};

// Nospiežot peli sāk zīmēt
canvas.addEventListener("mousedown", (e) => {
  isPainting = true;
  startX = e.clientX;
  startY = e.clientY;
});

// Atlaižot peli pārtrauc zīmēt
canvas.addEventListener("mouseup", (e) => {
  isPainting = false;
  ctx.stroke();
  switch (e) {
    default:
      ctx.beginPath();
      break;
  }
});

canvas.addEventListener("mousemove", draw);
