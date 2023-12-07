import { Routes } from '@angular/router';
import { BlogPostComponent } from './modules/blog-post/blog-post.component';
import { PruebaComponent } from './modules/prueba/prueba.component';
import { ContactComponent } from './modules/contact/contact.component';

export const routes: Routes = [
    {path: 'blog-post', component: BlogPostComponent},
    {path: 'prueba', component: PruebaComponent},
    {path: 'contact', title: 'Contact form',component: ContactComponent}
];
