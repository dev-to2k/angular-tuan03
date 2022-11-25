import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  public listId: number[] = [1, 2, 3, 4, 5, 6]
  constructor() { }

  ngOnInit(): void {
  }

}
