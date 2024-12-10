import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { provideHttpClient, withFetch, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-standalone-component', 
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
        ],
  templateUrl: './standalone-component.component.html',
  styleUrls: ['./standalone-component.component.css']
})
export class StandaloneComponentComponent {}
