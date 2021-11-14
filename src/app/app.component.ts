import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My App Calculator';

  public num1:any
  public num2:any
  public num3:any

  add(){
    this.num3=this.num1+this.num2;
  }
  sub(){
    this.num3=this.num1-this.num2;
  }
  multiply(){
    this.num3=this.num1*this.num2;
  }
  divide(){
    this.num3=this.num1/this.num2;
  }

}
