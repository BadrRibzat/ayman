import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-language-switcher',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './language-switcher.component.html',
  styleUrl: './language-switcher.component.scss'
})
export class LanguageSwitcherComponent {
  constructor(private translate: TranslateService) {}

  switchLanguage(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    if (selectElement) {
      this.translate.use(selectElement.value);
    }
  }
}
