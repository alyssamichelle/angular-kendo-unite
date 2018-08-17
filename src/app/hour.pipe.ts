import { Pipe, PipeTransform } from "../../node_modules/@angular/core";

@Pipe({
  name: 'hour'
})
export class HourPipe implements PipeTransform {
  transform(value: Date, args?: any) {
    if (!value) return null;

    return value.getHours();
  }
}