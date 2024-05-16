import { Component } from '@angular/core';
import { PoContainerModule } from '@po-ui/ng-components';

@Component({
  selector: 'app-container',
  standalone: true,
  imports: [PoContainerModule ],
  templateUrl: './container.component.html',
  styleUrl: './container.component.css'
})
export class ContainerComponent {
  
}
