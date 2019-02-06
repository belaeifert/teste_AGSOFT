import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SentCampaingsComponent } from './sent-campaings.component';

describe('SentCampaingsComponent', () => {
  let component: SentCampaingsComponent;
  let fixture: ComponentFixture<SentCampaingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SentCampaingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SentCampaingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
