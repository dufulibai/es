<template>
	<div id="queryCourse">
			<div class="item">
				<label>工号:</label>
			    <i-input v-model="value1" placeholder="请输入工号" style="width: 200px;margin:20px;"></i-input>
		    </div>
		    <div class="item">
		    	<label>姓名:</label>
			    <i-input v-model="value2" placeholder="请输入姓名" style="width: 200px;margin:20px;"></i-input>
		    </div>
		    <div class="item">
		    	<label>课程名称:</label>
			    <i-input v-model="value3" placeholder="请输入课程名称" style="width: 200px;margin:20px;"></i-input>
		    </div>
		    <i-button type="success" style="margin:20px" @click="query">查询</i-button>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                value1: '',
                value2:'',
                value3:''
            }
        },
        methods:{
        	query(){
        		this.$emit("sendquery",this.value1,this.value2,this.value3);
        	}
        }
    }
</script>
<style scoped>
#queryCourse{
	width:400px;
	height:400px;
	margin-top: -21px;
	margin-left:60px;
	border:1px solid #000;
	padding-top:50px;
	padding-left:20px;
	padding-right:20px;
	border-radius:20px;
}
</style>