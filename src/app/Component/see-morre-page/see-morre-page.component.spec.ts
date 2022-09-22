import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeeMorrePageComponent } from './see-morre-page.component';

describe('SeeMorrePageComponent', () => {
  let component: SeeMorrePageComponent;
  let fixture: ComponentFixture<SeeMorrePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeeMorrePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeeMorrePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
