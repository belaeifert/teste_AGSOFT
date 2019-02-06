import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QtdMessagesComponent } from './qtd-messages.component';

describe('QtdMessagesComponent', () => {
  let component: QtdMessagesComponent;
  let fixture: ComponentFixture<QtdMessagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QtdMessagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QtdMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
