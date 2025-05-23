import { Routes } from '@angular/router';
import { barComponent } from './layouts/bar/bar';

export const routes: Routes = [
    {
        path:'',
        pathMatch:'full',
        redirectTo:'home'

    },
    {
        path:'home',
        component:barComponent,
        children:[
            {
            path:'',
            loadChildren:() => import('./page/home/home.routes').then(r =>r.homeRoutes),
            } 
        ]
    },
    {
        path:'list',
        component:barComponent,
        children:[
            {
                path:'',
                loadChildren:()=> import('./page/list/list.routes').then(r=>r.listroutes),
            }
        ]
    },
    {
        path:'profile',
        component:barComponent,
        children:[
            {
                path:'',
                loadChildren:()=> import('./page/profile/profile.routes').then(r=>r.profileroutes),
            }
        ]
    },
    {
        path:'shop',
        component:barComponent,
        children:[
            {
                path:'',
                loadChildren:()=> import('./page/shop/shop.routes').then(r=>r.shoproutes),
            }
        ]
    }
];
