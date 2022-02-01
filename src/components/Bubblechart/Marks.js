import { handleMouseEnter, handleMouseLeave } from '../../charttools/useMouseHover';
import { useStoreActions } from 'easy-peasy';

const missingDataColor = 'darkgray';

const Marks = ({
  data,
  xScale,
  yScale,
  xValue,
  yValue,
  toolTipFormat,
  averagePopulation,
  circleRadius,
  colorScale,
  colorValue,
}) => {
  const setClickedCountry = useStoreActions((actions) => actions.setClickedCountry);
  return data.map((d) => (
    <circle
      id={'Bubblechart_' + d.country}
      key={d.country}
      className="mark"
      cx={xScale(xValue(d))}
      cy={yScale(yValue(d))}
      r={((d.population / averagePopulation) * circleRadius) / Math.PI}
      fill={d ? colorScale(colorValue(d)) : missingDataColor}
      onMouseEnter={(e) => handleMouseEnter(e, ['Map_', 'List_'])}
      onMouseLeave={(e) => handleMouseLeave(e, ['Map_', 'List_'])}
      onClick={(e) => setClickedCountry(e.target.id.split('_')[1])}
    >
      <title>
        {d.country +
          '\n % of GDP: ' +
          Math.round((d.investment + Number.EPSILON) * 100) / 100 +
          '\n Patents per million: ' +
          Math.round(d.patents / (d.population / 1000000), 2) +
          '\n Patents: ' +
          Math.round(d.patents, 2) +
          '\n Population: ' +
          Math.round(d.population / 1000000, 2) +
          ' million'}
      </title>
    </circle>
  ));
};

export default Marks;
