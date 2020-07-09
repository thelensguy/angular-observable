import { Component, OnInit, OnDestroy } from "@angular/core";

import { interval, Subscription, Observable } from "rxjs";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit, OnDestroy {
  private firstObserSubscription: Subscription;
  constructor() {}

  ngOnInit() {
    // this.firstObserSubscription = interval(1000).subscribe((count) => {
    //   console.log(count);
    // });
    const customIntervalObersvable = Observable.create((observer) => {
      let count = 0;
      setInterval(() => {
        observer.next(count);
        count++;
      }, 1000);
    });
    this.firstObserSubscription = customIntervalObersvable.subscribe((data) => {
      console.log(data);
    });
  }

  ngOnDestroy() {
    this.firstObserSubscription.unsubscribe();
  }
}
