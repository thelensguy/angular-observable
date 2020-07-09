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
        if (count === 5) {
          observer.complete();
        }
        if (count > 3) {
          observer.error(new Error("Count is greater 3!"));
        }
        count++;
      }, 1000);
    });
    this.firstObserSubscription = customIntervalObersvable.subscribe(
      (data) => {
        console.log(data);
      },
      (error) => {
        console.log(error);
        alert(error.message);
      },
      () => {
        console.log("Completed!");
      }
    );
  }

  ngOnDestroy() {
    this.firstObserSubscription.unsubscribe();
  }
}
