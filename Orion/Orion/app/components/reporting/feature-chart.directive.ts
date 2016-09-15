/**
 * Created by ehnsgz5 on 4/26/2016.
 */

import {Directive, OnInit} from 'angular2/core';

declare var  Chart: any;

@Directive({
    selector: '[chart]'
})

export class FeatureChartDirective implements OnInit{

    constructor(){}

    ngOnInit(){

        var data = {
            labels: ["Web Transport Assign", "Web Transport Update", "Web Transport Create", "Task Sorter",
                "Notifications Transport Assigned", "Notifications Transport Canceled", "Notifications Transport Delayed"],
            datasets: [
                {
                    label: "Failures",
                    fill: true,
                    lineTension: 0.1,
                    backgroundColor: "#ff0000",
                    borderColor: "#ff3333",
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    pointBorderColor: "rgba(75,192,192,1)",
                    pointBackgroundColor: "#fff",
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: "rgba(75,192,192,1)",
                    pointHoverBorderColor: "rgba(220,220,220,1)",
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 1,
                    data: [0,1,0,9,1,0,0],
                },
                {
                    label: "Successes",
                    fill: false,
                    lineTension: 0.1,
                    backgroundColor: "#009933",
                    borderColor: "#00cc00",
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    pointBorderColor: "#1aff1a",
                    pointBackgroundColor: "#fff",
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: "rgba(75,192,192,1)",
                    pointHoverBorderColor: "rgba(220,220,220,1)",
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 1,
                    data: [79, 4, 26, 72, 15, 22,28 ],
                }
            ]
        };
        var options={

        };

        var canvas = <HTMLCanvasElement> document.getElementById("feature-chart");
        console.log(canvas);
        if (canvas) {
            // var ctx = canvas.getContext('2d');
            Chart.defaults.global.legend.display = false;
            var ctx = document.getElementById("feature-chart");
            var mylineChart = new Chart(ctx, {
                type: 'line',
                data: data,
                options: options
            });
        }

    }

}
