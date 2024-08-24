import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-quest-content',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './quest-content.component.html',
  styleUrl: './quest-content.component.css'
})
export class QuestContentComponent {
    name = "";
    finished = false;
    description = "";

  constructor(){
    this.finished = false;
  }

  onSubmit() {

    this.setCookie('name', this.name, 7);
    this.setCookie('description', this.description, 7);

    if (this.getCookie('name') != '' && this.getCookie('description') != '') {
      this.name = this.getCookie('name');
      this.description = this.getCookie('description');
    }
  }

  setCookie(cname: string, cvalue: string, exdays: number) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }

  getCookie(cname: string) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }
  
}
