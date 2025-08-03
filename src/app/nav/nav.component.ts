import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
    selector: 'app-nav',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  xlink: String = "step1";
  constructor() {}
  ngOnInit(): void {}
}
