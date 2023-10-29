import { square, rectangle } from "./index";

interface OptionInterface {
    width: number;
    height: number;
    pavingWidth: number;
    pavingHeight: number;
}

type pavingFunctionType = (context: CanvasRenderingContext2D, x : number, y : number) => void;
type iterateFunctionType = (context: CanvasRenderingContext2D, pavingFunction: pavingFunctionType, options: OptionInterface) => void;

function render(
    context : CanvasRenderingContext2D,
    pavingFunction: pavingFunctionType,
    iterateFunction: iterateFunctionType,
    options: OptionInterface) {
    iterateFunction(context, pavingFunction, options);
}

function iterateSquareOffset(context : CanvasRenderingContext2D, pavingFunction: pavingFunctionType, {width, height, pavingWidth, pavingHeight} : OptionInterface) {
    let rowIndex = 1;
    const xOffset = (width % pavingWidth) / 2;
    const yOffset = (height % pavingHeight) / 2;

    for(let y = 0; y < (height - xOffset); y+=pavingHeight) {
        for(let x = 0; x < (width - yOffset); x+= pavingWidth) {
            const offsetX = (rowIndex%2== 0) ? pavingWidth/2 : 0;
            pavingFunction(context, x + offsetX, y);
        }
        rowIndex = rowIndex + 1;
    }
}

function iterateSquare(context : CanvasRenderingContext2D, pavingFunction: pavingFunctionType, {width, height, pavingWidth, pavingHeight} : OptionInterface) {
    const xOffset = (width % pavingWidth) / 2;
    const yOffset = (height % pavingHeight) / 2;

    for(let y = xOffset; y < (height - xOffset); y+=pavingHeight) {
        for(let x = yOffset; x < (width - yOffset); x+= pavingWidth) {
            pavingFunction(context, x, y);
        }
    }
}

export function renderSquare(context : CanvasRenderingContext2D, width: number, height: number) {
    const pavingSize = 32;
    const options : OptionInterface = {
        pavingWidth: pavingSize,
        pavingHeight: pavingSize,
        width,
        height
    }
    function pavingFunction(context: CanvasRenderingContext2D, x : number, y : number) {
        square(context, { x, y }, {color: "red", outline: "green"}, pavingSize);
    }

    render(context, pavingFunction, iterateSquareOffset, options);
}


export function renderRectangle(context : CanvasRenderingContext2D, width: number, height: number) {
    const pavingWidth = 45;
    const pavingHeight = 20;
    const options : OptionInterface = {
        pavingWidth,
        pavingHeight,
        width,
        height
    }
    function pavingFunction(context: CanvasRenderingContext2D, x : number, y : number) {
        rectangle(context, { x, y }, {color: "red", outline: "green"}, { width: pavingWidth, height: pavingHeight });
    }

    render(context, pavingFunction, iterateSquareOffset, options);
}
