import { Component } from '@angular/core';
import { Observable, Subject, BehaviorSubject, ReplaySubject,AsyncSubject } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'frontend';
  ngOnInit() {
    const subject = new AsyncSubject<number>()

    subject.subscribe((x) => console.log('x', x))
    subject.next(3)
    subject.next(2)
    subject.next(1)
    subject.subscribe((y) => console.log('y', y))
    // subject.next(4)

    subject.complete()

  }
}
