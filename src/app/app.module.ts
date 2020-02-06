// """""""""""""""""""""""""  components  """""""""""""""""""""""""""""""""""

import { BannerComponent } from "./components/banner/banner.component";
import { AboutComponent } from "./components/about/about.component";

import { ServicesComponent } from "./components/services/services.component";
import { SkilsComponent } from "./components/skils/skils.component";
import { ProjectsComponent } from "./components/projects/projects.component";
import { BlogsComponent } from "./components/blogs/blogs.component";
import { ContactComponent } from "./components/contact/contact.component";
import { FooterComponent } from "./components/footer/footer.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { AppComponent } from "./app.component";
import { ResumeComponent } from "./components/resume/resume.component";

// """""""""""""""""""""""""  Pages  """""""""""""""""""""""""""""""""""

import { WelcomePageComponent } from "./pages/welcome-page/welcome-page.component";

// """""""""""""""""""""""""  Modules  """""""""""""""""""""""""""""""""""

import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { SharedModule } from "./shared/shared.module";
import { AppRoutingModule } from "./app-routing.module";
import { FlexLayoutModule } from "@angular/flex-layout";

// """""""""""""""""""""""""  Services  """""""""""""""""""""""""""""""""""
import { CardService } from '../app/components/services/card.service'
import { ResumesService } from './components/resume/resumes.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    WelcomePageComponent,
    BannerComponent,
    AboutComponent,
    ResumeComponent,
    ServicesComponent,
    SkilsComponent,
    ProjectsComponent,
    BlogsComponent,
    ContactComponent,
    FooterComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FlexLayoutModule, SharedModule],
  providers: [ResumesService, CardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
