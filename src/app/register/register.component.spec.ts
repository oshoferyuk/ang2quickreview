import {TestBed, async, ComponentFixture} from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { RegisterComponent } from './register.component';

describe('RegisterComponent', () => {
  let de: DebugElement;
  let comp: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;
  let el: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [
        RegisterComponent
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(RegisterComponent);
    comp = fixture.componentInstance;
  }));

   it('should create the component', async(() => {
      // const fixture = TestBed.createComponent(RegisterComponent);
      const registerCmp = fixture.debugElement.componentInstance;
      expect(registerCmp).toBeTruthy();
   }));

   it(`has username input and it is required`, async(() => {
     // const fixture = TestBed.createComponent(RegisterComponent);
     // const registerCmp = fixture.debugElement.componentInstance;
     de = fixture.debugElement.query(By.css('#username'));
     expect(de.attributes.hasOwnProperty('required')).toBeTruthy();
   }));

    it('changes answer', async() => {
      comp.answer = 'QWERTYUIO';

      fixture.detectChanges();
      // de = fixture.debugElement.query(By.css('[name="questionAnswer"]'));
      el = fixture.debugElement.nativeElement;

      expect(el.querySelector('[name="questionAnswer"]').outerHTML).toContain(comp.answer);
      expect(el.querySelector('#reply').textContent).toContain(comp.answer);

    });

    it('form should not be valid with wrong email ', async(() => {
      fixture.detectChanges();
      const form = comp.registerForm;
      console.log('form');
      console.log(form.valid);
      const email = fixture.debugElement.query(By.css('#email'));
      console.log(email);

      email.nativeElement.value = 'bob';
      email.nativeElement.dispatchEvent(new Event('input'));
      fixture.detectChanges();

      console.log(email.nativeElement.value);

      console.log('form is valid ', form.valid);

    }));

});
