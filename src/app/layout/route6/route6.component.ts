import { Component, HostListener, OnInit } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'app-route6',
  templateUrl: './route6.component.html',
  styleUrls: ['./route6.component.css'],
})
export class Route6Component implements OnInit {
  container: number[] = [];
  loader: boolean = false;
  constructor() {}

  ngOnInit(): void {
    this.pushDataInConatainer(100);
  }

  listenClick(event: any) {
    if (event?.target?.tagName?.toLowerCase() === 'button') {
      alert(`Button in Card ${event.target.value} clicked`);
    }
  }

  private debouncedOnScroll = _.debounce(() => this.onScrollDown(), 1500, {});

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    if (
      window.innerHeight + window.scrollY >=
      document.documentElement.offsetHeight
    ) {
      this.loader = true;
      this.debouncedOnScroll();
    }
  }

  private onScrollDown() {
    this.loader = false;
    this.pushDataInConatainer(100);
  }

  pushDataInConatainer(count: number = 100): void {
    for (let i = 0; i < count; i++) {
      this.container.push(this.container.length + 1);
    }
  }
}
