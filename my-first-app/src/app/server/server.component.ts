import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrl: './server.component.css',
})
export class ServerComponent {
  // username: string = '';
  // allowReset: boolean = false;

  // reset() {
  //   this.username = '';
  // }

    allowNewServer: boolean = false;
    serverCreated: boolean = false;
    serverStatus:string = "no new server is created";
    serverName = ''

    constructor() {
      setTimeout(() => {
        this.allowNewServer = true;
      }, 3000);
    }

    createServer(){
      this.serverCreated=true
      this.serverStatus = "new server was created! Server name is " + this.serverName
    }

    onUpdateServername(event : Event){
        this.serverName=(<HTMLInputElement>event.target).value

    }
}
















