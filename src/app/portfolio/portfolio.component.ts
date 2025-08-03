import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
    selector: 'app-portfolio',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './portfolio.component.html',
    styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {}
}
