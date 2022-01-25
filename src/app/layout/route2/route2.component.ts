import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-route2',
  templateUrl: './route2.component.html',
  styleUrls: ['./route2.component.css'],
})
export class Route2Component implements OnInit {
  dataArray: any[] = [];
  filteredArr: any[] = [];
  type: string = 'grid-view';
  constructor() {}

  ngOnInit(): void {
    this.dataArray = [
      {
        id: 1,
        name: 'item1',
        price: 1000,
        description: 'Description of item1',
      },
      {
        id: 2,
        name: 'item2',
        price: 2000,
        description: 'Description of item2',
      },
      {
        id: 3,
        name: 'item3',
        price: 3000,
        description: 'Description of item3',
      },
      {
        id: 4,
        name: 'item4',
        price: 4000,
        description: 'Description of item4',
      },
      {
        id: 5,
        name: 'item5',
        price: 5000,
        description: 'Description of item5',
      },
      {
        id: 6,
        name: 'item6',
        price: 6000,
        description: 'Description of item6',
      },
      {
        id: 7,
        name: 'item7',
        price: 7000,
        description: 'Description of item7',
      },
      {
        id: 8,
        name: 'item8',
        price: 8000,
        description: 'Description of item8',
      },
      {
        id: 9,
        name: 'item9',
        price: 9000,
        description: 'Description of item9',
      },
      {
        id: 10,
        name: 'item10',
        price: 10000,
        description: 'Description of item10',
      },
      {
        id: 11,
        name: 'item11',
        price: 11000,
        description: 'Description of item11',
      },
      {
        id: 12,
        name: 'item12',
        price: 12000,
        description: 'Description of item12',
      },
      {
        id: 13,
        name: 'item13',
        price: 13000,
        description: 'Description of item13',
      },
      {
        id: 14,
        name: 'item14',
        price: 14000,
        description: 'Description of item14',
      },
      {
        id: 15,
        name: 'item15',
        price: 15000,
        description: 'Description of item15',
      },
      {
        id: 16,
        name: 'item16',
        price: 16000,
        description: 'Description of item16',
      },
      {
        id: 17,
        name: 'item17',
        price: 17000,
        description: 'Description of item17',
      },
      {
        id: 18,
        name: 'item18',
        price: 18000,
        description: 'Description of item18',
      },
      {
        id: 19,
        name: 'item19',
        price: 19000,
        description: 'Description of item19',
      },
      {
        id: 20,
        name: 'item20',
        price: 20000,
        description: 'Description of item20',
      },
      {
        id: 21,
        name: 'item21',
        price: 21000,
        description: 'Description of item21',
      },
      {
        id: 22,
        name: 'item22',
        price: 22000,
        description: 'Description of item22',
      },
      {
        id: 23,
        name: 'item23',
        price: 23000,
        description: 'Description of item23',
      },
      {
        id: 24,
        name: 'item24',
        price: 24000,
        description: 'Description of item24',
      },
      {
        id: 25,
        name: 'item25',
        price: 25000,
        description: 'Description of item25',
      },
      {
        id: 26,
        name: 'item26',
        price: 26000,
        description: 'Description of item26',
      },
      {
        id: 27,
        name: 'item27',
        price: 27000,
        description: 'Description of item27',
      },
      {
        id: 28,
        name: 'item28',
        price: 28000,
        description: 'Description of item28',
      },
      {
        id: 29,
        name: 'item29',
        price: 29000,
        description: 'Description of item29',
      },
      {
        id: 30,
        name: 'item30',
        price: 30000,
        description: 'Description of item30',
      },
      {
        id: 31,
        name: 'item31',
        price: 31000,
        description: 'Description of item31',
      },
      {
        id: 32,
        name: 'item32',
        price: 32000,
        description: 'Description of item32',
      },
      {
        id: 33,
        name: 'item33',
        price: 33000,
        description: 'Description of item33',
      },
      {
        id: 34,
        name: 'item34',
        price: 34000,
        description: 'Description of item34',
      },
      {
        id: 35,
        name: 'item35',
        price: 35000,
        description: 'Description of item35',
      },
      {
        id: 36,
        name: 'item36',
        price: 36000,
        description: 'Description of item36',
      },
      {
        id: 37,
        name: 'item37',
        price: 37000,
        description: 'Description of item37',
      },
      {
        id: 38,
        name: 'item38',
        price: 38000,
        description: 'Description of item38',
      },
      {
        id: 39,
        name: 'item39',
        price: 39000,
        description: 'Description of item39',
      },
      {
        id: 40,
        name: 'item40',
        price: 40000,
        description: 'Description of item40',
      },
    ];
    this.filteredArr = [...this.dataArray];
  }

  fliterByPrice(value: string): any {
    switch (value) {
      case 'all':
        return this.dataArray;
      case 'LTE_5K':
        return this.dataArray.filter(
          (val) => val.price > 0 && val.price <= 5000
        );
      case '5K_10K':
        return this.dataArray.filter(
          (val) => val.price > 5000 && val.price <= 10000
        );
      case '10K_20K':
        return this.dataArray.filter(
          (val) => val.price > 10000 && val.price <= 20000
        );
      case '20K_35K':
        return this.dataArray.filter(
          (val) => val.price > 20000 && val.price <= 35000
        );
      case 'MT_35K':
        return this.dataArray.filter((val) => val.price > 35000);
    }
  }

  selectPriceInterval(event: any): any {
    this.filteredArr = this.fliterByPrice(event.target.value);
  }
}
