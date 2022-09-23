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
    window.scroll(0,0)
  }
  routerAboutOurPage(){
    this.router.navigate(['/մեր-մասին'])
    window.scroll(0,0)
  }
  routerCursesPage(){
    this.router.navigate(['/դասընթացներ'])
    window.scroll(0,0)

  }
  routerMinePage(){
    this.router.navigate(['/գլխավոր'])
    window.scroll(0,0)

  }
}
