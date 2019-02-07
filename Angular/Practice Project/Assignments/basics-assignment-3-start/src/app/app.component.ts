import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  counter :number= 0;
  logCounter:any[] = [];
  showorhide = true;

  onButtonClick(){
    this.counter = this.counter + 1;
    this.logCounter.push(new Date());
    this.showorhide = !this.showorhide;
    console.log(this.logCounter);
  }
  
  getColor()
  {
    console.log('Value of Counter is:'+this.counter);
    if(this.counter > 4)
    {
      console.log('printing blue color for counter value:'+ this.counter);
      return 'blue';
    }
    else
      return 'transparent';
  }
}
