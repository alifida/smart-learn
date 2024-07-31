import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NzLayoutModule } from 'ng-zorro-antd/layout';

@Component({
  selector: 'app-middle-section',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet,NzLayoutModule,  ],
  templateUrl: './middle-section.component.html',
  styleUrl: './middle-section.component.css'
})
export class MiddleSectionComponent {

}
