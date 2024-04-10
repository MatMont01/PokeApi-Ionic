import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PokedexListPage } from './pokedex-list.page';

describe('PokedexListPage', () => {
  let component: PokedexListPage;
  let fixture: ComponentFixture<PokedexListPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PokedexListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
