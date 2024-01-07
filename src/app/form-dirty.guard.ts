import { CanDeactivateFn } from '@angular/router';

export const formDirtyGuard: CanDeactivateFn<unknown> = (component:any, currentRoute, currentState, nextState) => {

if(component.firstname.dirty){ 
 let con=  confirm('Do you want to exit');

if(con){
    return true;


}else{
    return false;
}
}
return true;
};
