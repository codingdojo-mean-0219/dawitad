import { Component, OnInit } from '@angular/core';
import{ ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent implements OnInit {
 id: number;
  constructor(private _route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this._route.parent.params['id'];
  }

}
