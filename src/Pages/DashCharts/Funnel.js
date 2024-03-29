import React, { Component } from 'react';
import CanvasJSReact from '@canvasjs/react-charts';
let CanvasJSChart = CanvasJSReact.CanvasJSChart;

// created the funnel chart with canvasjs
 
class Funnel extends Component {
	render() {
		let dataPoint;
		let total;
		const options = {
			theme: "light",
			animationEnabled: true,
			title:{
				text: "Monthly Recruitment Funnel"
			},
			data: [{
				type: "funnel",
				indexLabel: "{label} - {y}",
				toolTipContent: "<b>{label}</b>: {y} <b>({percentage}%)</b>",
				neckWidth: 20,
				neckHeight: 0,
				valueRepresents: "area",
				dataPoints: [
					{ y: 265, label: "Applications" },
					{ y: 134, label: "Interviewed" },
					{ y: 48, label: "Assessment" },
					{ y: 16, label: "Hired" }
				]
			}]
		}
		//calculate percentage
		dataPoint = options.data[0].dataPoints;
		total = dataPoint[0].y;
		for(let i = 0; i < dataPoint.length; i++) {
			if(i === 0) {
				options.data[0].dataPoints[i].percentage = 100;
			} else {
				options.data[0].dataPoints[i].percentage = ((dataPoint[i].y / total) * 100).toFixed(2);
			}
		}
		
		return (
		<div id="chartContainer">
			<CanvasJSChart options = {options} 
			/>
		</div>
		);
	}
}

export default Funnel;