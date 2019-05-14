<template>
	<div id="sysAdmin">
			<div class="header">
				<span class="span1">系统管理员:李白</span>
				<span class="span2">退出</span>
			</div>
			<div class="body">
    		    <Tabs type="card" v-model="currentTab">
                    <TabPane v-for="item in tabs" v-bind:key="item.id" :label="item.label" :name="item.name">
                    </TabPane>
    		    </Tabs>
		    <span v-bind:is="currentTab"></span>
		    </div>
		    <div class="footer"></div>
	</div>
</template>
<script>
import teaTabCon from './teaTableCon/teaTabConIndex.vue'
import claScheTabCon from './claSchedule/claScheTabConIndex.vue'
    export default {
    	data(){
    		return{
                tabs:[
                       {label:"用户管理",name:"teaTabCon"},
                       {label:"課程表管理",name:"claScheTabCon"}
                     ],
    			currentTab:'claScheTabCon'
    		}
    	},
        components:{teaTabCon,claScheTabCon},
        methods:{
        
        }
    }
</script>
<style>
.body .ivu-tabs.ivu-tabs-card > .ivu-tabs-bar .ivu-tabs-tab-active {
    background: #e8ebcc;
    border-color: #080e1b;
    color: #f68375;
}
.body .ivu-tabs-nav {
    padding-left: 400px;
}
.body .ivu-tabs-nav-container:focus .ivu-tabs-tab-focused {
    border-color: #020509 !important;
}
.body .ivu-tabs.ivu-tabs-card > .ivu-tabs-bar .ivu-tabs-tab {
    background: #e8ebcc;
}
.body .ivu-tabs {
    top: -33px;
}
</style>
<style scoped>
#sysAdmin{
    position: fixed;
    top:0;
    width:100%;
    height:2000px;
    background-color:#e8ebcc;
}
 .header{
 	width:100%;
 	height:70px;
 	position:relative;
 	 border: 1px solid #d9d9bd;
 	 border-top:none;
 	border-color: #313131;
 }
 .header span{
 	display:inline-block;
    margin-right: 4px;
    padding: 5px 16px 4px;
    border: 1px solid #040912;
 	line-height: 1.5; 
    font-size: 14px;
    font-family:"Microsoft YaHei";
    position:relative; 
    color: #05070e;
    text-align: center;
 }
  .header .span1{
    top: 17px;
    width: 140px;
    left: -466px;
    border-radius: 20px;
  }
  .header .span2{
    top: 37px;
    width: 73px;
    right: -400px;
    border-radius: 40px;
    cursor: pointer;
  }
</style>
