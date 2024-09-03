import { Component, AfterViewInit  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CookieService } from '../cookie.service';

@Component({
  selector: 'app-get-cookie',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './get-cookie.component.html',
  styleUrl: './get-cookie.component.css'
})
export class GetCookieComponent implements AfterViewInit {

  constructor(public cookieService: CookieService) {}

  ngAfterViewInit() {
    this.cookieService.ngAfterViewInit();
  }

  removeQuest(index: number) {
    this.cookieService.removeQuest(index);
  }

  doQuest(index:number){
    this.cookieService.doQuest(index);
  }
}