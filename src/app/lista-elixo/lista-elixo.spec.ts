import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListaElixo } from './lista-elixo';

describe('ListaElixo', () => {
  let component: ListaElixo;
  let fixture: ComponentFixture<ListaElixo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaElixo],
    }).compileComponents();

    fixture = TestBed.createComponent(ListaElixo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
