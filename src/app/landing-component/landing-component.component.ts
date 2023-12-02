import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-landing-component',
  templateUrl: './landing-component.component.html',
  styleUrl: './landing-component.component.css'
})
export class LandingComponentComponent {
  isLogin: boolean = true;
  isSignUp: boolean = false;
  username: string = '';
  password: string = '';
  variablePass: string = '';

  constructor(private dataService: DataService, private router: Router) { }

  userLogin = async (): Promise<any> => {
    console.log(this.username, this.password)
    const dataToPost = { username: this.username, password: this.password };
    try {
      const data = await this.dataService.UserLogin(dataToPost).toPromise()
      console.log(data)
      this.router.navigate(['/home'])
    } catch (e: any) {
      console.log(e)
      const { error } = e
      alert(error.error)
    }
  }

  userRegister = async (): Promise<any> => {
    console.log(this.username, this.password, this.variablePass)
    if (this.password !== this.variablePass) {
      alert('Re-check the password..!')
    }
    else {
      const dataToPost = { username: this.username, password: this.password };
      try {
        const data = await this.dataService.UserRegistration(dataToPost).toPromise()
        console.log(data)
        this.router.navigate(['/home'])
      } catch (e: any) {
        console.log(e, 'err2')
        const { error } = e
        alert(error.error)
      }
      // (response) => {
      //   console.log('Data posted successfully:', response);
      // },
      // (error) => {
      //   // error = 'An error occurred while posting data.';
      //   console.error(error);
      // }
      // (data) => {
      //   try{
      //     console.log(data)
      //   }catch(err){
      //     alert(data.error)
      //     console.log(err)
      //   }
      // console.log(data)
    }
  }


  TurnSignUp() {
    this.isLogin = !this.isLogin
    this.isSignUp = !this.isSignUp
  }
}
