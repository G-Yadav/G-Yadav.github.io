import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { NavComponent } from '../nav/nav.component';
import { AboutComponent } from '../about/about.component';
import { ExperienceComponent } from '../experience/experience.component';
import { SkillsComponent } from '../skills/skills.component';
import { PortfolioComponent } from '../portfolio/portfolio.component';
import { ContactComponent } from '../contact/contact.component';
import { FooterComponent } from '../footer/footer.component';
@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    NavComponent,
    AboutComponent,
    ExperienceComponent,
    SkillsComponent,
    PortfolioComponent,
    ContactComponent,
    FooterComponent
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {
  title = 'Portfolio';
}
