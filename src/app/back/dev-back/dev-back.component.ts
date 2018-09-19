import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dev-back',
  templateUrl: './dev-back.component.html',
  styleUrls: ['./dev-back.component.css']
})
export class DevBackComponent implements OnInit {
  devBackNumber;
  canEdit = false;
  fragment;
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    // this.devBackNumber = this.route.snapshot.params['id'];
    // this.canEdit = this.route.snapshot.queryParams['canEdit'] === 'true';

    this.fragment = this.route.snapshot.fragment;
    this.route.params.subscribe((reslut) => {
      this.devBackNumber = reslut['id'];
    });
    this.route.queryParams.subscribe((qp) => {
      this.canEdit = qp['canEdit'] === 'true';
    });
  }

  reloadBackDev() {
    this.router.navigate([`/back/2`]);
  }
}
