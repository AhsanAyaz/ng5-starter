import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {
  counterValue = 0;
  countSteps = 1;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(parameters => {
      console.log(parameters);
    });
  }

  decrement() {
    this.counterValue = this.counterValue - this.countSteps;
  }

  increment() {
    this.counterValue = this.counterValue + this.countSteps;
  }

}
