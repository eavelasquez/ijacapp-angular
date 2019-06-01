import { Route } from '@angular/router';

export interface NavRoute extends Route {
    icon?: string;
    title?: string;
    path: string;
}

export const navRoutes: NavRoute[] = [
    { title: 'Afiliación', icon: 'person_add', path: 'affil',
        loadChildren: () => import('../pages/affil-page/affil-page.module').then(m => m.AffilPageModule) },
    { title: 'Búsquedas', icon: 'search', path: 'search',
        loadChildren: () => import('../pages/search-page/search-page.module').then(m => m.SearchPageModule) },
    // { title: 'Comités', icon: '', path: 'commit', loadChildren: './pages//commit-page/commit-page.module#CommitPageModule' },
    // { title: 'Asistencias', icon: '', path: 'assist', loadChildren: './pages/assist-page/assist-page.module#AssistPageModule' },
    // { path: '', redirectTo: 'search', pathMatch: 'full' }
];

export function getNavRoutes(): NavRoute[] {
    return navRoutes.filter(route => route.title);
}
