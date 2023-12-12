import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="app">
      <h1>{{ message.length ? message : "Nothing here =D"}}</h1>
      <h1 [innerText]="message.length ? message : 'Nothing here =D'"></h1>
      <input [value]="message">
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

  constructor() {
    this.message2 = "Enric message2";
  }

  ngOnInit() {
    console.log('Hello World!');
    this.message = "Hello World - Enric"
  }
}
