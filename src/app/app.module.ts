import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatFormFieldModule, MatInputModule, MatButtonModule, MatTableModule, MatCheckboxModule, MatListModule, MatCardModule, MatSliderModule, MatSelectModule, MatRadioModule, MatIconModule, MatChipsModule, MatGridListModule } from "@angular/material";

// Import your library



import { AngularFontAwesomeModule } from 'angular-font-awesome';

// used to create fake backend
import { fakeBackendProvider } from './_helpers/index';

import { AppComponent }  from './app.component';
import { routing }        from './app.routing';

import { AlertComponent } from './_directives/index';
import { AuthGuard } from './_guards/index';
import { JwtInterceptor } from './_helpers/index';
import { AlertService, AuthenticationService, UserService, CountryService } from './_services/index';
import { HomeComponent } from './home/index';
import { LoginComponent } from './login/index';
import { RegisterComponent } from './register/index';
import { EditComponent } from './edit/edit.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DashBoardComponent } from './dashboard/dashboard.component';
import { ShopComponent } from './shop/index';
import { ContactusComponent } from './contactus/index';
import { AboutusComponent } from './aboutus/index';
import { SearchComponent } from './search/index';
import { FilterDataPipe } from './pipe/filter-data.pipe';
import 'hammerjs';



@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        routing,
        BrowserAnimationsModule,
        MatFormFieldModule,
        MatInputModule,
        MatCardModule,
        MatButtonModule,
        MatTableModule,
        MatCheckboxModule,
        MatListModule,
        MatSliderModule,
        MatSelectModule,
        MatRadioModule,
        MatIconModule,
        MatChipsModule,
        MatGridListModule,
        AngularFontAwesomeModule
        ],
    declarations: [
        AppComponent,
        AlertComponent,
        HomeComponent,
        LoginComponent,
        RegisterComponent,
        EditComponent ,
        NavbarComponent,
        DashBoardComponent,
        ShopComponent,
        ContactusComponent,
        AboutusComponent,
        FilterDataPipe,
        SearchComponent
      ],

    providers: [
        AuthGuard,
        AlertService,
        AuthenticationService,
        UserService,
        CountryService,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: JwtInterceptor,
            multi: true
        },

        // provider used to create fake backend
        fakeBackendProvider
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }
