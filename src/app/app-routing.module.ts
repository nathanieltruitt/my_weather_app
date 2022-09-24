import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NowComponent } from './components/now/now.component';

const routes: Routes = [
  {
    path: 'now',
    component: NowComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const routeComponents = [NowComponent];
