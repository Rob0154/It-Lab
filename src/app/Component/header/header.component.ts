import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  headerListNavigate= [
    {
      title:'Գլխավոր',
      path:'/գլխավոր'
    },
    {
      title:'Մեր մասին',
      path:'/մեր-մասին'
    },
    {
      title:'Դասընթացներ',
      path:'/դասընթացներ'

    },
    {
      title:'Կապ',
      path:'/կապ'

    },
  ]
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  registrPage(){
    this.router.navigate(['/գրանցվել'])
  }
}
