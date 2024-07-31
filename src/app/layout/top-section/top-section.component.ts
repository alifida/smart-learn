import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { NzLayoutModule } from 'ng-zorro-antd/layout';

@Component({
  selector: 'app-top-section',
  standalone: true,
  imports: [HeaderComponent, NzLayoutModule],
  templateUrl: './top-section.component.html',
  styleUrl: './top-section.component.css'
})
export class TopSectionComponent {

}
