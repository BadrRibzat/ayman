import { Component, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { LanguageSwitcherComponent } from './language-switcher/language-switcher.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, TranslateModule, LanguageSwitcherComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  private translate = inject(TranslateService);
  private platformId = inject(PLATFORM_ID);

  constructor() {
    this.translate.setDefaultLang('ar');
    this.translate.use('ar');

    // Only run browser-specific code in the browser
    if (isPlatformBrowser(this.platformId)) {
      this.translate.onLangChange.subscribe((event) => {
        document.documentElement.setAttribute('dir', event.lang === 'ar' ? 'rtl' : 'ltr');
      });
      document.documentElement.setAttribute('dir', 'rtl'); // Initial RTL for Arabic
    }
  }
}
