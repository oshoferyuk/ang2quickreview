import { TestBed, async } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { RegisterComponent } from './register.component';

describe('RegisterComponent', () => {
  let de: DebugElement;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [
        RegisterComponent
      ],
    }).compileComponents();
  }));

   it('should create the component', async(() => {
      const fixture = TestBed.createComponent(RegisterComponent);
      const registerCmp = fixture.debugElement.componentInstance;
      expect(registerCmp).toBeTruthy();
   }));

   it(`has username input and it is required`, async(() => {
     const fixture = TestBed.createComponent(RegisterComponent);
     // const registerCmp = fixture.debugElement.componentInstance;
     de = fixture.debugElement.query(By.css('#username'));
     expect(de.attributes.hasOwnProperty('required')).toBeTruthy();
   }));

});
