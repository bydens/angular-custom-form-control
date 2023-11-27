import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // permissionView = '12';
  permissionView = undefined;
  permissionEdit = '34';
  permissionList = ['34'];

  myForm = this.fb.group({
    groupName: this.fb.control(''),
    permissionList: this.fb.control(this.permissionList),
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit() {}

  sendForm() {
    console.log(this.myForm.value);
  }
}
