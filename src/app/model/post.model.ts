export class Post{
    id;
    ptitle;
    pdesc;
    pdate;
    fimage;
    feature;
    cname;
    username;
    constructor(id,ptitle,pdesc,pdate,fimage,feature,cname,username){
        this.id = id;
        this.ptitle = ptitle;
        this.pdesc = pdesc;
        this.pdate = pdate;
        this.fimage = fimage;
        this.feature = feature;
        this.cname = cname;
        this.username = username;
    }
}