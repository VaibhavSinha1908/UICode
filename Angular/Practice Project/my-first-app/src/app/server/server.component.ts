import { Component } from '@angular/core';

//It is basically a class.
@Component({
selector:'app-server',
templateUrl:'./server.component.html',
styles : [`
.online {
    color: white
}
`]
})

export class ServerComponent{
serverId =10;
serverStatus = 'online';

constructor(){
    this.serverStatus= Math.random()>0.5? 'online': 'offline';

}


 getServerStatus() {
    //return 'offline';
    return this.serverStatus;
}

getColor(){

    return this.serverStatus==='online'? 'green' : 'red';
}
}
