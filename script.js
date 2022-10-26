"use strict";
const panels = document.querySelectorAll(".panel");

const removeActiceClass = function (panel) {
  panel.forEach((panel) => panel.classList.remove("active"));
};

panels.forEach((panel) =>
  panel.addEventListener("click", function () {
    removeActiceClass(panels);
    panel.classList.add("active");
  })
);
