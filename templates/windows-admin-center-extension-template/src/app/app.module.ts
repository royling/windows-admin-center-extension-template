import { CommonModule } from '@angular/common';
import { ErrorHandler, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import {
    AppContextService,
    AppErrorHandler,
    CoreServiceModule,
    DialogModule,
    GuidedPanelModule,
    IconModule,
    IdleModule,
    LoadingWheelModule,
    NavigationService,
    ResourceService,
    SmeUxModule
} from '@microsoft/windows-admin-center-sdk/angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        CoreServiceModule,
        CommonModule,
        BrowserModule,
        DialogModule,
        FormsModule,
        SmeUxModule,
        IconModule,
        LoadingWheelModule,
        GuidedPanelModule,
        IdleModule,
        AppRoutingModule,
        RouterModule
    ],
    providers: [
        NavigationService,
        ResourceService,
        {
            provide: ErrorHandler,
            useClass: AppErrorHandler
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
    constructor(private appContextService: AppContextService) {
        this.appContextService.initializeModule({});
    }
}
