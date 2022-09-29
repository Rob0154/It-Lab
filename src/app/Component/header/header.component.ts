import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() style!: string;
  headerListNavigate= [
    {
      title:'Գլխավոր',
      path:'/main'
    },
    {
      title:'Մեր մասին',
      path:'/about-us'
    },
    {
      title:'Դասընթացներ',
      path:'/courses'

    },
    {
      title:'Կապ',
    },
  ]
  constructor(private router:Router) { }
  
  ngOnInit(): void {
  }
  registrPage(){
    this.router.navigate(['/registr'])
  }
}
