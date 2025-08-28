import {Component, OnInit} from '@angular/core';
import {Student} from "../../entities/student";
import {Project} from "../../entities/project";
import {HeaderColumn} from "../../entities/header-column";
import {Software} from "../../entities/software";

@Component({
  selector: 'display-tree-table',
  templateUrl: './tree-table.component.html',
  styleUrl: './tree-table.component.css'
})
export class TreeTableComponent implements OnInit {
  // ************** Demo data ** student have many projects
  private software : Software[] = [
    new Software('Facebook','20 GB','Mobile Application'),
    new Software('Line','20 GB','Mobile Application'),
    new Software('Instagram','20 GB','Mobile Application'),
  ]
  private students : Student[] = [
    new Student('6b009584-cfbe-45a9-b2e1-d267cf51b9be','alex ryder','alex@hotmail.com',4),
    new Student('6b109584-cfbe-45a9-b2e1-d267cf51b9be','max slider','max@hotmail.com',4),
    new Student('6b209584-cfbe-45a9-b2e1-d267cf51b9be','kevin owner','kevin@hotmail.com',3),
    new Student('6b309584-cfbe-45a9-b2e1-d267cf51b9be','jack ryder','jack@hotmail.com',4),
  ]
  private projects : Project[] = [
    new Project('6b009584-cfbe-45a9-b2e1-d267cf51b9be','A Software',new Date(),new Date(),95000),
    new Project('6b009584-cfbe-45a9-b2e1-d267cf51b9be','B Software',new Date(),new Date(),95000),
    new Project('6b109584-cfbe-45a9-b2e1-d267cf51b9be','C Software',new Date(),new Date(),95000),
    new Project('6b209584-cfbe-45a9-b2e1-d267cf51b9be','D Software',new Date(),new Date(),95000),
    new Project('6b209584-cfbe-45a9-b2e1-d267cf51b9be','E Software',new Date(),new Date(),95000),
    new Project('6b309584-cfbe-45a9-b2e1-d267cf51b9be','F Software',new Date(),new Date(),95000),
  ]


  // ************** Tree Table
  protected tableTitle! : string
  protected data! : any[]
  protected dataId! : { field:string,value?:any }
  protected subData! : any[]
  protected enableNestedTable = false;
  protected headerColumns! : HeaderColumn[]
  protected subHeaderColumns! : HeaderColumn[]


  // ************** Common Table
  protected tableTitleTest! : string
  protected dataTest! : any[]
  protected headerColumnsTest! : HeaderColumn[]


  ngOnInit(): void {
    this.setupTreeTable() // ************** Tree Table
    this.setupTableTest() // ************** Common Table
  }


  // ************** Tree Table
  private setupTreeTable() {
    this.tableTitle = 'Dynamic Tree Table'
    this.data = this.students
    this.headerColumns = this.convertObjectToHeaderColumns(new Student(),[])
    this.subHeaderColumns = this.convertObjectToHeaderColumns(new Project(),["dateStart"])
    this.dataId = { // importance for toggle sub table // ** the field should map same name pk of your main table
      field : 'uuid'
    }
  }

  protected setInitialData($event: any[]) {
    this.data = $event // bind data
  }

  protected setEditEvent($even : any) {
    console.log('get Edit')
  }

  protected setRemoveEvent($even : any) {
    console.log('get Remove')
  }

  protected setTreeTableEvent($event: any) {
    console.log('get TreeTable')
    this.dataId.value = $event.uuid // store uuid of student then search uuid of student with stUuid of project
    this.enableNestedTable = true
    this.subData = this.projects.filter(project => project.stUuid === this.dataId.value)
  }

  protected setCloseTreeTableEvent() {
    console.log('get CloseTreeTable')
    this.enableNestedTable = false
  }



  // ************** Common Table
  private setupTableTest() {
    this.tableTitleTest = 'Dynamic Table'
    this.dataTest = this.software
    this.headerColumnsTest = this.convertObjectToHeaderColumns(new Software(),[])
  }

  protected setInitialDataTest($event: any[]) {
    this.dataTest = $event // bind data
  }

  protected setEditEventTest($even : any) {
    console.log('get Edit')
    this.dataTest.forEach((item) => {
      let software = item
      if (software.name === $even.name) {
        software.name = 'test edited'
        software.size = 'test edit'
        software.type = 'test edited'
      }
    })
  }

  protected setRemoveEventTest($even : any) {
    console.log('get Remove')
    this.dataTest = this.dataTest.filter((item) => item.name !== $even.name)
  }



  // ************** Helpers Create Dynamic Columns
  private convertObjectToHeaderColumns(object: any, ignoreKeys: string[]): HeaderColumn[] {
    let headerColumns = []
    const objectKeys = Object.keys(object)
    for (let key of objectKeys) {
      if (ignoreKeys.indexOf(key) === -1) {
        headerColumns.push({field: key, header: key.toUpperCase()})
      }
    }
    if (ignoreKeys.indexOf('action') === -1) { // if -1 is mean not found
      headerColumns.push({field: 'action', header: 'action'.toUpperCase()})
    }
    return headerColumns
  }

}
