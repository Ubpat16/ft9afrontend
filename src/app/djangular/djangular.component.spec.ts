import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DjangularComponent } from './djangular.component';

describe('DjangularComponent', () => {
  let component: DjangularComponent;
  let fixture: ComponentFixture<DjangularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DjangularComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DjangularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
