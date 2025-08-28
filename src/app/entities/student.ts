export class Student {

  public uuid? : string;
  public fullName? : string;
  public email? : string;
  public year? : number;


  constructor(uuid?: string, fullName?: string, email?: string, year?: number) {
    this.uuid = uuid;
    this.fullName = fullName;
    this.email = email;
    this.year = year;
  }



}
