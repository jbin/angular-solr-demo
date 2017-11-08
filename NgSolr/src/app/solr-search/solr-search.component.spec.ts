import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolrSearchComponent } from './solr-search.component';

describe('SolrSearchComponent', () => {
  let component: SolrSearchComponent;
  let fixture: ComponentFixture<SolrSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolrSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolrSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
