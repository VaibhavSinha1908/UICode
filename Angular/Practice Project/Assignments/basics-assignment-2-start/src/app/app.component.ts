import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userName ='';

  isButtonDiabled(){
      if(this.userName==="")
      return true;
      else
      return false;

  }

  onButtonClick()
  {
   console.log('inside button click event.');
    if(this.userName!='')
    {
      console.log('inside if statement.');
      this.userName='';
    }
  }
}
