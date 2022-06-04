let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { StatusCodes as httpStatusCodes } from 'http-status-codes'; //_splitter_
import * as cookieParser from 'cookie-parser'; //_splitter_
import { Readable } from 'stream'; //_splitter_
import { setInterval } from 'timers'; //_splitter_
import { Issuer, custom } from 'openid-client'; //_splitter_
import * as crypto from 'crypto'; //_splitter_
import * as url from 'url'; //_splitter_
import { SDBaseService } from '../services/SDBaseService'; //_splitter_
import { Middleware } from '../middleware/Middleware'; //_splitter_
import * as settings from '../config/config'; //_splitter_
import log from '../utils/Logger'; //_splitter_
//append_imports_end
export class testing {
  private sdService = new SDBaseService();
  private app;
  private serviceBasePath: string;
  private generatedMiddlewares: Object;
  private serviceName: string;
  private swaggerDocument: Object;
  private globalTimers: any;
  private constructor(
    app,
    generatedeMiddlewares,
    routeCall,
    middlewareCall,
    swaggerDocument,
    globalTimers
  ) {
    this.serviceName = 'testing';
    this.app = app;
    this.serviceBasePath = this.app.settings.base;
    this.generatedMiddlewares = generatedeMiddlewares;
    this.swaggerDocument = swaggerDocument;
    this.globalTimers = globalTimers;
  }

  static getInstance(
    app?,
    generatedeMiddlewares?,
    routeCall?,
    middlewareCall?,
    swaggerDocument?,
    globalTimers?
  ) {
    if (!instance) {
      instance = new testing(
        app,
        generatedeMiddlewares,
        routeCall,
        middlewareCall,
        swaggerDocument,
        globalTimers
      );
    }
    instance.mountCalls(routeCall, middlewareCall);
    return instance;
  }

  private mountCalls(routeCall, middlewareCall) {
    if (routeCall) {
      this.mountAllPaths();
      this.mountAllListeners();
    }
    if (middlewareCall) {
      this.generatedMiddlewares[this.serviceName] = {};
      this.mountAllMiddlewares();
      this.mountTimers();
    }
  }

  async mountAllListeners() {
    try {
      //append_listeners
    } catch (e) {
      throw e;
    }
  }

  async mountTimers() {
    try {
      //appendnew_flow_testing_TimerStart
    } catch (e) {
      throw e;
    }
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: testing');

    //appendnew_flow_testing_MiddlewareStart
  }
  private mountAllPaths() {
    log.debug('mounting all paths for service :: testing');

    if (!this.swaggerDocument['paths']['/getWeather/{city}']) {
      this.swaggerDocument['paths']['/getWeather/{city}'] = {
        get: {
          summary: '',
          description: '',
          consumes: [],
          produces: [],
          parameters: [
            {
              in: 'path',
              name: 'city',
              description: 'City name from user',
              required: true,
            },
          ],
          responses: {},
        },
      };
    } else {
      this.swaggerDocument['paths']['/getWeather/{city}']['get'] = {
        summary: '',
        description: '',
        consumes: [],
        produces: [],
        parameters: [
          {
            in: 'path',
            name: 'city',
            description: 'City name from user',
            required: true,
          },
        ],
        responses: {},
      };
    }
    this.app['get'](
      `${this.serviceBasePath}/getWeather/:city`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          bh = await this.sd_98jXLW26v9qU6Pt1(bh);
          //appendnew_next_sd_r4M0Pp2jfj4M2ETq
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_r4M0Pp2jfj4M2ETq');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_testing_HttpIn
  }
  //   service flows_testing

  //appendnew_flow_testing_start

  async sd_98jXLW26v9qU6Pt1(bh) {
    try {
      bh.input.url = `${bh.system.environment.weatherUrl}${bh.input.params.city}&appid=${bh.system.environment.apiKey}&units=metric`;
      bh = await this.sd_HtLjLqgGl3PifRhF(bh);
      //appendnew_next_sd_98jXLW26v9qU6Pt1
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_98jXLW26v9qU6Pt1');
    }
  }

  async sd_HtLjLqgGl3PifRhF(bh) {
    try {
      let requestOptions = {
        url: bh.input.url,
        timeout: 30000,
        method: 'get',
        headers: {},
        followRedirects: true,
        cookies: undefined,
        authType: undefined,
        body: undefined,
        paytoqs: false,
        proxyConfig: undefined,
        tlsConfig: undefined,
        ret: 'json',
        params: {},
        username: undefined,
        password: undefined,
        token: undefined,
        rejectUnauthorized: undefined,
        useQuerystring: false,
      };
      if (!false) {
        requestOptions.rejectUnauthorized = false;
      }
      requestOptions.tlsConfig = undefined;
      requestOptions.proxyConfig = undefined;
      let responseMsg: any = await this.sdService.httpRequest(
        requestOptions.url,
        requestOptions.timeout,
        requestOptions.method,
        requestOptions.headers,
        requestOptions.followRedirects,
        requestOptions.cookies,
        requestOptions.authType,
        requestOptions.body,
        requestOptions.paytoqs,
        requestOptions.proxyConfig,
        requestOptions.tlsConfig,
        requestOptions.ret,
        requestOptions.params,
        requestOptions.rejectUnauthorized,
        requestOptions.username,
        requestOptions.password,
        requestOptions.token
      );

      bh.local.result = responseMsg;
      await this.sd_44Jk32hqeLZBIXqq(bh);
      //appendnew_next_sd_HtLjLqgGl3PifRhF
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_HtLjLqgGl3PifRhF');
    }
  }

  async sd_44Jk32hqeLZBIXqq(bh) {
    try {
      bh.web.res.status(200).send(bh.local.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_44Jk32hqeLZBIXqq');
    }
  }

  //appendnew_node

  async errorHandler(bh, e, src) {
    console.error(e);
    bh.error = e;
    bh.errorSource = src;

    if (
      false
      /*appendnew_next_Catch*/
    ) {
      return bh;
    } else {
      if (bh.web.next) {
        bh.web.next(e);
      } else {
        throw e;
      }
    }
  }
  //appendnew_flow_testing_Catch
}
