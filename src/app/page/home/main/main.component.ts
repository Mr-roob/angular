import { Component, inject, OnInit } from '@angular/core';
import { DataViewModule } from 'primeng/dataview';
import { mainService } from './main.service';
import { carditem } from './main.model';
import { __rest } from 'tslib';
import { JsonPipe } from '@angular/common';
import { getitemComponent } from "../../../components/getitem/getitem.component";

@Component({
    selector: 'main',
    templateUrl: 'main.component.html',
    providers:[mainService],
    imports: [getitemComponent]
})

export class mainComponent implements OnInit {
    mainservice = inject(mainService)
    getitem !: carditem[]

    ngOnInit() { 
    this.mainservice.getitem().subscribe({
        next :((_res)=>{
            this.getitem = _res as carditem[]
        })
    })
    }
}