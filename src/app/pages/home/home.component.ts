import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { HeroComponent } from '../../components/hero/hero.component';
import { AboutComponent } from '../../components/about/about.component';
import { InterestsComponent } from '../../components/interests/interests.component';
import { ProjectsComponent } from '../../components/projects/projects.component';
import { GalleryComponent } from '../../components/gallery/gallery.component';
import { WritingComponent } from '../../components/writing/writing.component';
import { ContactComponent } from '../../components/contact/contact.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-home',
  imports: [
    NavbarComponent,
    HeroComponent,
    AboutComponent,
    InterestsComponent,
    ProjectsComponent,
    GalleryComponent,
    WritingComponent,
    ContactComponent,
    FooterComponent,
  ],
  templateUrl: './home.component.html',
})
export class HomeComponent {}
