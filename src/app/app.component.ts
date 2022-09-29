import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  hello = ''
  title = 'it-Lab'
  constructor(
    private router: Router
  ) { }
  ngOnInit(): void {
    this.router.events.subscribe((res => {
      
      if (res instanceof NavigationEnd) {
        if (res.url === '/registr') {
          this.hello = 'changeColor'
        } else if (res.url === '/see-more'){
          this.hello = 'changeColor2'
        }else {
          this.hello = ''
        }
      }
    }))
  }
}
