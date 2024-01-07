import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})


export class ContactComponent {

  firstname = new FormControl('', Validators.required);

constructor(private router: Router){}
 

nav(){
this.router.navigate(['/admin']);
  }
}
