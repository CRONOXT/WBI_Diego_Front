import { Pipe, PipeTransform } from "@angular/core";
@Pipe({
    name: 'ObjtoArray'
})
export class ObjtoArrayPipe implements PipeTransform{
    transform(Object: any=[]): any {
        return Object.values(Object);
    }
}