<template>
	<div id="claCon">
		 <div>
        	<span class="addT t1" @click="handleAdd" v-bind:class="{addT1:isaddT1}">添加课程表
        	</span>
        	<span class="addT t2" v-bind:class="{addT1:isaddT2}" @click="handleQuery">查询课程</span> 
	        <addCourse v-if="showAddCourse"></addCourse>
            <queryCourse v-if="showQuery" @sendquery="query"></queryCourse>
	        <courseTable v-if="showTable" :queryClaCourse="queryClaCourse"></courseTable>
        </div>
	</div>
</template>
<script>
import addCourse from './addCourse.vue'
import queryCourse from './queryCourse.vue'
import courseTable from './courseTable.vue'
export default {
	data(){
       return {
           showQuery:false,
    	   showAddCourse:true,
    	   showTable:true,
    	   isaddT1:true,
		   isaddT2:false,
		   dataTh:[],
		   dataTd:[],
		   queryClaCourse:[]	
       }
	},
	components:{addCourse,queryCourse,courseTable},
	 mounted:function(){
                this.$http.get("../../../static/addCourse.json")
                    .then((response)=>{
                        this.dataTh = response.data.th;
                        this.dataTd =response.data.td; 
                    });

        },
	methods:{
		   handleAdd() {
        		this.isaddT1=true;
                this.isaddT2=false;
            	this.showQuery=false;        		
        		this.showAddCourse = true;
        		
        	},
        	handleQuery(){
        		this.isaddT1=false;
                this.isaddT2=true;
        		this.showQuery=true;        		
        		this.showAddCourse = false; 		
        		
        	},
		query(dataWorkNum,dataName,dataCourse){
               this.queryClaCourse.splice(0,this.queryClaCourse.length);
               if (dataWorkNum != '') {
                     for(let item in this.dataTd){
                    	if (dataWorkNum == this.dataTd[item].workNum) {
                                this.queryClaCourse.push(this.dataTd[item]);
                    	}
                    }
                   
               }
               if(dataName != ''){
               	  if (this.queryClaCourse.length>0) {
	               	   for(let item in this.queryClaCourse){
	                    	if (dataName != this.queryClaCourse[item].name) {
	                                this.queryClaCourse.splice(item,1);
	                    	}
	                    }
                  }else{
                  	 for(let item in this.dataTd){
                    	if (dataName == this.dataTd[item].name) {
                                this.queryClaCourse.push(this.dataTd[item]);
                    	}
                    }
                  }
               }
                
               if(dataCourse != ''){
               	  if (this.queryClaCourse.length>0) {
	               	   for(let item in this.queryClaCourse){
	                    	if (dataCourse != this.queryClaCourse[item].course) {
	                                this.queryClaCourse.splice(item,1);
	                    	}
	                    }
                  }else{
                  	 for(let item in this.dataTd){
                    	if (dataCourse == this.dataTd[item].course) {
                                this.queryClaCourse.push(this.dataTd[item]);
                    	}
                    }
                  }
               }
               if(this.queryUser.length==0 && (dataWorkNum !='' || dataName !='' ||dataCourse!='')){
               	   alert('查无此條信息');
               }
               
        	}
	}
}
</script>
<style scoped>
	  .ivu-tabs.ivu-tabs-card > .ivu-tabs-bar{
  	  background: #000;
  	border: 1px solid #000;
  }
  .ivu-tabs.ivu-tabs-card > .ivu-tabs-bar .ivu-tabs-tab-active{
  
    color:#000;
    border-color:#000;
    background: #e8ebcc;
  }
  .ivu-tabs.ivu-tabs-card > .ivu-tabs-bar .ivu-tabs-tab{
  	border: 1px solid #0c0e14;
  	border-bottom:none;
  }
  .ivu-tabs-nav .ivu-tabs-tab:hover {
    color: #0c0e14;
}
.ivu-tabs-nav-container:focus .ivu-tabs-tab-focused {
    border-color: #02080e !important;
}
.ivu-tabs-nav {
    padding-left: 400px;
    }
 #claCon{
 	position:relative;
 }
.addT{
	display: inline-block;
position: relative;
top: -20px;
width: 100px;
height: 35px;
padding-top: 7px;
width: 78px;
border:1px solid #000;
border-radius:10px 10px 0 0;
border-bottom:none;
z-index:2;
font-size:15px;
cursor:pointer;
}
.addT.t1{
	left: -530px;
}
.addT.t2{
	left: -520px;
}
.addT1{
	background:#e8ebcc;
}
</style>