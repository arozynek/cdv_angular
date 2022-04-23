import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
})
export class CounterComponent implements OnInit {
  value = 123;
  text = 'ala ma kota';

  increment() {
    this.value++;
  }

  decrement() {
    this.value--;
  }

  constructor() {}

  ngOnInit(): void {}
}
