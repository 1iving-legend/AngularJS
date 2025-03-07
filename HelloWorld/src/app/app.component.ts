import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'HelloWorld';
  imgUrl = "../brlogo.jpg";
  url="https://www.bridgelabz.com/";



  ngOnInit():void{

    this.title="Hello From BridgeLabz";
  }

  onClick(event: MouseEvent): void {
    console.log("Mouse was clicked", event);
    window.open(this.url, "_blank");
  }
}
