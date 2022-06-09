interface CircularGaugeProps {
    value: number;
}

export function CircularGauge(props: CircularGaugeProps): JSX.Element {
    const { value } = props;

    let progress = <circle
        cx="50"
        cy="50"
        r="43"
        stroke="#e8465e"
        strokeWidth="14"
        fill="none"
    />
    if (value < 99.99) {
        progress = <path
            d={describeArc(50, 50, 0, (value / 100) * 360, 43)}
            fill="none"
            stroke="#e8465e"
            strokeWidth="14"
        />
    }

    return <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        viewBox="0 0 100 100"
    >
        <circle
            cx="50"
            cy="50"
            r="43"
            strokeWidth="12"
            stroke="lightGray"
            fill="none"
        ></circle>
        {progress}
    </svg>
}

interface Coordinates {
    x: number;
    y: number;
}

function polarToCartesian(
    centerX: number,
    centerY: number,
    angleInDegrees: number,
    radius: number
): Coordinates {
    const angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;

    return {
        x: centerX + radius * Math.cos(angleInRadians),
        y: centerY + radius * Math.sin(angleInRadians),
    };
}

function describeArc(
    x: number,
    y: number,
    startAngle: number,
    endAngle: number,
    radius: number
): string {
    const start = polarToCartesian(x, y, endAngle, radius);
    const end = polarToCartesian(x, y, startAngle, radius);

    const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";

    const d = ["M", start.x, start.y, "A", radius, radius, 0, largeArcFlag, 0, end.x, end.y].join(
        " "
    );

    return d;
}
