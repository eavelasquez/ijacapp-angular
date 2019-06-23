import { Route } from '@angular/router';

export interface NavRoute extends Route {
    icon?: string;
    title?: string;
    path: string;
}

export const navRoutes: NavRoute[] = [
    { title: 'Junta de Acción Comunal', icon: 'location_city', path: 'community-action',
        loadChildren: () => import('../pages/community-action-page/community-action-page.module').then(m => m.CommunityActionPageModule) },
    { title: 'Afiliación', icon: 'person_add', path: 'affil',
        loadChildren: () => import('../pages/affil-page/affil-page.module').then(m => m.AffilPageModule) },
    { title: 'Búsquedas', icon: 'search', path: 'search',
        loadChildren: () => import('../pages/search-page/search-page.module').then(m => m.SearchPageModule) },
    { path: '', redirectTo: 'community-action', pathMatch: 'full' }
];

export function getNavRoutes(): NavRoute[] {
    return navRoutes.filter(route => route.title);
}
