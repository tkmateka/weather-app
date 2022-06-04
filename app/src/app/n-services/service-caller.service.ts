//append_imports_start

import * as sd_xPhagqdpW7oOKXYI from 'app/sd-services/genericApiCalls'; //_splitter_
import { Injectable } from '@angular/core'; //_splitter_
//append_imports_end
@Injectable({ providedIn: 'root' })
export class __NEU_ServiceInvokerService__ {
  constructor(
    private sd_xPhagqdpW7oOKXYI: sd_xPhagqdpW7oOKXYI.genericApiCalls
  ) {}
  invoke(
    injectedServiceId: string,
    methodName: string,
    ...methodArguments: any[]
  ) {
    return this[injectedServiceId][methodName](...methodArguments);
  }
}
