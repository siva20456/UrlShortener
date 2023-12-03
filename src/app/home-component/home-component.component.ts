import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { DataService } from '../data.service';


@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrl: './home-component.component.css'
})
export default class HomeComponentComponent {

  url : string = ''
  website : string = ''

  constructor(private cookie:CookieService,private router:Router,private dataService:DataService){}

  // jwt = this.cookie.get('jwt')
  ngOnInit():void{
    const jwt = this.cookie.get('jwt')
    console.log(jwt,'jwt')
    if(jwt === ''){
      this.router.navigate(['/'])
    }
  }

  AddUrl =async ():Promise<any> => {
    console.log(this.url, this.website)
    
      const dataToPost = { url: this.url, website: this.website };
      try {
        const data = await this.dataService.AddUrlRoute(dataToPost).toPromise()
        console.log(data)
        alert(data.data)
      } catch (e: any) {
        console.log(e)
        const { error } = e
        alert(error.error)
      }
  }
  
}
