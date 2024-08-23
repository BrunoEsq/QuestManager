import { Component } from '@angular/core';
import { QuestContentComponent } from "../quest-content/quest-content.component";
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-create-quest',
  standalone: true,
  imports: [QuestContentComponent, CommonModule],
  templateUrl: './create-quest.component.html',
  styleUrls: ['./create-quest.component.css'] // Cambié styleUrl a styleUrls (es plural)
})
export class CreateQuestComponent {
  showquestcomponent: boolean = true;

  createQuest() {
    this.showquestcomponent = false;
    console.log('showquestcomponent:', this.showquestcomponent);
  }
}
