import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MessageComponent, Severity, TestComponent, ToastComponent, ToastService } from 'mylib';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TestComponent, MessageComponent, ToastComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  toastService = inject(ToastService);

  title = 'testapp';

  addToast(severity: Severity = "info", duration: number | "sticky" = 5000) {
    this.toastService.addToast({
      summary: '',
      message: 'ceci est un test',
      severity,
      duration
    });
  }
}
