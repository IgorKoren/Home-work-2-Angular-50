import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorksHederComponent } from './works-heder.component';

describe('WorksHederComponent', () => {
  let component: WorksHederComponent;
  let fixture: ComponentFixture<WorksHederComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorksHederComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorksHederComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
