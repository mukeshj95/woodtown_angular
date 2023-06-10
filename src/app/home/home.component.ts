import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
 public name: string | undefined;
 public description: string | undefined;
 public imagePath: string | undefined;
  constructor() {
  }

  ngOnInit() {
  }

  interiors = [
    {
      image: "url('../../assets/images/interior-1.jpg')",
      title: 'Coffee table',
      detail: 'Furniture is something people are always looking for a bargain for.'
    },
    {
      image: "url('../../assets/images/interior-2.jpg')",
      title: 'Coffee table',
      detail: 'Furniture is something people are always looking for a bargain for.'
    },
    {
      image: "url('../../assets/images/interior-3.jpg')",
      title: 'Coffee table',
      detail: 'Furniture is something people are always looking for a bargain for.'
    }
  ];
  productsImages = [
    {
      title: 'Sofa Set',
      desc: 'The multi-density foam in the seat cushions reduces sagging due to prolonged use.',
      imagePath: [1].map( (i)=> `../../assets/images/product-sample-${i}.jpg`)
    },
    {
      title: 'TV Cabinet',
      desc: 'Vintage meets modern in the Eleanor TV cabinet, with a design inspired by an erstwhile era, and functionality that is every inch contemporary.',
      imagePath: [2].map( (i)=> `../../assets/images/product-sample-${i}.jpg`)
    },
    {
      title: 'Dining Tables',
      desc: 'Made of sheesham wood and brass\n' +
        'American walnut finish',
      imagePath: [3].map( (i)=> `../../assets/images/product-sample-${i}.jpg`)
    }
  ];
}
