import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [CommonModule, FormsModule,RouterOutlet],
})
export class AppComponent {
  title = 'HelloWorld';
  imgUrl = "../brlogo.jpg";
  url="https://www.bridgelabz.com/";

  userName: string ='';

 updateUserName(event: Event) {
    this.userName = (event.target as HTMLInputElement).value;
  }

  ngOnInit():void{

    this.title="Hello From BridgeLabz";
  }

  onClick(event: MouseEvent): void {
    console.log("Mouse was clicked", event);
    
    // Using an anchor element to ensure the new tab opens
    const newTab = window.open(this.url, "_blank");
    if (newTab) {
      newTab.focus();
    } else {
      alert("Popup blocker is preventing a new tab from opening. Please allow pop-ups for this site.");
    }
  }
}
