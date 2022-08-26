import { Component, OnInit } from '@angular/core';
import { reduce } from 'rxjs';

@Component({
  //selector: '.app-employe',//(.)represent a class
  selector: '[app-employe]',//(square bracket specify an attribute)
 // templateUrl: './employe.component.html',
 template: '<div> sample message </div>',
 styleUrls: ['./employe.component.css']
})
export class EmployeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
