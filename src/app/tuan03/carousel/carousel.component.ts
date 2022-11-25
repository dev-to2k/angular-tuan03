import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  public listId: number[] = [1, 2, 3, 4, 5, 6]
  constructor() { }

  ngOnInit(): void {
  }

}
