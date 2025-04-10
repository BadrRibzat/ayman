import { Component } from '@angular/core';
import { LanguageService } from '../services/language.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  constructor(
    public translate: TranslateService,
    private languageService: LanguageService
  ) {}

  switchLang(lang: string) {
    this.languageService.switchLanguage(lang);
  }
}
