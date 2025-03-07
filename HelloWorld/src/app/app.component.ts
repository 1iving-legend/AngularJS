import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],  
  imports: [CommonModule, FormsModule, RouterOutlet],
})
export class AppComponent {
  title = 'HelloWorld';
  imgUrl = "../brlogo.jpg";
  url = "https://www.bridgelabz.com/";

  userName: string = '';
  errorMessage: string = '';

  ngOnInit(): void {
    this.title = "Hello From BridgeLabz";
  }

  updateUserName(event: Event) {
    const inputValue = (event.target as HTMLInputElement).value;
    const pattern = /^[A-Z][a-zA-Z]{2,}(\s)?([A-Z][a-zA-z]{2,})?$/; 

    if (pattern.test(inputValue)) {
      this.userName = inputValue;
      this.errorMessage = '';
    } else {
      this.userName = '';
      this.errorMessage = 'Invalid name! Start with a capital letter & min 3 letters.';
    }
  }

  onClick(event: MouseEvent): void {
    console.log("Mouse was clicked", event);

    const newTab = window.open(this.url, "_blank");
    if (newTab) {
      newTab.focus();
    } else {
      alert("Popup blocker is preventing a new tab from opening. Please allow pop-ups for this site.");
    }
  }
}
