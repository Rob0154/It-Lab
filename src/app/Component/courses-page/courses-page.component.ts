import { Component, OnInit } from '@angular/core';
import { ElementRef } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrls: ['./courses-page.component.scss']
})
export class CoursesPageComponent implements OnInit {
cursesList = [
  {
    img:'../../../assets/kisspng-sat-bildung-oase-student-education-college-students-5ac817434431c4 1.png',
    muchLogo:'../../../assets/clarity_book-line.png',
    muchTitle:'30 դաս',
    dayLogo:'../../../assets/Group.png',
    dayTitle:'20․05․2022',
    cursesNameTitle:'PHP FULL STACK COURSE',
    decribtheonCurses:'Միացեք մեր դասընթացին և սովորեք ամենապահանջված և արդի մասագիտություն',
    amd:'30.000 AMD'
  },
  {
    img:'../../../assets/kisspng-international-student-study-skills-higher-educatio-college-student-5aeb585235a651 2.png',
    muchLogo:'../../../assets/clarity_book-line.png',
    muchTitle:'30 դաս',
    dayLogo:'../../../assets/Group.png',
    dayTitle:'20․05․2022',
    cursesNameTitle:'JavaScript FULL STACK COURSE',
    decribtheonCurses:'Միացեք մեր դասընթացին և սովորեք ամենապահանջված և արդի մասագիտություն',
    amd:'30.000 AMD'

  },
  {
    img:'../../../assets/kisspng-international-student-university-school-education-to-study-5b19e2709fe2c7 1.png',
    muchLogo:'../../../assets/clarity_book-line.png',
    muchTitle:'30 դաս',
    dayLogo:'../../../assets/Group.png',
    dayTitle:'20․05․2022',
    cursesNameTitle:'HTML & CSS',
    decribtheonCurses:'Միացեք մեր դասընթացին և սովորեք ամենապահանջված և արդի մասագիտություն',
    amd:'30.000 AMD'

  },
  {
    img:'../../../assets/5a38462fc548b3 1.png',
    muchLogo:'../../../assets/clarity_book-line.png',
    muchTitle:'30 դաս',
    dayLogo:'../../../assets/Group.png',
    dayTitle:'20․05․2022',
    cursesNameTitle:'Ծրագրավորման հիմունքներ',
    decribtheonCurses:'Միացեք մեր դասընթացին և սովորեք ամենապահանջված և արդի մասագիտություն',
    amd:'30.000 AMD'

  },
  {
    img:'../../../assets/kisspng-test-of-english-as-a-foreign-language-toefl-inte-university-students-5adc6481f37037 2.png',
    muchLogo:'../../../assets/clarity_book-line.png',
    muchTitle:'30 դաս',
    dayLogo:'../../../assets/Group.png',
    dayTitle:'20․05․2022',
    cursesNameTitle:'Node.js',
    decribtheonCurses:'Միացեք մեր դասընթացին և սովորեք ամենապահանջված և արդի մասագիտություն',
    amd:'30.000 AMD'

  },
  {
    img:'../../../assets/kisspng-student-portable-network-graphics-school-college-h-5c63b40e29f767 1.png',
    muchLogo:'../../../assets/clarity_book-line.png',
    muchTitle:'30 դաս',
    dayLogo:'../../../assets/Group.png',
    dayTitle:'20․05․2022',
    cursesNameTitle:'Angular',
    decribtheonCurses:'Միացեք մեր դասընթացին և սովորեք ամենապահանջված և արդի մասագիտություն',
    amd:'30.000 AMD'

  },
  {
    img:'../../../assets/kisspng-sat-bildung-oase-student-education-college-students-5ac817434431c4 1.png',
    muchLogo:'../../../assets/clarity_book-line.png',
    muchTitle:'30 դաս',
    dayLogo:'../../../assets/Group.png',
    dayTitle:'20․05․2022',
    cursesNameTitle:'MongoDB',
    decribtheonCurses:'Միացեք մեր դասընթացին և սովորեք ամենապահանջված և արդի մասագիտություն',
    amd:'30.000 AMD'

  },
  {
    img:'../../../assets/5a38462fc548b3 1.png',
    muchLogo:'../../../assets/clarity_book-line.png',
    muchTitle:'30 դաս',
    dayLogo:'../../../assets/Group.png',
    dayTitle:'20․05․2022',
    cursesNameTitle:'MySQL',
    decribtheonCurses:'Միացեք մեր դասընթացին և սովորեք ամենապահանջված և արդի մասագիտություն',
    amd:'30.000 AMD'

  },
]
cursesSmoolList = [
  {
    img:'../../../assets/kisspng-sat-bildung-oase-student-education-college-students-5ac817434431c4 1.png',
    muchLogo:'../../../assets/clarity_book-line.png',
    muchTitle:'30 դաս',
    dayLogo:'../../../assets/Group.png',
    dayTitle:'20․05․2022',
    cursesNameTitle:'PHP FULL STACK COURSE',
    decribtheonCurses:'Միացեք մեր դասընթացին և սովորեք ամենապահանջված և արդի մասագիտություն',
    amd:'30.000 AMD'
  },
  {
    img:'../../../assets/kisspng-international-student-study-skills-higher-educatio-college-student-5aeb585235a651 2.png',
    muchLogo:'../../../assets/clarity_book-line.png',
    muchTitle:'30 դաս',
    dayLogo:'../../../assets/Group.png',
    dayTitle:'20․05․2022',
    cursesNameTitle:'JavaScript FULL STACK COURSE',
    decribtheonCurses:'Միացեք մեր դասընթացին և սովորեք ամենապահանջված և արդի մասագիտություն',
    amd:'30.000 AMD'

  },
  {
    img:'../../../assets/kisspng-international-student-university-school-education-to-study-5b19e2709fe2c7 1.png',
    muchLogo:'../../../assets/clarity_book-line.png',
    muchTitle:'30 դաս',
    dayLogo:'../../../assets/Group.png',
    dayTitle:'20․05․2022',
    cursesNameTitle:'HTML & CSS',
    decribtheonCurses:'Միացեք մեր դասընթացին և սովորեք ամենապահանջված և արդի մասագիտություն',
    amd:'30.000 AMD'

  },
  {
    img:'../../../assets/5a38462fc548b3 1.png',
    muchLogo:'../../../assets/clarity_book-line.png',
    muchTitle:'30 դաս',
    dayLogo:'../../../assets/Group.png',
    dayTitle:'20․05․2022',
    cursesNameTitle:'Ծրագրավորման հիմունքներ',
    decribtheonCurses:'Միացեք մեր դասընթացին և սովորեք ամենապահանջված և արդի մասագիտություն',
    amd:'30.000 AMD'

  },
]
selected: Date | null;
  constructor(private el:ElementRef,private router:Router) { }

