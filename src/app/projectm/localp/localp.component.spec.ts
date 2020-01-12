import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalpComponent } from './localp.component';

describe('LocalpComponent', () => {
  let component: LocalpComponent;
  let fixture: ComponentFixture<LocalpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocalpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
