import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-app';

  constructor() {};

  ngOnInit() {};

  onCreatePost(postData: {classID: string; students: string}) {
    console.log(postData);
  }
}
