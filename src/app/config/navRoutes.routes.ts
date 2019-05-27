import { Route } from '@angular/router';

export interface NavRoute extends Route {
    icon?: string;
    title?: string;
    path: string;
}

export const navRoutes: NavRoute[] = [
    { title: 'Afiliación', icon: '', path: 'affil', loadChildren: './pages/affil-page/affil-page.module#AffilPageModule' },
    { title: 'Búsquedas', icon: '', path: 'search', loadChildren: './pages/search-page/search-page.module#SearchPageModule' },
    // { title: 'Comités', icon: '', path: 'commit', loadChildren: './pages//commit-page/commit-page.module#CommitPageModule' },
    // { title: 'Asistencias', icon: '', path: 'assist', loadChildren: './pages/assist-page/assist-page.module#AssistPageModule' },
    // { path: '', redirectTo: 'search', pathMatch: 'full' }
];

export function getNavRoutes(): NavRoute[] {
    return navRoutes.filter(route => route.title);
}
