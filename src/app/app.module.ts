import { AppcommonModule } from './appcommon/appcommon.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { NgxPermissionsModule } from 'ngx-permissions';
import { MenubarModule, MenuItem } from 'primeng/primeng';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
// import { JsonSchemaFormModule, Bootstrap4FrameworkModule } from 'angular2-json-schema-form';

import { AppComponent } from './app.component';
import { ROUTES } from './app.routes';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { FormValidationComponent } from './demo/form-validation/form-validation.component';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

@NgModule({
  declarations: [AppComponent, HeaderComponent, FooterComponent, PageNotFoundComponent, FormValidationComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(ROUTES, { enableTracing: false }),
    NgxPermissionsModule.forRoot(),
    MenubarModule,
    PerfectScrollbarModule,
    // Bootstrap4FrameworkModule,
    // JsonSchemaFormModule.forRoot(Bootstrap4FrameworkModule),
    AppcommonModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
