// import {} from './browserApp';
import { primitives } from './primitives.js';
import { tuples } from './tuples.js';
import { complexType } from './complexType.js';
import { typeAliases } from './typeAliases.js';
import { typeInference } from './typeInference.js';
import { union } from './union.js';
primitives();
tuples();
complexType();
typeAliases();
typeInference();
union();
const text_area = document.getElementById("terminal");
const arr = [];
let index = 0;
text_area.addEventListener("keydown", evt => {
    if (evt.key === "Enter") {
        index = (index + 1 === arr.length) ? 0 : index + 1;
        text_area.value = arr[index];
    }
});
