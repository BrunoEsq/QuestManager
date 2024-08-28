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
  cookie_name: string = "";
  cookie_description: string = "";
  name_list: string[] = [];
  description_list: string[] = [];
  constructor() {
    this.finished = false;
  }
  
  onSubmit() {

    const cookieName = this.getCookie('name');
    const cookieDescription = this.getCookie('description');

    if (cookieName === '' && cookieDescription === '') {
      this.setCookie('name', this.name, 7);
      this.setCookie('description', this.description, 7);
      this.add_questArray(this.name, this.description);

    } else {
      this.cookie_name = (this.getCookie('name') + '|' + this.name);
      this.cookie_description = (this.getCookie('description') + '|' + this.description);
      this.setCookie('name', this.cookie_name, 7);
      this.setCookie('description', this.cookie_description, 7);
      this.add_questArray(this.cookie_name, this.cookie_description);
    }
  }
    

  add_questArray(cookieName: string, cookieDescription: string) {
    this.name_list = cookieName.split("|");
    this.description_list = cookieDescription.split("|");
    for( let i = 0; i< this.name_list.length; i++){
        console.log(this.name_list[i]);
    }
  }


  // console.warn(this.getCookie('name'));

  //   const cookieName = this.getCookie('name');
  //   const cookieDescription = this.getCookie('description');

  //   // Verifica si ambas cookies están vacías
  //   if (cookieName === '' && cookieDescription === '') {
  //     this.setCookie('name', this.name, 7);  // Establece la cookie 'name' con un tiempo de vida de 7 días
  //     this.setCookie('description', this.description, 7);  // Establece la cookie 'description' con un tiempo de vida de 7 días
  //   } else {
  //     // Si alguna de las cookies ya existe, concatenarlas correctamente
  //     this.cookie_name = (cookieName || '') + '|' + this.name;
  //     this.cookie_description = (cookieDescription || '') + '|' + this.description;

  //     // Establece las cookies concatenadas nuevamente
  //     this.setCookie('name', this.cookie_name, 7);
  //     this.setCookie('description', this.cookie_description, 7);
  //   }

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