  ngOnInit(): void {
  }
  paginatorList(num:number){
    if(num == 1){
      let list1 = this.el.nativeElement.getElementsByClassName('paginator1')[0]
      list1.style.color = '#42975B'
      let list2 = this.el.nativeElement.getElementsByClassName('paginator2')[0]
      list2.style.color = '#06295E'
      let list3 = this.el.nativeElement.getElementsByClassName('paginator3')[0]
      list3.style.color = '#06295E'
    }else if (num == 2){
      let list1 = this.el.nativeElement.getElementsByClassName('paginator1')[0]
      list1.style.color = '#06295E'
      let list2 = this.el.nativeElement.getElementsByClassName('paginator2')[0]
      list2.style.color = '#42975B'
      let list3 = this.el.nativeElement.getElementsByClassName('paginator3')[0]
      list3.style.color = '#06295E'
    }else {
      let list1 = this.el.nativeElement.getElementsByClassName('paginator1')[0]
      list1.style.color = '#06295E'
      let list2 = this.el.nativeElement.getElementsByClassName('paginator2')[0]
      list2.style.color = '#06295E'
      let list3 = this.el.nativeElement.getElementsByClassName('paginator3')[0]
      list3.style.color = '#42975B'
    }
  }
  rountingPage(){
    this.router.navigate(['/տեսնե-ավելին'])
  }
}
