import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LofiComponent } from './lofi.component';

describe('LofiComponent', () => {
  let component: LofiComponent;
  let fixture: ComponentFixture<LofiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LofiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LofiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
