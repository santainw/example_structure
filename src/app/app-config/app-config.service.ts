import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root', })
export class AppConfigService {

	// set default app config
	private appConfig: any = {
		appName: 'Easy Quick Subpoena'
	}

	constructor(private http: HttpClient) { }

	getConfig() {
		return this.appConfig;
	}
}
