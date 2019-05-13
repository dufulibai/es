<template>
	<div id="courseTime">
	    <i-button @click="handleBtn">{{btnCon}}</i-button>
	    <Modal
	        title="请选择上课时间"
	        v-model:visible="modal7"
	        :mask-closable="false"
	        @on-ok="selecrRes">
	      <table class="tableBox">
			<thead>
				<tr>
					<td class="smallBox"></td>
					<td v-for="item of weeks" class="smallBox">{{item}}</td>
				</tr>
			</thead>
			<tbody>
				<tr v-for="item1 of lesson">
					<td class="smallBox">{{item1}}</td>
					<td class="smallBox"  :class = "{'bcolor':isItem1.findIndex((value, index, arr) => {
                              return value == n+''+item1;
                    }) != -1} " v-for="n of 7"  @click="addTime(item1,n)"></td>
				</tr>
			</tbody>
		</table>
	    </Modal>
    </div>
</template>
<script>
	export default{
		data(){
			return {
				weeks:["周一","周二","周三","周四","周五","周六","周日"],
				lesson:["1","2","3","4","5","6","7","8","9","10"],
				time:[],
				smallB:'smallBox',
				isItem1:[],
				 modal7: false,
                modal8: false,
                btnCon:'请选择上课时间',
                obj:{}
			}
		},
		methods:{
			addTime(item1,n){
				let option = {'week':n,'lesson':item1};
				var pos = -1;
				this.time.forEach((v,index)=>{
					if(option.week == v.week && option.lesson == v.lesson){
                          pos = index;
					}
				})
				if(pos==-1){
				    	this.isItem1.push(n+''+item1);
                        this.time.push(option);
			    }else{
               
                    this.isItem1.splice(this.isItem1.findIndex((value, index, arr) => {
					  return value == n+''+item1;
					}),1);
			         this.time.splice(pos,1);
			   }

			   
			},
			handleBtn(){
                   this.modal7 = true;
                  

			},
			selecrRes(){
                this.obj={};
				for(let i of this.time){
					if(this.obj[this.weeks[i.week-1]] == undefined){
						this.obj[this.weeks[i.week-1]] = i.lesson+' ';
					}else{
						this.obj[this.weeks[i.week-1]] +=i.lesson+' ';
					}
                  }
                   this.btnCon=' ';
                   for(let item in this.obj){
                        this.btnCon += item+': '+this.obj[item]+'节; ';
                   }
                   if(this.btnCon==' '){
                    	this.btnCon='请选择上课时间';
                   }
                  this.$emit('sendTime',this.time);
			}
	}
}
</script>
<style scoped>

.smallBox{
   width:25px;
   height:25px;
   border-bottom: 1px solid #000;
   border-right: 1px solid #000;
   cursor:pointer;
}
.bcolor{
  background:green;
}
</style>