import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  width
  constructor() { }

  ngOnInit() {
  }

  public increase() : void {
    this.width+=10
  }

  public decrease():void{
    this.width-=10


  }
public reset():void{
    this.width=250

}
}
