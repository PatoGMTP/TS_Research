// import {} from './browserApp';
import {primitives} from './primitives.js';
import {tuples} from './tuples.js';
import {complexType} from './complexType.js';
import {typeAliases} from './typeAliases.js';
import {typeInference} from './typeInference.js';
import {union} from './union.js';


const text_area: HTMLTextAreaElement = document.getElementById("terminal") as HTMLTextAreaElement;
const arr: string[] = []
let index: number = 0

text_area.addEventListener("keydown", evt => {
    if (evt.key === "Enter")
    {
        index = (index+1 === arr.length) ? 0 : index+1;
        text_area.value = arr[index];
    }
});

const terminal: {text_area: HTMLTextAreaElement, arr: string[], index: number} = {text_area: text_area, arr: arr, index: index};

primitives(terminal);
tuples(terminal);
complexType(terminal);
typeAliases(terminal);
typeInference(terminal);
union(terminal);

