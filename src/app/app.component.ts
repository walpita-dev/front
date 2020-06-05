import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'backoffice';

  constructor(
    private translate: TranslateService,
  ) {
    this.translate.setDefaultLang('fr');
    const browserLang = this.translate.getBrowserLang();
    translate.use(browserLang);
  }

  ngOnInit() {}
}
