import { Component, Input } from '@angular/core';
import { Observable, delay, of } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})


export class DashboardComponent {


fruit:Frutes=Frutes.orange;

@Input() msg = '';
}

export enum Frutes{
  orange = 'Orange',
  mango = 'Mango',
  banana = 'Banana'
}

