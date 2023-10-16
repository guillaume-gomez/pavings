
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
    context.rect(x, y, side, side); // rect(x, y, width, height)
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
    context.rect(x, y, width, height); // rect(x, y, width, height)
    context.stroke();
    context.fill();
    context.closePath();
}

// rotation does not work
export function diamond(
    canvasWidth: number,
    canvasHeight: number,
    context : CanvasRenderingContext2D,
    positions: PositionType,
    colors: ColorsType,
    side: number
) {
    context.save();

    context.translate(canvasWidth / 2, canvasHeight / 2);
    context.rotate(Math.PI / 4);
    square(context, positions, colors, side);
    context.translate(-(side / 2), -(side / 2));

    context.restore();

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