import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';

@Injectable()
export class MyService {
  // Observable string sources
  private myAnnouncedSource = new Subject<string>();

  // Observable string streams
  myAnnounced$ = this.myAnnouncedSource.asObservable();

  // Service message commands
  announceItem(item: string) {
    this.myAnnouncedSource.next(item);
  }

}