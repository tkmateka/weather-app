/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { Injectable, Injector } from '@angular/core'; //_splitter_
import {
  Router,
  NavigationEnd,
  NavigationStart,
  Resolve,
  ActivatedRouteSnapshot,
} from '@angular/router'; //_splitter_
import { MatSnackBar } from '@angular/material/snack-bar'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
//append_imports_end

declare const window: any;
declare const cordova: any;

@Injectable({
  providedIn: 'root',
})
export class genericApiCalls {
  constructor(
    private sdService: SDBaseService,
    private router: Router,
    private matSnackBar: MatSnackBar,
    private __service_injector__: Injector
  ) {
    this.registerListeners();
  }
  private registerListeners() {
    let bh = this.sdService.__constructDefault({});

    //append_listeners
  }

  //   service flows_genericApiCalls

  async getWeather(body = '', ...others) {
    try {
      var bh: any = {
        input: {
          body: body,
        },
        local: {
          results: undefined,
        },
      };
      bh = this.sdService.__constructDefault(bh);
      bh = await this.sd_ZjTEjIArKSq9mYe4(bh);
      //appendnew_next_getWeather
      return (
        // formatting output variables
        {
          input: {},
          local: {
            results: bh.local.results,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_mmj26JEnwWR2TFGH');
    }
  }

  //appendnew_flow_genericApiCalls_start

  async sd_ZjTEjIArKSq9mYe4(bh) {
    try {
      let basePath = bh.system.environment.properties.ssdURL.endsWith('/')
        ? bh.system.environment.properties.ssdURL
        : bh.system.environment.properties.ssdURL + '/';
      let url = `getWeather/${bh.input.body}/`;
      let finalUrl = basePath + url;
      let requestOptions = {
        url: finalUrl,
        method: 'get',
        responseType: 'json',
        reportProgress: undefined,
        headers: {},
        params: {},
        body: undefined,
      };
      bh.local.results = await this.sdService.nHttpRequest(requestOptions);
      //appendnew_next_sd_ZjTEjIArKSq9mYe4
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_ZjTEjIArKSq9mYe4');
    }
  }

  //appendnew_node

  private async errorHandler(bh, e, src) {
    console.error(e);
    bh.error = e;
    bh.errorSource = src;

    if (
      false
      /*appendnew_next_Catch*/
    ) {
      return bh;
    } else {
      throw e;
    }
  }
  //appendnew_flow_genericApiCalls_Catch
}
