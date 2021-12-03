"use strict";
exports.__esModule = true;
exports.terminal = void 0;
var text_area = document.getElementById("terminal");
var arr = [];
var index = 0;
text_area.addEventListener("keydown", function (evt) {
    if (evt.key === "Enter") {
        index = (index + 1 === arr.length) ? 0 : index + 1;
        text_area.value = arr[index];
    }
});
var terminal = { text_area: text_area, arr: arr, index: index };
exports.terminal = terminal;
