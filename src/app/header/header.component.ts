import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {


  constructor(private router: Router, private cookies: CookieService) { }
  userLogout(){
    this.cookies.delete('jwt')
    this.router.navigate(['/'])
  }

  GotoHome(){
    this.router.navigate(['/home'])
  }
  
  GotoAnly(){
    this.router.navigate(['/analytics'])
  }

}
