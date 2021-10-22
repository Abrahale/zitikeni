import { Component, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { CountDownModel } from 'src/app/models/count-down';

@Component({
  selector: 'app-count-down',
  templateUrl: './count-down.component.html',
  styleUrls: ['./count-down.component.scss']
})
export class CountDownComponent implements OnInit, OnDestroy {
  countDown = new CountDownModel();
  counter: any;
  constructor() { }

  ngOnInit(): void {
    this.counter = setInterval(() =>
      this.countDownTimer(), 1000);
  }



  countDownTimer(date = new Date(2021, 12, 17)) {

    var milisec_diff = new Date(date).getTime() - new Date().getTime();

    if (milisec_diff <= 0) {
      this.countDown = new CountDownModel();
    }

    var days = Math.floor(milisec_diff / 1000 / 60 / (60 * 24));
    var date_diff = new Date(milisec_diff);
    var day_string = (days) ? this.twoDigit(days) + "" : "";
    this.countDown = new CountDownModel(
      {
        days: day_string,
        hours: this.twoDigit(date_diff.getUTCHours()),
        minutes: this.twoDigit(date_diff.getUTCMinutes()),
        seconds: this.twoDigit(date_diff.getUTCSeconds())
      }
    );

  }


  twoDigit(number: number) {
    return number > 9 ? "" + number : "0" + number;
  }

  stopTimer() {
    clearInterval(this.counter);
    this.counter = undefined;
  }
  ngOnDestroy() {
    this.stopTimer();
  }
}