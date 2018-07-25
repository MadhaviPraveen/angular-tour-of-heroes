import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeoroesComponent } from './heoroes.component';

describe('HeoroesComponent', () => {
  let component: HeoroesComponent;
  let fixture: ComponentFixture<HeoroesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeoroesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeoroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
