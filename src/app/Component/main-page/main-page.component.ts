import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  advantagesList = [
    {
      logo: "../../../assets/Vector4.png",
      title: 'Խորացված բազային գիտելիքներ'
    },
    {
      logo: "../../../assets/Vector4.png",
      title: 'Ուսուցում փորձառու մասնագետի հետ'
    },
    {
      logo: "../../../assets/Vector4.png",
      title: 'Պրակտիկայի և աշխատանքի հնարավորություն'
    },
    {
      logo: "../../../assets/Vector4.png",
      title: 'Վարձավճարի 50% փոխհատուցում'
    },
    {
      logo: "../../../assets/Vector4.png",
      title: 'Լավագույններին աշխատանքի տեղավորում'
    }

  ]
  traningLIst = [
    {
      img: '../../../assets/d.png',
      title: 'Օֆֆլան',
      registrTitle: 'Գրանցվել',
    },
    {
      img: '../../../assets/kisspng-study-skills-learning-course-student-training-5b9ba929b7fe19 1.png',
      title: 'Խմբակային',
      registrTitle: 'Գրանցվել',
    },
    {
      img: '../../../assets/kisspng-stock-photography-student-education-college-e-lear-english-institute-english-institute-5cf871db1e9669 1.png',
      title: 'Անհատական',
      registrTitle: 'Գրանցվել',
    },
    {
      img: '../../../assets/photoscape-5ba37dc764fd95 1.png',
      title: 'Ինտենսիվ',
      registrTitle: 'Գրանցվել',
    },

  ]
  durationList = [
    {
      title: '6',
      time: 'օր'
    },
    {
      title: '3',
      time: 'ժամ'
    },
    {
      title: '12',
      time: 'րոպե'
    },
    {
      title: '40',
      time: 'վրկ'
    },
  ]
  reviewsList = [
    {
      userStar: [
        {
          studentStart: '../../../assets/Group 1307.png',
        }
      ],
      img: '../../../assets/Frame 372.png',
      studentName: 'Եվա Բաղդասարյան',
      studentPostion: 'Ուսանող',
     
      describtion: ' Շատ շնորհակալ եմ գիտելիքների և օգնության համար։ Խորհուրդ եմ տալիս անպայման փորձել սովորել ծրագրավորում և երբեք չհանձնվել ` ինչ էլ, որ պատահի։ ',
    },
    {
      img: '../../../assets/Frame 372 (1).png',
      studentName: 'Արամ Արամյան',
      studentPostion: 'Ուսանող',
      userStar: [
        {
          studentStart: '../../../assets/Group 1307.png',
        }
      ],
      describtion: ' Շատ շնորհակալ եմ գիտելիքների և օգնության համար։ Խորհուրդ եմ տալիս անպայման փորձել սովորել ծրագրավորում և երբեք չհանձնվել ` ինչ էլ, որ պատահի։ ',
    },
    {
      img: '../../../assets/Frame 372 (2).png',
      studentName: 'Անի Հարոյան',
      studentPostion: 'Պրակտիկանտ',
      userStar: [
        {
          studentStart: '../../../assets/Group 1307.png',
        }
      ],
      describtion: ' Շատ շնորհակալ եմ գիտելիքների և օգնության համար։ Խորհուրդ եմ տալիս անպայման փորձել սովորել ծրագրավորում և երբեք չհանձնվել ` ինչ էլ, որ պատահի։ ',
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
