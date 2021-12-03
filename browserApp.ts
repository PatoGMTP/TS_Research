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

export {terminal}