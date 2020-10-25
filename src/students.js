var app=new Vue({
    el:"#app",
    data:{
        piece:"",
        choose:"Yes",
         nname:"",
        nsurnname:"",
        ngroup:"",
        nriknarod:"",
        nzdav:"",
        students :[
        {   
            'surname':"#1 ",
            'name': "#1",
            'group': "RPZ 17 2/9",
            'riknarod':"00 00 0000",
            'zdav':true,
            'id':0
        },
         {   
            'surname':"#2 ",
            'name': "#2 ",
            'group': "RPZ 17 2/9",
            'riknarod':"00 00 0000",
            'zdav':false,
            'id':1
        },
        {
            'surname':"Terkin ",
            'name': "Vasya",
             'group': "RPZ 17 2/9",
            'riknarod':"00 00 0000",
            'zdav':false,
            'id':2
        },
        {
            'surname':"#3 ",
            'name': "#3 ",
            'group': "RPZ 17 2/9",
            'riknarod':"00 00 0000",
            'zdav':true,
            'id':3
        },
    ],
     arsort:[],
    },
    methods:{
        del:function(id){
            this.students.splice(id,1);
            for (let i=0;i<this.students.length;i++){
                if (this.students[i].id>id){
                     this.students[i].id-=1;
                }
            }
        },
add:function(){
 this.students.push({
 'surname':this.nsurnname,
 'name': this.nnname,
 'group': this.ngroup,
 'riknarod':this.nriknarod,
 'zdav':this.nzdav,
 'id':this.students.length
})
}
  }   
 })