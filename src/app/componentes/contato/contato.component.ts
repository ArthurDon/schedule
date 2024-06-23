import { Component, Input, input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PoButtonModule, PoDividerModule, PoFieldModule } from '@po-ui/ng-components';

@Component({
  selector: 'app-contato',
  standalone: true,
  imports: [PoButtonModule, PoDividerModule, PoFieldModule, FormsModule   ],
  templateUrl: './contato.component.html',
  styleUrl: './contato.component.css'
})
export class ContatoComponent {
  @Input() nome: string = ''
  @Input() telefone: string = ''
  inputValue: string = ''; // Propriedade para armazenar o valor do po-input
}
