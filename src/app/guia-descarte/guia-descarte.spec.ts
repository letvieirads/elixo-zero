import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GuiaDescarte } from './guia-descarte';

describe('GuiaDescarte', () => {
  let component: GuiaDescarte;
  let fixture: ComponentFixture<GuiaDescarte>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GuiaDescarte],
    }).compileComponents();

    fixture = TestBed.createComponent(GuiaDescarte);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
