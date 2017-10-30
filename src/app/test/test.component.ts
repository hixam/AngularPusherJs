import { Component, OnInit } from '@angular/core';
import * as pusher from '../../../node_modules/PUSHER/pusher';
import {User} from "../models/User";

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})

export class TestComponent implements OnInit {
  objeto;
  data;
  channel;
  user: User;
  constructor() {}

  method() {

    this.data = pusher.listenServer();
    if (this.data != null) {
      this.channel = this.data.bind('my-event', function (data) {
        if (data != null) {
          this.user = new User();
          this.user.name = data.name;
          alert(data.message);
        }
      });
    }

  }

  ngOnInit() {
  }

}
