import { Component, OnInit } from '@angular/core';
import{ ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-review-details',
  templateUrl: './review-details.component.html',
  styleUrls: ['./review-details.component.css']
})
export class ReviewDetailsComponent implements OnInit {

  constructor(private _route: ActivatedRoute) { }
  id:number;

  ngOnInit() {
    this.id = this._route.parent.params['id'];

    // this._route.parent.params.subscribe(params => console.log(`The parent params: ${params}`))
  }

}
