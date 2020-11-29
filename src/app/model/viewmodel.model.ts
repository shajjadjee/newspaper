export class Viewmodel{
    status: string;
    error: any;
    data: any;
    constructor(status, error, data){
this.status=status;
this.error=error;
this.data=data;
    }
}