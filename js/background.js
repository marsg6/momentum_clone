const colors = [
  "#911315",
  "#512325",
  "#413335",
  "#214345",
  "#915355",
  "#616365",
  "#817375",
  "#918385",
  "#510328",
  "#529337",
  "#538346",
  "#547355",
  "#556364",
  "#565373",
  "#574382",
  "#583391",
];

function selectBackgroundColor() {
  const colorIndex = Math.floor(Math.random() * colors.length);
  const selectedColor = colors[colorIndex];
  document.body.style.background = selectedColor;
}

selectBackgroundColor();
