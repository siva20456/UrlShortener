import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

interface URL {
  url_id: number;
  user_id: number;
  urllink: string;
  origin: string;
  createddate: string;
  expirydate: string;
}

interface Anlyitc {
  user_id: number;
  urllink: string;
  clicks: number;
}

interface nested {
  url_id: number;
  urllink: string;
  origin: string;
  createddate: string;
  expirydate: string;
  clicks: number;
}

interface original {
  user_id: number;
  urls: nested[]
}

const initial = {
  user_id: 0,
  urls: [
    {
      url_id: 0,
      urllink: '',
      origin: '',
      createddate: '',
      expirydate: '',
      clicks: 0
    }
  ]
}

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrl: './analytics.component.css'
})
export class AnalyticsComponent {

  url_data: URL[] = []
  analytic_data: Anlyitc[] = []
  final_data: original = initial

  constructor(private cookie: CookieService, private dataService: DataService, private router: Router) { }

  ngOnInit(): void {
    const jwt = this.cookie.get('jwt')
    console.log(jwt, 'jwt')
    if (jwt === '') {
      this.router.navigate(['/'])
    }
    this.getData()
  }

  getData = async (): Promise<any> => {
    try {
      const data = await this.dataService.GetAnalytics().toPromise()
      console.log(data)
      this.url_data = data.data.urls
      this.analytic_data = data.data.analytics
      console.log(this.url_data, this.analytic_data)
      const final_arr: nested[] = []
      for (let obj of this.url_data) {
        const analy = this.analytic_data.filter(e => e.urllink === obj.urllink)
        console.log(analy)
        final_arr.push({ ...obj, clicks: analy[0].clicks })
      }
      this.final_data = { urls: [...final_arr], user_id: this.url_data[0].user_id }
      console.log(this.final_data, 'final  ')

    } catch (e: any) {
      console.log(e)
      const { error } = e
      alert(error.error)
    }
  }

  addClick = async(link:any) => {
    console.log('Clicked',link)
    const data = {link}
    await this.dataService.AddClick(data).toPromise()
  }

}
