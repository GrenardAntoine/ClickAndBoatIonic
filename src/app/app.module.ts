import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { OwnerTypeComponent } from './form/owner-type/owner-type.component';
import { CatamaranSettingsComponent } from './form/catamaran-settings/catamaran-settings.component';
import { SailingShipSettingsComponent } from './form/sailing-ship-settings/sailing-ship-settings.component';
import { BoatTypeComponent } from './form/boat-type/boat-type.component';
import { SubmitComponent } from './form/submit/submit.component';
import { HomeComponent } from './home/home.component';
import { BoatService } from './service/boat.service';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        AppComponent,
        OwnerTypeComponent,
        BoatTypeComponent,
        CatamaranSettingsComponent,
        SailingShipSettingsComponent,
        SubmitComponent,
        HomeComponent
    ],
    entryComponents: [],
    imports: [
        BrowserModule,
        IonicModule.forRoot(),
        AppRoutingModule,
        ReactiveFormsModule
    ],
    providers: [
        StatusBar,
        SplashScreen,
        BoatService,
        {provide: RouteReuseStrategy, useClass: IonicRouteStrategy}
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
