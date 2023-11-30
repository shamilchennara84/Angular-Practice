import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrl: './server.component.css',
})
export class ServerComponent {
  allowNewServer: boolean = false;
  serverStatus:string = "no new server is created";
  serverName = ''

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 3000);
  }

  createServer(){
    this.serverStatus = "new server created"
  }

  onUpdateServername(event : Event){
      this.serverName=(<HTMLInputElement>event.target).value

  }
}
