/**
 * Created by mpatterson on 8/16/16.
 */


import {Component, Input,Output, EventEmitter} from "angular2/core";


@Component({
    selector: 'configure-testbatch-dropdown',
    template:`
            <div class="container">

                <div class="dropdown "  style="width: 25%" data-toggle="dropdown">
                    <select  name="colour" class="form-control btn-success" (change)="valueSelected($event.target.value, $event)">
                        <option *ngFor="let value of dropdown_values">{{value}}</option>
                    </select>
                </div>
            </div>`
})

export class ConfigureTestBatchDropdownComponent{
    dropdown_values = [];
    @Input() set setValues(values: any[]){
        if (values != undefined){
            console.log(values[0].values);
            this.dropdown_values = values[0].values;
        }
    }


    @Output() sendSelected = new EventEmitter<any>();

    constructor(){}

    valueSelected(value, event){
        console.log(event);
        if (value.indexOf("--")>= 0)
            value = undefined;
        console.log(value);
        this.sendSelected.emit({"dropdown_value":value})
    }

}