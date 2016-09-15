/**
 * Created by Michael on 4/24/2016.
 */

import {Component, Directive, ElementRef, OnInit, Input, AfterContentInit, AfterViewInit} from 'angular2/core';

declare var Chart: any;

@Directive({
    selector: '[last-batch-chart]',

})

export class DonutChartDirective implements OnInit, AfterContentInit, AfterViewInit{

    @Input() testBatch: any;

    constructor(){
        //console.log('Doughnut Constructor: ', this.testBatch);

    }
    ngAfterContentInit(){

    }
    ngAfterViewInit(){
        //console.log('Doughnut AfterViewInit: ', this.testBatch);

        this.testBatch.forEach(item=>{
            var green = "#00A000";
            var blue = "#227cf3";
            var red = "#B80D1E";
            var ctx = document.getElementById(item.feature);

            var data2 = {
                labels: [
                    "Passed",
                    "Failed",
                ],
                datasets: [
                    {
                        data: [item.passed, item.failed],
                        backgroundColor: [
                            green,
                            red,
                        ],
                        hoverBackgroundColor: [
                            green,
                            red,
                        ]
                    }]
            };
            var data = [
                    {
                        value: item.passed,
                        color: green,
                        highlight: green,
                        label: "Passed"
                    },
                    {
                        value: item.failed,
                        color: red,
                        highlight: red,
                        label: "Failed"
                    }
                ];
            var options = {
                cutoutPercentage : 55,
                animation: {
                    duration: 4500
                }
            };
            if(ctx) {
                var myDoughnutChart = new Chart(ctx, {
                    type: 'doughnut',
                    data: data2,
                    options: options
                });
            }
        });

    }

    ngOnInit(){
        //console.log('Doughnut OnInit: ', this.testBatch);

    }

}