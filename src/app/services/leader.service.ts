import { Injectable } from '@angular/core';
import { Leader } from '../shared/leader';
import { LEADERS} from '../shared/leaders';

import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LeaderService {

  constructor() { }
  /*
  getLeaders(): Leader[] {
    return LEADERS;
  }
  getLeaders(): Promise<Leader[]>{
    return Promise.resolve(LEADERS);
  }
  getLeaders(): Promise<Leader[]>{
    return new Promise(resolve=> {
      setTimeout(() => resolve(LEADERS), 2000); // Simulate server latency with 2 second delay
  });
  */

  getLeaders(): Observable<Leader[]>{
    return of(LEADERS).pipe(delay(2000));
  }

  getLeader(id: string): Observable<Leader> {
      return of(LEADERS.filter((leader) => (leader.id === id))[0]).pipe(delay(2000));
  }

  getFeaturedLeader(): Observable<Leader> {
    return of(LEADERS.filter((leader) => leader.featured)[0]).pipe(delay(2000))
  }
}