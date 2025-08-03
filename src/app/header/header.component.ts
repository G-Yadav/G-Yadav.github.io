import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderSocialsComponent } from './header-socials/header-socials.component';
import { CtaComponent } from './cta/cta.component';
@Component({
    selector: 'app-header',
    standalone: true,
    imports: [
      CommonModule,
      HeaderSocialsComponent,
      CtaComponent
    ],
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {}
}
