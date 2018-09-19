import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-back',
  templateUrl: './back.component.html',
  styleUrls: ['./back.component.css']
})
export class BackComponent implements OnInit {

  backDevs: any = [
    { id: 1,
      name: 'Abdelali Majri'
    }, {
      id: 2,
      name: 'Asmaa Elourkhaoui'
    },
    {
      id: 3,
      name: 'Abdelhak Ouadi'
    }
  ];

  navigationExtras: NavigationExtras = {
    queryParams: { 'canEdit' : false },
    fragment: 'Loading'
  };

  constructor(private router: Router) { }

  ngOnInit() {
  }

  navigateToBackDevPage() {
    this.router.navigate(['/back/1'], {
      queryParams: { 'canEdit' : false },
      fragment: 'Loading'
    });
  }

  showBackDev(id) {
    this.router.navigate([`/back/${id}`], {
      queryParams: { 'canEdit' : id === 2 },
      fragment: 'Loading'
    });
  }
}
