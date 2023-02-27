import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {

  imageArray: any;
  speed: number = 1000
  constructor() { }

  ngOnInit(): void {
    this.imageArray = ['assets/images/download.jpg', 'assets/images/download1.jpg', 'assets/images/download2.jpg', 'assets/images/download4.jpg'];
  }

}
