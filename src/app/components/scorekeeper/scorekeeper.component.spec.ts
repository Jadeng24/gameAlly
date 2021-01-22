import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ScorekeeperComponent } from './scorekeeper.component';

describe('ScorekeeperComponent', () => {
  let component: ScorekeeperComponent;
  let fixture: ComponentFixture<ScorekeeperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScorekeeperComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ScorekeeperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
