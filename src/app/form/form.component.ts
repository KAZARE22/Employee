import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FORMComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  goHome()
  
  {
     this.route.navigateByUrl()
  }

}
