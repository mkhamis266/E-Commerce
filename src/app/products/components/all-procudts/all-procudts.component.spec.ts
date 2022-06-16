import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllProcudtsComponent } from './all-procudts.component';

describe('AllProcudtsComponent', () => {
  let component: AllProcudtsComponent;
  let fixture: ComponentFixture<AllProcudtsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllProcudtsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllProcudtsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
