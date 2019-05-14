<template>
	<div id="teaCon">
		 <div>
        	<span class="addT t1" @click="handleAdd" v-bind:class="{addT1:isaddT1}">添加用户
        	</span>
        	<span class="addT t2" v-bind:class="{addT1:isaddT2}" @click="handleQuery">查询用户</span> 
	        <addTea v-if="showAddtea" v-bind:modifyInfo="modifyInfo"></addTea>
	        <queryTea v-if="showQuery" @sendquery="query"></queryTea>
	        <teaTable v-if="showTable" :queryuser="queryUser" @sendModify="modify"></teaTable>
        </div>
	</div>
</template>
<script>
import teaTable from './teaTable.vue'
import queryTea from './queryTea.vue'
import addTea from './addTeacher.vue'
	 export default {
	 data(){
    		return{
    			showQuery:false,
    			showAddtea:true,
    			showTable:true,
    			isaddT1:true,
    			isaddT2:false,
    			username:'李白',  
    			dataTh:[],
    			dataTd:[],
    			queryUser:[],
          modifyInfo:{}
    		}
    	},
    	 mounted:function(){
                this.$http.get("../../../static/addTea.json")
                    .then((response)=>{
                        this.dataTh = response.data.th;
                        this.dataTd =response.data.td; 
                        for(let i in this.dataTd){
                            this.dataTd[i].role = this.dataTd[i].role.filter(item => item.checked).map(item => item.value)

                           }
                    });

        },
    	components:{teaTable,queryTea,addTea},
        methods:{
        	handleAdd() {
        		this.isaddT1=true;
                this.isaddT2=false;
            	this.showQuery=false;        		
        		this.showAddtea = true;	
        	},
        	handleQuery(){
        		this.isaddT1=false;
            this.isaddT2=true;
        		this.showQuery=true;        		
        		this.showAddtea = false; 		
        		
        	},
          modify(infoObj){
              this.modifyInfo = infoObj;
              console.log(this.modifyInfo);
          },
        	query(dataWorkNum,dataName,dataRole){

               this.queryUser.splice(0,this.queryUser.length);

                 if (dataWorkNum != '') {
                     for(let item in this.dataTd){
                      if (dataWorkNum == this.dataTd[item].workNum) {
                                this.queryUser.push(this.dataTd[item]);
                      }
                    }
                   
               }
               if(dataName != ''){
                  if (this.queryUser.length>0) {
                     for(let item in this.queryUser){
                        if (dataName != this.queryUser[item].name) {
                                  this.queryUser.splice(item,1);
                        }
                      }
                  }else{
                     for(let item in this.dataTd){
                      if (dataName == this.dataTd[item].name) {
                                this.queryUser.push(this.dataTd[item]);
                      }
                    }
                  }
               }
                
               if(dataRole != ''){
                
                  if (this.queryUser.length>0) {
                     for(let item in this.queryUser){
                        let flag = 0;
                      for(let item1 in this.queryUser[item].role){
                         if (dataRole == this.queryUser[item].role[item1]) {
                                 flag = 1;
                          }
                       }
                       if(flag == 0){
                             this.queryUser.splice(item,1);
                       }
                      }
                  }else{
                     for(let item in this.dataTd){
                      for(let item1 in this.dataTd[item].role){
                         if (dataRole == this.dataTd[item].role[item1]) {
                                this.queryUser.push(this.dataTd[item]);
                         }
                      }
                     
                    }
                  } 
               }
               if(this.queryUser.length==0 && (dataWorkNum !='' || dataName !='' ||dataRole!='')){ 
               	   alert('查无此人');
               }
               
        	}
        }
    }
</script>
<style scoped>


.addT{
	display: inline-block;
position: absolute;
top: 100px;
width: 100px;
height: 35px;
padding-top: 7px;
width: 72px;
border:1px solid #000;
border-radius:10px 10px 0 0;
border-bottom:none;
z-index:2;
font-size:15px;
cursor:pointer;
}
.addT.t1{
	left: 80px;
}
.addT.t2{
	left: 160px;
}
.addT1{
	background:#e8ebcc;
}
</style>