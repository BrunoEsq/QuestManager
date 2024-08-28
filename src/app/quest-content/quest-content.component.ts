import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CookieService } from '../cookie.service';
@Component({
  selector: 'app-quest-content',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './quest-content.component.html',
  styleUrl: './quest-content.component.css'
})
export class QuestContentComponent {
  name: string = '';
  description: string = '';
  done: number = 0;
  constructor(private cookieService: CookieService) {}

  onSubmit() {
    // Añadir la nueva "quest" a la lista de quests
    this.cookieService.addQuest(this.name, this.description, this.done);

    // Limpiar el formulario si es necesario
    this.name = '';
    this.description = '';
  }
}
