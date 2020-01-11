import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PackagemComponent } from './packagem.component';

describe('PackagemComponent', () => {
  let component: PackagemComponent;
  let fixture: ComponentFixture<PackagemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PackagemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PackagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
