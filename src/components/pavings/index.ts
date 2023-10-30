
interface PositionType {
    x: number;
    y: number;
}

interface ColorsType {
    outline: string;
    color: string;
}

interface SizeType {
    width: number;
    height: number;
}


export function square(
    context : CanvasRenderingContext2D,
    {x, y}: PositionType,
    {color, outline}: ColorsType,
    side: number
) {
    context.fillStyle   = color;
    context.strokeStyle = outline;
    context.lineWidth = 10;

    context.beginPath();
    context.rect(x, y, side-5, side-5);
    context.stroke();
    context.fill();
    context.closePath();
}

export function rectangle(
    context : CanvasRenderingContext2D,
    {x, y}: PositionType,
    {color, outline}: ColorsType,
    { width, height }: SizeType
) {
    context.fillStyle   = color;
    context.strokeStyle = outline;
    context.lineWidth = 10;

    context.beginPath();
    context.rect(x, y, width -5, height -5);
    context.stroke();
    context.fill();
    context.closePath();
}

export function octogone(
    context : CanvasRenderingContext2D,
    {x, y}: PositionType,
    {color, outline}: ColorsType,
    side: number) {

    context.fillStyle   = color;
    context.strokeStyle = outline;
    context.lineWidth = 10;

    const quater = side / 4;
    const middleLineWidth = context.lineWidth/2;
    const offsetOutline = 3;

    context.translate(-middleLineWidth,-middleLineWidth);
    context.beginPath();
    context.moveTo(x + quater - offsetOutline, y);
    context.lineTo(x + 3 * quater, y);
    context.lineTo(x + side, y + quater);
    context.lineTo(x + side, y +  3 * quater);
    context.lineTo(x + 3 * quater, y + side);
    context.lineTo(x + quater, y + side);
    context.lineTo(x , y + 3 * quater);
    context.lineTo(x, y + quater);
    context.lineTo(x + quater, y);
    context.stroke();
    context.fill();
    context.closePath();
}

export function hexagone(
    context : CanvasRenderingContext2D,
    {x, y}: PositionType,
    {color, outline}: ColorsType,
    side: number) {

    context.fillStyle   = color;
    context.strokeStyle = outline;
    context.lineWidth = 10;

    const quater = side / 4;
    const middleLineWidth = context.lineWidth/2;
    const offsetOutline = 3;

    context.translate(-middleLineWidth,-middleLineWidth);
    context.beginPath();
    context.moveTo(x + quater - offsetOutline, y);
    context.lineTo(x + 3 * quater, y);
    context.lineTo(x + side, y + side/2);

    context.lineTo(x + 3 * quater, y + side);
    context.lineTo(x +  quater, y + side);
    context.lineTo(x, y + side/2);
    context.lineTo(x +  quater, y);


    /*context.lineTo(x + 3 * quater, y + side);
    context.lineTo(x + quater, y + side);
    context.lineTo(x , y + 3 * quater);
    context.lineTo(x, y + quater);
    context.lineTo(x + quater, y);*/
    context.stroke();
    context.fill();
    context.closePath();
}

// rotation does not work
export function diamond(
    context : CanvasRenderingContext2D,
    {x, y}: PositionType,
    {color, outline}: ColorsType,
    side: number
) {

    context.fillStyle   = color;
    context.strokeStyle = outline;
    context.lineWidth = 3;
    context.beginPath();
    // Start from the top-left point.
    context.moveTo(x + side/2, y);
    context.lineTo(x + side, y + side/2);
    context.lineTo(x + side/2, y + side);
    context.lineTo(x, y + side/2);
    context.lineTo(x + side/2, y);
    // Now fill the shape, and draw the stroke.
    context.fill();
    context.stroke();
    context.closePath();

}

export function triangle(
    context : CanvasRenderingContext2D,
    {x, y}: PositionType,
    {color, outline}: ColorsType,
    side: number
) {
    context.fillStyle   = color;
    context.strokeStyle = outline;
    context.lineWidth = 10;
    context.beginPath();
    // Start from the top-left point.
    context.moveTo(x, y); // give the (x,y) coordinates
    context.lineTo(x + side, y);
    context.lineTo(x, y + side);
    context.lineTo(x, y);
    // Now fill the shape, and draw the stroke.
    context.fill();
    context.stroke();
    context.closePath();
}