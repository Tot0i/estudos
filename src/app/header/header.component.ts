import { Component, EventEmitter, Input, OnInit, Output, input } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{
  @Input() sidebarActive = false;
  @Output() toggleSideBar = new EventEmitter();
  constructor() {}

  ngOnInit(): void {
    
  }
}
