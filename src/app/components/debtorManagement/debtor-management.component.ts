import { Component } from '@angular/core';
import { AppConfigService } from './../../app-config/app-config.service';

@Component({
  selector: 'app-debtor-management',
  templateUrl: './debtor-management.component.html',
})
export class DebtorManagementComponent {

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
