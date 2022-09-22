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
    this.router.navigate(['/առավելություններ'])
    window.scroll(0,100)
  }
  routerAboutOurPage(){
    this.router.navigate(['/մեր-մասին'])
  }
  routerCursesPage(){
    this.router.navigate(['/դասընթացներ'])
  }
  routerMinePage(){
    this.router.navigate(['/գլխավոր'])
  }
}
