/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import {
  Component,
  Injector,
  Input,
  Output,
  EventEmitter,
} from '@angular/core'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { __NEU_ServiceInvokerService__ } from 'app/n-services/service-caller.service'; //_splitter_
import { genericApiCalls } from 'app/sd-services/genericApiCalls'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-home',
  templateUrl: './home.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class homeComponent {
  page: any = { dep: {} };
  constructor(
    private __page_injector__: Injector,
    private sdService: SDBaseService,
    public __serviceInvoker__: __NEU_ServiceInvokerService__
  ) {
    this.__page_injector__.get(SDPageCommonService).addPageDefaults(this.page);
    this.registerListeners();
    //appendnew_element_inject
  }

  ngOnInit() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    {
      this.sd_RwWviVzcomXMwKEV(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_RwWviVzcomXMwKEV(bh) {
    try {
      bh = this.sd_qWLeSvaqEzMbDMWf(bh);
      //appendnew_next_sd_RwWviVzcomXMwKEV
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_RwWviVzcomXMwKEV');
    }
  }

  //appendnew_flow_homeComponent_start

  sd_qWLeSvaqEzMbDMWf(bh) {
    try {
      this.page.city = 'tokyo';
      this.page.weatherData = {};
      this.page.today = new Date();
      bh = this.sd_YilwXo9HfpawhEbw(bh);
      //appendnew_next_sd_qWLeSvaqEzMbDMWf
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_qWLeSvaqEzMbDMWf');
    }
  }

  async sd_YilwXo9HfpawhEbw(bh) {
    try {
      const genericApiCallsInstance: genericApiCalls =
        this.__page_injector__.get(genericApiCalls);

      let outputVariables = await genericApiCallsInstance.getWeather(
        this.page.city
      );
      this.page.weatherData = outputVariables.local.results;

      bh = this.sd_RoxhMIyxxmzX00Xq(bh);
      //appendnew_next_sd_YilwXo9HfpawhEbw
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_YilwXo9HfpawhEbw');
    }
  }

  sd_RoxhMIyxxmzX00Xq(bh) {
    try {
      const page = this.page;
      page.weatherData = page.weatherData.payload;
      this.sd_MPTb7RHBQBJ5889a(bh);
      //appendnew_next_sd_RoxhMIyxxmzX00Xq
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_RoxhMIyxxmzX00Xq');
    }
  }

  sd_MPTb7RHBQBJ5889a(bh) {
    try {
      console.log(new Date().toLocaleTimeString(), this.page.weatherData);
      //appendnew_next_sd_MPTb7RHBQBJ5889a
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_MPTb7RHBQBJ5889a');
    }
  }

  //appendnew_node

  ngOnDestroy() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    this.__page_injector__.get(SDPageCommonService).deletePageFromMap(this);
  }

  errorHandler(bh, e, src) {
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
  //appendnew_flow_homeComponent_Catch
}
