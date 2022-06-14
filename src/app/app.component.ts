import { Component, OnInit, VERSION } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { ReplayControlValueChanges } from './replay-control-value-changes';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  public bs: Subject<string> = new Subject();
  public o: Observable<string> = this.bs.asObservable();
  public rcv: ReplayControlValueChanges<string> = new ReplayControlValueChanges(bs);

  constructor() {}

  ngOnInit() {
    this.bs.next('EINS');
    this.rcv.subscribe((value) => {
      console.log(value);
    });
    this.bs.next('ZWEI');
  }
}
