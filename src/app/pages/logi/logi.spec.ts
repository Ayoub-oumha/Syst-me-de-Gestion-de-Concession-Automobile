import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Logi } from './logi';

describe('Logi', () => {
  let component: Logi;
  let fixture: ComponentFixture<Logi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Logi]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Logi);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
