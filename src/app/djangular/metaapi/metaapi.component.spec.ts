import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetaapiComponent } from './metaapi.component';

describe('MetaapiComponent', () => {
  let component: MetaapiComponent;
  let fixture: ComponentFixture<MetaapiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MetaapiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MetaapiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
