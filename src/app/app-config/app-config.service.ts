import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root', })
export class AppConfigService {

	// set default app config
	private appConfig: any = {
		appName: 'Easy Quick Subpoena',
		side_bar_config: { multi: false },
		side_bar_params: [
			{
				name: 'Import Management',
				iconClass: 'fa fa-code',
				active: false,
				submenu: [
					{ name: 'Debtor', url: '/importManagement' },
					{ name: 'Template', url: '/templateManagement' },
				]
			},
			{
				name: 'Subpoena Mangement',
				url: '/subpoenaManagement',
				iconClass: 'fa fa-mobile',
				active: false,
			},
		]
	}

	constructor(private http: HttpClient) { }

	getConfig() {
		return this.appConfig;
	}
}
