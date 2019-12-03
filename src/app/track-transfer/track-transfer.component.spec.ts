import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackTransferComponent } from './track-transfer.component';

describe('TrackTransferComponent', () => {
  let component: TrackTransferComponent;
  let fixture: ComponentFixture<TrackTransferComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrackTransferComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackTransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
