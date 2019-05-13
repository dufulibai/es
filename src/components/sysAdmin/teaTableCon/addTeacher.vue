<template>
	<div class="addtea">
	    <Form ref="formValidate" v-model="formValidate"  :label-width="80">
	        <FormItem label="姓名" prop="name">
	            <Input v-model="formValidate.name" placeholder="Enter your name"></Input>
	        </FormItem>
	        <FormItem label="工号" prop="workNum">
	            <Input v-model="formValidate.workNum" placeholder="Enter your work number"></Input>
	        </FormItem>
	        <FormItem label="性别" prop="gender">
	            <RadioGroup v-model="formValidate.gender">
	                <Radio label="male">Male</Radio>
	                <Radio label="female">Female</Radio>
	            </RadioGroup>
	        </FormItem>
             <FormItem label="角色">
                 <span v-for="item in formValidate.role">
                          <input type="checkbox" :value="item.value" v-model="item.checked" />{{item.value}}
                 </span>
             </FormItem>
	         <FormItem label="电话号码" prop="phone">
	            <Input v-model="formValidate.phone" placeholder="Enter your phone number"></Input>
	        </FormItem>
	        <FormItem>
	            <Button type="primary" @click="handleSubmit('formValidate')">Submit</Button>
	            <Button @click="handleReset('formValidate')" style="margin-left: 8px">Reset</Button>
	        </FormItem>
	    </Form>
    </div>
</template>
<script>
    export default {
        props:['modifyInfo'],
        data () {
            return {
                formValidate: {
                    name: '',
                    workNum: '',
                    gender: '',
                    phone:'',
                    role: [{checked:false,value:'老师'},{checked:false,value:'督导'}]
                },
            }
        },
        watch:{
             modifyInfo:function(newdata, olddata){
               for(let i in this.formValidate.role){
                   this.formValidate.role[i].checked = false;
               }
               this.formValidate.name = newdata.name;
               this.formValidate.workNum = newdata.workNum;
               this.formValidate.gender = newdata.gender;
               this.formValidate.phone = newdata.phone;

               for(let i in newdata.role){
                  this.formValidate.role.find(item => item.value === newdata.role[i]).checked = true;
               }
              
            }
        },
        methods: {
            handleSubmit (name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        this.$Message.success('Success!');
                        console.log('success');
                        console.log(this.formValidate);
                        var formObj = JSON.stringify(this.formValidate);
                        axios.get("http://localhost:8080/static/addTea.json",formObj).then(function(){
                            console.log(response);
                        }).catch(function(error){
                            console.log(error);
                        })
                    } else {
                        this.$Message.error('Fail!');
                    }
                });
            },
            handleReset (name) {
                this.$refs[name].resetFields();
            }
        }
    }
</script>
<style scoped>
.addtea{
	width:400px;
	height:400px;
	margin-top: 16px;
	margin-left:60px;
	border:1px solid #000;
	padding-top:50px;
	padding-left:20px;
	padding-right:20px;
	border-radius:20px;
}
</style>