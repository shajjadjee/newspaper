export class Post{
    id;
    ptitle;
    pdesc;
    pdate;
    fimage;
    feature;
    cid;
    cname;
    constructor(id,ptitle,pdesc,pdate,fimage,feature,cid,cname,){
        this.id = id;
        this.ptitle = ptitle;
        this.pdesc = pdesc;
        this.pdate = pdate;
        this.fimage = fimage;
        this.feature = feature;
        this.cid = cid;
        this.cname = cname;
    }
}