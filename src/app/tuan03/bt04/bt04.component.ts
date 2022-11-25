import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bt04',
  templateUrl: './bt04.component.html',
  styleUrls: ['./bt04.component.css']
})
export class Bt04Component implements OnInit {
  public listNav: any[] = [
    { id: 'tab-1', title: 'Tin 1' },
    { id: 'tab-2', title: 'Tin 2' },
    { id: 'tab-3', title: 'Tin 3' },
    { id: 'tab-4', title: 'Tin 4' },
    { id: 'tab-5', title: 'Tin 5' },
  ]

  public listContent: any[] = [
    { id: 'tab-1', content: 'Nội dung tin 1', value: 1, aria: 'tab1' },
    { id: 'tab-2', content: 'Nội dung tin 2', value: 2, aria: 'tab2' },
    { id: 'tab-3', content: 'Nội dung tin 3', value: 3, aria: 'tab3' },
    { id: 'tab-4', content: 'Nội dung tin 4', value: 4, aria: 'tab4' },
    { id: 'tab-5', content: 'Nội dung tin 5', value: 5, aria: 'tab5' },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
