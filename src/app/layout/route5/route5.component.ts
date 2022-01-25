import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-route5',
  templateUrl: './route5.component.html',
  styleUrls: ['./route5.component.css'],
})
export class Route5Component implements OnInit {
  constructor() {}
  dataArray: any[] = [];
  originalArr: any[] = [];
  field: string = '';
  prevField: string = '';
  order: number = 1;

  ngOnInit(): void {
    this.dataArray = [
      {
        name: 'nitin',
        class: 3,
        section: 'A',
        sub1: 98,
        sub2: 83,
        sub3: 75,
      },
      {
        name: 'Aman',
        class: 10,
        section: 'A',
        sub1: 78,
        sub2: 83,
        sub3: 75,
      },
      {
        name: 'Naveen',
        class: 3,
        section: 'B',
        sub1: 98,
        sub2: 43,
        sub3: 75,
      },
      {
        name: 'Akash',
        class: 2,
        section: 'A',
        sub1: 98,
        sub2: 83,
        sub3: 75,
      },
      {
        name: 'Prince',
        class: 9,
        section: 'C',
        sub1: 98,
        sub2: 83,
        sub3: 75,
      },
    ];
    this.originalArr = [...this.dataArray];
  }

  get headers() {
    return Object.keys(this.dataArray[0]);
  }

  tableSorting(key: any) {
    this.field = key;
    if (this.prevField != this.field) {
      this.order = 1;
    } else {
      this.order == 0
        ? (this.order = 1)
        : this.order == 1
        ? (this.order = -1)
        : this.order == -1
        ? (this.order = 0)
        : (this.order = 1);
    }
    this.prevField = this.field;
  }
}
