import { Component, Input, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})

export class LoaderComponent implements OnInit{
   router = inject(Router);
  ngOnInit(): void {
   setTimeout(()=>{
   
    this.router.navigate(['/dashboard']);
   }, 5000);
  }


}
