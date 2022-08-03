import { Component, Inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavBarComponent {
  constructor(public translateService: TranslateService) { 
  }

  translateSite(langauge: string) {
    this.translateService.use(langauge);
  }
}
