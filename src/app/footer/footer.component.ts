import { Component } from '@angular/core';
import { ProfileService } from '../services/menu.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
    
    constructor(private profileSerive: ProfileService) {}
}
