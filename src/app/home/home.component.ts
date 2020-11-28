import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  postArr = [
    {
      id: 1,
      pname: 'Coronavirus vaccine deliveries to begin next week: Trump ',
      image: '../../assets/images/slide2.jpg',
      desc: 'this is a lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
    },
    {
      id: 2,
      pname: 'Argentina bids final farewell to favourite son Maradona',
      desc: 'this is a  lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
      image: '../../assets/images/slide1.jpg',
    },
    {
      id: 3,
      pname: 'Coronavirus vaccine deliveries to begin next week: Trump ',
      image: '../../assets/images/slide3.jpeg',
      desc: 'this is a lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
    },
    {
      id: 4,
      pname: 'Argentina bids final farewell to favourite son Maradona',
      desc: 'this is a  lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
      image: '../../assets/images/slide1.jpg',
    },
    
  ]
  constructor() { }
  currentDate = new Date();

  ngOnInit(): void {
  }

}
