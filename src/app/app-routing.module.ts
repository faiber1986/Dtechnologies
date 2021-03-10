import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AgendaCreateComponent } from './components/agenda-create/agenda-create.component';
import { AgendaDetailsComponent } from './components/agenda-details/agenda-details.component';
import { AgendaListComponent } from './components/agenda-list/agenda-list.component';

const routes: Routes = [
	{ path: '', redirectTo: 'task', pathMatch: 'full' },
	{ path: 'task', component: AgendaListComponent },
	{ path: 'task/:id', component: AgendaDetailsComponent },
	{ path: 'create', component: AgendaCreateComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
