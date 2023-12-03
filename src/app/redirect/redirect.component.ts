import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { DataService } from '../data.service';


@Component({
  selector: 'app-redirect',
  templateUrl: './redirect.component.html',
  styleUrl: './redirect.component.css'
})
export class RedirectComponent implements OnInit  {

  constructor(private route: ActivatedRoute, private dataService: DataService,private router:Router) {
    console.log('id')
   }

  ngOnInit (): void{
    const id = this.route.snapshot.paramMap.get('id');
    console.log(id,'id')
    this.getOrigin(id)
    
  }

  getOrigin = async (id: any): Promise<any> => {
    const dataToPost = { urllink: id };
    try {
      const data = await this.dataService.GetOrigin(dataToPost).toPromise()
      console.log(data)
      window.location.href =  data.data
      
    //   this.router.navigate([data.data.origin, { externalUrl: data.data.origin }], {
    //   skipLocationChange: true,
    // });
    } catch (e: any) {
      console.log(e)
      const { error } = e
      alert(error.error)
    }

  }


}
