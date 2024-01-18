import React, { Component } from 'react';
import CanvasJSReact from '@canvasjs/react-charts';
let CanvasJSChart = CanvasJSReact.CanvasJSChart;

class Satisfaction extends Component {
    render() {
        const options = {
            animationEnabled: true,
            title: {
                text: "Candidate Satisfaction"
            },
            subtitles: [{
                text: "71% Positive",
                verticalAlign: "center",
                fontSize: 24,
                dockInsidePlotArea: true
            }],
            data: [{
                type: "doughnut",
                showInLegend: true,
                indexLabel: "{name}: {y}",
                yValueFormatString: "#,###'%'",
                dataPoints: [
                    { name: "Unsatisfied", y: 5 },
                    { name: "Very Unsatisfied", y: 31 },
                    { name: "Very Satisfied", y: 40 },
                    { name: "Satisfied", y: 17 },
                    { name: "Neutral", y: 7 }
                ]
            }]
        }

        return (
            <div id="chartContainer">
                <CanvasJSChart options={options}
                />
            </div>
        );
    }
}

export default Satisfaction;