import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-see-morre-page',
  templateUrl: './see-morre-page.component.html',
  styleUrls: ['./see-morre-page.component.scss']
})
export class SeeMorrePageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    window.scrollTo(0,0)
  }

}
