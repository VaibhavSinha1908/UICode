import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
 //selector: '[app-server]', 
  //selector: '.app-server',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  serverName =' ';
  allowToAddServers = false;
  serverCreationStatus='No server was created';
  serverCreated = false;
  servers = ['Test Server 1', 'Test Server 2'];

  constructor() { 
      setTimeout(()=>{
          this.allowToAddServers = true;
      },2000)

      this.serverCreationStatus='No server was created';
  }

  ngOnInit() {
  }

  onCreateServer(){
    this.serverCreated=true;
    this.servers.push(this.serverName);
    this.serverCreationStatus="1 Server was created! The name is:"+this.serverName;

  }
  onUpdateServerNamr(event: Event){
    this.serverName=(<HTMLInputElement> event.target).value;
  }
}
