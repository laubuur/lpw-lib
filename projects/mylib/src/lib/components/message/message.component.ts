import { Component, Input, signal } from '@angular/core';
import { Severity } from '../types/severity.type';

@Component({
  selector: 'lib-message',
  standalone: true,
  imports: [],
  templateUrl: './message.component.html',
  styleUrl: './message.component.scss'
})
export class MessageComponent {
  @Input() value = '';
  @Input() severity: Severity = 'info';
  @Input() closable: boolean = false;

  showed = signal(true);
}

