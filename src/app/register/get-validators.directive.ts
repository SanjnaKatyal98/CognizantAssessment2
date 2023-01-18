import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appGetValidators]',
  providers:[{provide:NG_VALIDATORS,useExisting:GetValidatorsDirective,multi:true}]
})
export class GetValidatorsDirective implements Validator{
  constructor() { }
  validate(control: AbstractControl<any, any>): ValidationErrors | null {
    let num:number=+control.value;
    if(isNaN(num))
      {return {'gve':true,'requiredValue':10};}
    if(num<=10)
      {return {'gve':true,'requiredValue':10};}
    return null;
    }
  registerOnValidatorChange?(fn: () => void): void {
    throw new Error('Method not implemented.');
  }
}