import { FormGroup } from "@angular/forms";
export class GenericValidator{
    constructor(private validationMessages:{[key:string]:{[key:string]:string}}){}
    processMessages(container:FormGroup):{[key:string]:string}{
        const mssgs:any={};
        for (const controlKey in container.controls) {
            if (container.controls.hasOwnProperty(controlKey)) {
              const c = container.controls[controlKey];
              // If it is a FormGroup, process its child controls.
              if (c instanceof FormGroup) {
                const childMessages = this.processMessages(c);
                Object.assign(mssgs, childMessages);
              } else {
                // Only validate if there are validation messages for the control
                if (this.validationMessages[controlKey]) {
                    mssgs[controlKey] = '';
                  if ((c.dirty || c.touched) && c.errors) {
                    Object.keys(c.errors).map(messageKey => {
                      if (this.validationMessages[controlKey][messageKey]) {
                        mssgs[controlKey] += this.validationMessages[controlKey][messageKey] + ' ';
                      }
                    });
                  }
                }
              }
            }
          }
        return mssgs;
    }
}