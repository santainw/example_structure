import { Component } from '@angular/core';
import { AppConfigService } from './../../app-config/app-config.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent {

    config: any;

    appName: string;

    constructor(
        private appConfig: AppConfigService
    ){
        this.config = appConfig.getConfig();
        this.loadConfig();
    }

    loadConfig() {
        this.appName = this.config.appName;
    }
}
