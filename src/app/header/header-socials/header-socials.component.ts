import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
    selector: 'app-header-socials',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './header-socials.component.html',
    styleUrls: ['./header-socials.component.scss']
})
export class HeaderSocialsComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {}
}
