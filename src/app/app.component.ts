import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="app">
      <h1 [innerText]="message.length ? message : 'Nothing here =D'" (click)="handleClick($event)"></h1>
      <h1>{{ newMessage }}</h1>
      <input [value]="message" (input)="handleInput($event)">
    </div>
  `,
  styles: [
    `
      .app {
        margin-top: 50px;
        font-size: 22px;
        color: #fff;
        text-align: center;
      }
    `,
  ],
})
export class AppComponent implements OnInit {


  message!: string;
  message2: string;
  newMessage!: string;


  constructor() {
    this.message2 = "Enric message2";
  }

  ngOnInit() {
    console.log('Hello World!');
    this.message = "Hello World - Enric"
  }

  handleInput(event: Event) {
    const { value } = event.target as HTMLInputElement
    console.log("Input clicked [" + value + "]");
    console.log("Input clicked", (event.target as HTMLInputElement).value, this, event);
    this.newMessage = value;
  }

  handleClick(event: Event) {
    console.log("Clicked", this, event);
  }
}
