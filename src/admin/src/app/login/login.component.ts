import { Component, OnInit } from '@angular/core';
import { UserListing } from '../../../../providers';

@Component({
  selector: 'app-dashboard',
  template: require('./dashboard.component.html'),
})
export class LoginComponent implements OnInit {
  constructor(private userListing : UserListing) {}
  ngOnInit(){}
  ngAfterViewInit(){}
}
