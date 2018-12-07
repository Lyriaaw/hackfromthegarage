import { Injectable } from '@angular/core';
import * as socketIo from 'socket.io-client';
import {Message} from '../models/message';
import {Observable} from 'rxjs/Observable';

const SERVER_URL = '127.0.0.1:3000';

@Injectable()
export class WebsocketService {

  private socket;



  public initSocket(): void {
    this.socket = socketIo(SERVER_URL);
  }

  public onMessage(): Observable<Message> {
    return new Observable<Message>(observer => {
      this.socket.on('message', (data: Message) => observer.next(data));
    });
  }


  public onAny(): Observable<any> {
    return new Observable<any>(observer => {
      this.socket.on('message', (data: any) => observer.next(data));
    });
  }



  public sendMessage(message: Message): void {
    this.socket.emit('message', message);
  }


  constructor() { }



}
