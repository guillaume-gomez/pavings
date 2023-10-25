
import { square } from "./index";


function render(
    context : CanvasRenderingContext2D,
    width: number,
    height: number,
    pavingWidth: number,
    pavingFunction: (context : CanvasRenderingContext2D, x: number, y: number) => void)
{
    const pavingHeight = pavingWidth;

    const xOffset = (width % pavingWidth) / 2;
    const yOffset = (height % pavingHeight) / 2;
    for(let x = xOffset; x < (width - xOffset); x+= pavingWidth) {
        for(let y = yOffset; y < (height - yOffset); y+=pavingWidth) {
            pavingFunction(context, x, y)
         }
     }
 }


export function renderSquare(context : CanvasRenderingContext2D, width: number, height: number) {
    const pavingWidth = 32;
    function pavingFunction(context: CanvasRenderingContext2D, x : number, y : number) {
        square(context, { x, y }, {color: "red", outline: "green"}, pavingWidth);
    }
    return render(context, width, height, pavingWidth, pavingFunction);
}