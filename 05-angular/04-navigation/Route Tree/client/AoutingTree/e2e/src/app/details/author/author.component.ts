import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {
 id:number;
  constructor(private _route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this._route.parent.params['id'];
  }

}
