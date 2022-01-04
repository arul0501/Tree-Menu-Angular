import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreeviewmenuComponent } from './treeviewmenu.component';

describe('TreeviewmenuComponent', () => {
  let component: TreeviewmenuComponent;
  let fixture: ComponentFixture<TreeviewmenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TreeviewmenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TreeviewmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
