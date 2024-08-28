import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { CreateQuestComponent } from './create-quest/create-quest.component';
import { QuestContentComponent } from "./quest-content/quest-content.component";
import { GetCookieComponent } from './get-cookie/get-cookie.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, CreateQuestComponent, QuestContentComponent, QuestContentComponent,GetCookieComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'QuestManager';
  
}
