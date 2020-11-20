import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageInfosComponent } from './page-infos.component';

describe('PageInfosComponent', () => {
  let component: PageInfosComponent;
  let fixture: ComponentFixture<PageInfosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageInfosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageInfosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
