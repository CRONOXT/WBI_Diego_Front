import { EventEmitter, Injectable, Output } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
//NO SE USA, PERO ESTA CREADO PARA FUTURAS IMPLEMENTACIONES 
export class HelperService {
  message!: string;
  private sendMessageSubject = new Subject<string>();
  sendMessageObservable = this.sendMessageSubject.asObservable();
  constructor() { }
  sendMassage(message: string) {
    this.message = message;
    this.sendMessageSubject.next(message);
  }
}
