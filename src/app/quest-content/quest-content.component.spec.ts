import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestContentComponent } from './quest-content.component';

describe('QuestContentComponent', () => {
  let component: QuestContentComponent;
  let fixture: ComponentFixture<QuestContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuestContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuestContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
