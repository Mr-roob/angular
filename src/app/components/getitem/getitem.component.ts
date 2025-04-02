import { Component, Input, input, OnInit } from '@angular/core';

@Component({
    selector: 'getitem',
    templateUrl: 'getitem.component.html'
})

export class getitemComponent implements OnInit {
    @Input() img!:string
    @Input() titel!:string
    @Input() pirce!:string
    constructor() { }


    ngOnInit() { }
}