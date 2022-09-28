import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-about-us-page',
  templateUrl: './about-us-page.component.html',
  styleUrls: ['./about-us-page.component.scss']
})
export class AboutUsPageComponent implements OnInit {
  studyList = [
    {
      img:'../../../assets/htjthj.png',
      studyName:'Մովսես մովսեսյան',
      studyDescib:'Եկեք հերթով ծանոթանանք մեր հաջողակ ուսանողների պատմության հետՄովսեսը արդեն հաջողությաբ ավարտել է Ծրագրավորման հիմունքներ դասընթացը և պատմում է, որ ճիշտ է կան բազմաթիվ դժվարություններ, բայց պետք է համառ լինել ու գնալ առաջ, պետք է չկոտրվել ու կիսատ չթողնել ուսումը։Հիմա Մովսեսը անցնում է պրակտիկա Գյումրիում  լավագույն IT գրասենյակներից մեկում՝ BrainFors-ում։Մաղթում եմ Մովսեսին նորանոր հաջողություններ։'
    }
    
  ]
  
  constructor() { }

  ngOnInit(): void {
  }

}
