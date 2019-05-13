<template>
	<div class="wrap">
		<p>Welcome to the Teaching Supervision and Listening Evaluation System</p>
		<div class="login-wrap">
		    <Form ref="formInline" :model="formInline" :rules="ruleInline" inline>
		        <FormItem prop="user">
		            <Input v-model="formInline.user" placeholder="User number" size="large"  type="text">
		                <Icon type="ios-person-outline" slot="prepend"></Icon>
                    }
                    }
		            </Input>
		        </FormItem>
		        <FormItem prop="password">
		            <Input type="password" v-model="formInline.password" placeholder="Password" size="large">
		                <Icon type="ios-lock-outline" slot="prepend"></Icon>
		            </Input>
		        </FormItem>
		        <FormItem>
		            <Button type="submit" @click="handleSubmit('formInline')" size="large">Signin</Button>
		        </FormItem>
		    </Form>
	    </div>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                formInline: {
                    user: '',
                    password: ''
                },
                ruleInline: {
                    user: [
                        { required: true, message: 'Please fill in the user number', trigger: 'blur' }
                    
                    ],
                    password: [
                        { required: true, message: 'Please fill in the password.', trigger: 'blur' },
                        { type: 'string', min: 6, message: 'The password length cannot be less than 6 bits', trigger: 'blur' }
                    ]
                }
            }
        },
        methods: {
            handleSubmit(name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        this.$Message.success('Success!');
                           this.$router.push({path:`/sadmin`});
                    } else {
                        this.$Message.error('Fail!');
                    }

                })
            }
        }
    }
</script>
<style scoped >
.wrap{
	margin:0;
	padding:0;
	background-color:#ae6767;
	background-size: 100% 100%;
    height: 100%;
    position: fixed;
    top:0;
    width: 100%
}
.login-wrap{
	width:300px;
	height:400px;
	position:relative;
	top: 70px;
	left: 530px;
	
}
.wrap p{
	position:relative;
	top: 20px;
	left:30px;
	font-family: "Dextera";
    color:#fff;
    font-size:50px;
    font-weight:bold;
}
  .ivu-form-inline .ivu-form-item{
  	display:block;
  }
.ivu-form-item {
    margin-bottom:50px;
}


.ivu-form-item-error-tip{
    color: #140501;
}
.ivu-btn-primary {
    color: #d59696;
    background-color: #506e6b;
    border-color: #506e6b;
}

</style>

