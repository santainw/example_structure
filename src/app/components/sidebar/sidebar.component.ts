import { Component } from '@angular/core';
import { AppConfigService } from './../../app-config/app-config.service';

@Component({
	selector: 'app-sidebar',
	templateUrl: './sidebar.component.html',
})
export class SidebarComponent {

	config: any;

	appName: string;

	options = { multi: false };
	menus: any;

	constructor(
		private appConfig: AppConfigService
	) {
		this.config = appConfig.getConfig();
		this.loadConfig();
	}

	loadConfig() {
		this.appName = this.config.appName;
        this.menus = this.config.side_bar_params;
        this.options = this.config.side_bar_config;
	}

	toggle(index: number) {
		// 멀티 오픈을 허용하지 않으면 타깃 이외의 모든 submenu를 클로즈한다.
		if (!this.config.multi) {
			this.menus.filter(
				(menu, i) => i !== index && menu.active
			).forEach(menu => menu.active = !menu.active);
		}

		// Menu의 active를 반전
		this.menus[index].active = !this.menus[index].active;
	}
}
