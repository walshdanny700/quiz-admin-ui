import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { TagListComponent } from './component/tag-list/tag-list.component';
import { TagFormComponent } from './component/tag-form/tag-form.component';
import { TagService } from './service/tag.service';

@NgModule({
  declarations: [
    AppComponent,
    TagListComponent,
    TagFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [TagService],
  bootstrap: [AppComponent]
})
export class AppModule { }
