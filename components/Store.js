import { action, computed, makeObservable, observable } from "mobx";

class ListStore{
    list=[
        {id:1,name:'Santoor'},
        {id:2,name:'Dettol'},
        {id:3,name:'Savlon'},
        {id:4,name:'Park Avenue'}
      ]
    constructor(){
        makeObservable(this,{list:observable,addList:action,deleteList:action,count:computed})
    }
    addList(name){
        this.list=[...this.list,{...name,id:Math.random()}]
    }
    deleteList(id){
        this.list=this.list.filter(ele=>ele.id!==id)
    }
    get count(){
        return this.list.length;
    }
}
export const Store= new ListStore();