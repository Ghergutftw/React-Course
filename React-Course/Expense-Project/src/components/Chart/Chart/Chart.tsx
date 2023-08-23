import './Chart.css'
import ChartBar from "../CharBar/ChartBar.tsx";
// @ts-ignore

const Chart = (props: { dataPoints: any[]; }) => {

    const totalMaximum = Math.max(...props.dataPoints.map(dataPoint => dataPoint.value))

    return (
        <div className={"chart"}>
            {props.dataPoints.map((dataPoint: { label: any; value: any; }) =>
            <ChartBar
                key={dataPoint.label}
                value={dataPoint.value}
                maxValue={totalMaximum}
                label={dataPoint.label}>
            </ChartBar>)}
        </div>
    );
}

export default Chart;
