export class Post{
    id;
    ptitle;
    pdesc;
    pdate;
    fimage;
    feature;
    cname;
    constructor(id,ptitle,pdesc,pdate,fimage,feature,cname,){
        this.id = id;
        this.ptitle = ptitle;
        this.pdesc = pdesc;
        this.pdate = pdate;
        this.fimage = fimage;
        this.feature = feature;
        this.cname = cname;
    }
}