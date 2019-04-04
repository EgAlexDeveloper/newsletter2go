// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

// Components
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app/app.component';
import { UsersComponent } from './components/users/users.component';
import { UserComponent } from './components/user/user.component';
import { TableComponent } from './components/shared/table/table.component';
import { ModalComponent } from './components/shared/modal/modal.component';

// Providers
import { QueryService } from './services/query.service';
import { UsersEndpointsService } from './services/users-endpoints.service';
import { DataPipeService } from './services/data-pipe.service';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
    TableComponent,
    ModalComponent
  ],
  entryComponents: [
    ModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    NgbPaginationModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    QueryService,
    UsersEndpointsService,
    DataPipeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
