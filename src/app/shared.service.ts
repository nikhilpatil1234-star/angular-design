import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }
  private backgroundColorSubject = new BehaviorSubject<string>('');
  backgroundColor$ = this.backgroundColorSubject.asObservable();

  setBackgroundColor(color: string) {
    this.backgroundColorSubject.next(color);
  }
}
