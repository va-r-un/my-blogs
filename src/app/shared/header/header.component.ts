import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  logged:boolean = false;
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.logged = this.authService.isAuthenticated?true:false;
  }

}
