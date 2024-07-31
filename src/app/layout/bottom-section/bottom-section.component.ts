import { Component } from '@angular/core';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-bottom-section',
  standalone: true,
  imports: [FooterComponent],
  templateUrl: './bottom-section.component.html',
  styleUrl: './bottom-section.component.css'
})
export class BottomSectionComponent {

}
