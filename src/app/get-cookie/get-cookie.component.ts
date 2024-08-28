import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-get-cookie',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './get-cookie.component.html',
  styleUrl: './get-cookie.component.css'
})
export class GetCookieComponent {
  id: number = 0;
  name_list: string[] = [];
  description_list: string[] = [];
  name: string = "";
  description: string = "";

  constructor(){
    this.id++;
    this.name_list = this.getCookie('name').split('|');
    this.description_list = this.getCookie('description').split('|');
  }

  ngAfterViewInit() {
    this.name_list = this.getCookie('name').split('|');
    this.description_list = this.getCookie('description').split('|');
    
  }

  // add_questArray(cookieName: string, cookieDescription: string) {
  //   this.name_list = cookieName.split("|");
  //   this.description_list = cookieDescription.split("|");
  //   for (let i = 0; i < this.name_list.length; i++) {
  //     console.log(this.name_list[i]);
  //   }
  // }

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
