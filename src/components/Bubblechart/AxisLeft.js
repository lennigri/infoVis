export const AxisLeft = ({ yScale, innerWidth, tickOffset = 3 }) =>
  yScale.ticks().map((tickValue) => (
    <g className="tick" key={tickValue} transform={`translate(0,${yScale(tickValue)})`}>
      <line x2={innerWidth} />
      <text
        key={tickValue}
        className="chartText"
        style={{ textAnchor: 'end' }}
        x={-tickOffset}
        dy=".32em"
      >
        {tickValue}
      </text>
    </g>
  ));
