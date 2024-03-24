import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TapleTask1Component } from './taple-task-1.component';

describe('TapleTask1Component', () => {
  let component: TapleTask1Component;
  let fixture: ComponentFixture<TapleTask1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TapleTask1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TapleTask1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
