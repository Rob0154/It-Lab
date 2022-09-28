import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-fouter',
  templateUrl: './fouter.component.html',
  styleUrls: ['./fouter.component.scss']
})
export class FouterComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  navigateAdvantagesPage(){
    this.router.navigate(['/advantages'])
  }
  routerAboutOurPage(){
    this.router.navigate(['/about-us'])
  }
  routerCursesPage(){
    this.router.navigate(['/courses'])

  }
  routerMinePage(){
    this.router.navigate(['/main'])

  }
}
