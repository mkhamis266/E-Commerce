export class Cart{
  constructor (
    public userId:number,
    public date:Date,
    public products:{productId:number,quantity:number}[]){}
}