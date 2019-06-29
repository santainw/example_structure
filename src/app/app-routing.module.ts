import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DebtorManagementComponent } from './components/debtorManagement/debtor-management.component'
import { TemplateManagementComponent } from './components/templateManagement/template-management.component'
import { SubpoenaManagementComponent } from './components/subpoenaManagement/subpoena-management.component'

const routes: Routes = [
	{
		path: '',
        pathMatch: 'full',
        redirectTo: 'importManagement'
	},
    { path: 'importManagement', component: DebtorManagementComponent },
    { path: 'templateManagement', component: TemplateManagementComponent },
    { path: 'subpoenaManagement', component: SubpoenaManagementComponent }
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
