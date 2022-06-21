import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  name:Subject<string> = new Subject();

        broadcastLoginChange(text:string) {
            this.name.next(text);
        }
  constructor() { }
}
