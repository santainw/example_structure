import { Component } from '@angular/core';
import { AppConfigService } from './../../app-config/app-config.service';

@Component({
  selector: 'app-template-management',
  templateUrl: './template-management.component.html',
})
export class TemplateManagementComponent {

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
