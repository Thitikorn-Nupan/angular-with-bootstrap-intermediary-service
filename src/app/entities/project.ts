export class Project {

  public stUuid? : string;
  public title? : string;
  public dateStart? : Date;
  public dateEnd? : Date;
  public cost? : number;

  constructor(stUuid?: string, title?: string, dateStart?: Date, dateEnd?: Date, cost?: number) {
    this.stUuid = stUuid;
    this.title = title;
    this.dateStart = dateStart;
    this.dateEnd = dateEnd;
    this.cost = cost;
  }

}
