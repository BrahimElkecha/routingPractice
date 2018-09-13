import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-outline',
  templateUrl: './outline.component.html',
  styleUrls: ['./outline.component.css']
})
export class OutlineComponent implements OnInit {
  outlines: any = [
    'Introduction -----------------------------------------------(2min)',
    'Config & quick start -----------------------------------(5min)',
    'Set up routing --------------------------------------------(5min)',
    'Navigation with directives (html) --------------(5min)',
    'Navigation with code (component) -----------(5min)',
    'Absolute vs relative path ---------------------------(5min)',
    'QueryParams & fragment --------------------------(5min)',
    'Nested (child) routes ---------------------------------(8min)',
    'Passing static data & WILD CARD Route ---(5min)',
    'Outsourcing the route configuration-----------(2min)'
  ];
  constructor() { }

  ngOnInit() {
  }

}
