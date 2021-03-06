import { RouterStateSerializer } from '@ngrx/router-store';
import { RouterStateSnapshot } from '@angular/router';
import { RouterStateUrl } from './router-state-url';

export class CompressRouterState implements RouterStateSerializer<RouterStateUrl> {
  serialize(routerState: RouterStateSnapshot): RouterStateUrl {
    let route = routerState.root;
    while (route.firstChild) {
      route = route.firstChild;
    }
    const {
      url,
      root: { queryParams }
    } = routerState;
    const { params } = route;
    return { url, params, queryParams };
  }
}
