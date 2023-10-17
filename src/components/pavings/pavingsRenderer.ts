
import { square } from "./index";

function render(context : CanvasRenderingContext2D, width: number, height: number, pavingFunction: any) {
    const pavingWidth = 32;
    for(let x = 0; x < width; x+= pavingWidth) {
        for(let y = 0; y < height; y+=pavingWidth) {
            pavingFunction(context, x, y, pavingWidth)
        }
    }
}

export function renderSquare(context : CanvasRenderingContext2D, width: number, height: number) {
    function pavingFunction(context: CanvasRenderingContext2D, x : number, y : number, pavingWidth: number) {
        square(context, { x, y }, {color: "red", outline: "green"}, pavingWidth);
    }
    return render(context, width, height, pavingFunction);
}