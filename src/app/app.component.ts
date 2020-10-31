import { Component, OnInit } from '@angular/core';

import { CrudService } from './crud.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent {
  constructor(private _crud: CrudService) { }
}
