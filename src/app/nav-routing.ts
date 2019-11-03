import { Route, Router } from '@angular/router';
import { Injectable } from '@angular/core';

export interface NavRoute extends Route {
    path?: string;
    icon?: string;
    group?: string;
    groupedNavRoutes?: NavRoute[];
}

export const sideNavPath = 'nav';

export const navRoutes: NavRoute[] = [
    {
        data: { title: 'Home' },
        icon: 'home',
        path: 'home',
        loadChildren: () =>
            import('./pages/home-page/home-page.module').then(
                m => m.HomePageModule,
            ),
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
    },
    {
        data: { title: 'Create new project' },
        icon: 'rowing',
        group: 'cicd',
        path: 'cicd-create-project',
        loadChildren: () =>
            import(
                './pages/cicd/cicd-create-project-page/cicd-create-project-page.module'
            ).then(m => m.CicdCreateProjectPageModule),
    },
    {
        data: { title: 'Create new job' },
        icon: 'rowing',
        group: 'cicd',
        path: 'cicd-create-job',
        loadChildren: () =>
            import(
                './pages/cicd/cicd-create-job-page/cicd-create-job-page.module'
            ).then(m => m.CicdCreateJobPageModule),
    },
    {
        data: { title: 'Create new project' },
        icon: 'archive',
        group: 'git',
        path: 'git-create-project',
        loadChildren: () =>
            import(
                './pages/git/git-create-project-page/git-create-project-page.module'
            ).then(m => m.GitCreateProjectPageModule),
    },
    {
        data: { title: 'Create new repository' },
        icon: 'donut_large',
        group: 'git',
        path: 'git-create-repo',
        loadChildren: () =>
            import(
                './pages/git/git-create-repo-page/git-create-repo-page.module'
            ).then(m => m.GitCreateRepoPageModule),
    },
    {
        data: { title: 'Create new project' },
        icon: 'toys',
        group: 'jira',
        path: 'jira-create-project',
        loadChildren: () =>
            import(
                './pages/jira/jira-create-project-page/jira-create-project-page.module'
            ).then(m => m.JiraCreateProjectPageModule),
    },
];

@Injectable({
    providedIn: 'root',
})
export class NavRouteService {
    navRoute: Route;
    navRoutes: NavRoute[];

    constructor(router: Router) {
        this.navRoute = router.config.find(route => route.path === sideNavPath);
        this.navRoutes = this.navRoute.children
            .filter(route => route.data && route.data.title)
            .reduce((groupedList: NavRoute[], route: NavRoute) => {
                if (route.group) {
                    const group: NavRoute = groupedList.find(navRoute => {
                        return (
                            navRoute.group === route.group &&
                            navRoute.groupedNavRoutes !== undefined
                        );
                    });
                    if (group) {
                        group.groupedNavRoutes.push(route);
                    } else {
                        groupedList.push({
                            group: route.group,
                            groupedNavRoutes: [route],
                        });
                    }
                } else {
                    groupedList.push(route);
                }
                return groupedList;
            }, []);
    }

    public getNavRoutes(): NavRoute[] {
        return this.navRoutes;
    }
}
