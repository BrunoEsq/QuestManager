import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CookieService {
  name_list: string[] = [];
  description_list: string[] = [];
  done_list: number[] = [];
  name: string = "";
  description: string = "";
  done: boolean = false;

  constructor() { }

  ngAfterViewInit() {
    this.name_list = this.getCookie('name') ? this.getCookie('name').split('|') : [];
    this.description_list = this.getCookie('description') ? this.getCookie('description').split('|') : [];
    

  }

  getCookie(cname: string): string {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i].trim();
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

  setCookie(cname: string, cvalue: string, exdays: number) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    const expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }

  addQuest(name: string, description: string, done:number) {
    this.name_list.push(name);
    this.description_list.push(description);
    this.done_list.push(done);

    this.setCookie('name', this.name_list.join('|'), 365);
    this.setCookie('description', this.description_list.join('|'), 365);
    this.setCookie('done', this.done_list.join('|'), 365);
  }


  removeQuest(index: number) {
    this.name_list.splice(index, 1);
    this.description_list.splice(index, 1);
    this.done_list.splice(index, 1);

    this.setCookie('name', this.name_list.join('|'), 365);
    this.setCookie('description', this.description_list.join('|'), 365);
    this.setCookie('done', this.done_list.join('|'), 365);
  }

  doQuest(index: number){
    this.done_list[index] = 1;
    this.setCookie('done', this.done_list.join('|'), 365);
  }
}
