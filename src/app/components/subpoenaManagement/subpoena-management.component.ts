import { Component } from '@angular/core';
import { AppConfigService } from './../../app-config/app-config.service';

@Component({
  selector: 'app-subpoena-management',
  templateUrl: './subpoena-management.component.html',
})
export class SubpoenaManagementComponent {

    config: any;

    constructor(
        private appConfig: AppConfigService
    ){
        this.config = appConfig.getConfig();
        this.loadConfig();
    }

    loadConfig() {

    }
}
