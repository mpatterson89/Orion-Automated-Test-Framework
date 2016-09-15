/**
 * Created by ehnsgz5 on 4/26/2016.
 */

import {Component, OnInit, Output, EventEmitter, Input} from 'angular2/core';
import {RouterLink} from 'angular2/router';

@Component({
    selector: 'features',
    template: `
    <div align="center" style="width: 100%; margin-left: 1em">
        <h3><span style="color: #00A000">Features Automated</span></h3>
        <div class="list-group" style="margin-top: 10%">
            <div *ngFor="#feature of features_list, #i = index">
                <a type="button" (click)="setSelected($event, i)"  [routerLink]="['Reporting']" class="list-group-item btn-read-report">
                    {{feature}}
                </a>
            </div>
        </div>
    </div>
    `,
    directives: [RouterLink]
})

export class FeaturesComponent implements OnInit{
    features_list: any[] = [];
    @Input() testBatch: any;
    selectedFeature: string;
    @Output() change = new EventEmitter();
    constructor(){
        
    }

    setSelected($event, i: number){
        this.selectedFeature = this.features_list[i];
        this.change.emit({selectedFeature: this.selectedFeature});
        console.log(this.selectedFeature)
    }

    ngOnInit(){
        console.log(this.testBatch);
        for (var i = 0; i < this.testBatch.length; i++) {
            this.features_list.push(this.testBatch[i].feature);
        }
        // this.features_list = [
        //     'Task Sorter',
        //     'Web Work Assignment'
        // ]
        console.log('Feature List: ', this.features_list );
    }

}