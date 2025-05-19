import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProfileComponent } from './profile/profile.component';
import { UserComponent } from './user/user.component';

export const routes: Routes = [
    {path:'login',component:LoginComponent},
    {path:'signup',component:SignupComponent},
    {path:'profile',component:ProfileComponent},
    {path:'user/:id/:email',component:UserComponent},
    {path:'**',component:PageNotFoundComponent}
        
];
