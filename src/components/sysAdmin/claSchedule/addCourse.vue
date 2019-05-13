<template>
    <div class="addCourse">
            <i-form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
                <Form-item label="工号" prop="workNum">
                    <i-input v-model:value="formValidate.workNum" placeholder="请输入工号"></i-input>
                </Form-item>
                <Form-item label="姓名" prop="name">
                    <i-input v-model:value="formValidate.name" placeholder="请输入姓名"></i-input>
                </Form-item>
                <Form-item label="所授课程" prop="course">
                    <i-input v-model:value="formValidate.courseN" placeholder="请输入课程名"></i-input>
                </Form-item>
                <Form-item label="上课时间" prop="courseT">
                    <courseT @sendTime='receptTime'></courseT>
                </Form-item>
                <Form-item label="上课班级" prop="class">
                     <i-input v-model:value="formValidate.profess" placeholder="请输入专业"></i-input>
                     <i-input v-model:value="formValidate.grade" placeholder="请输入年级"></i-input>
                     <i-input v-model:value="formValidate.class" placeholder="请输入班级"></i-input>
                </Form-item>
                <Form-item>
                    <i-button type="success"  @click="handleSubmit('formValidate')">提交</i-button>
                    <i-button color="ghost" @click="handleReset('formValidate')" style="margin-left:8px">重置</i-button>
                </Form-item>
            </i-form>
    </div>
</template>
<script>
import courseT from './courseTime.vue'
    export default {
        data () {
            return {
                formValidate: {
                    workNum:'',
                    name: '',
                    courseN: '',
                    profess: '',
                    grade: '',
                    class: '',
                    courseT:[]
                },
                ruleValidate: {
                    workNum: [
                        { required: true, message: '工号不能为空', trigger: 'blur' }
                    ],
                    name: [
                        { required: true, message: '姓名不能为空', trigger: 'blur' }
                    ],
                    courseN: [
                        { required: true, message: '课程名不能为空', trigger: 'blur' }
                    ],
                    profess: [
                        { required: true, message: '专业不能为空', trigger: 'blur' }
                    ],
                    grade: [
                        { required: true, message: '年级不能为空', trigger: 'blur' }
                    ],
                    class: [
                        { required: true, message: '班级不能为空', trigger: 'blur' }
                    ]
                }
            }
        },
        methods: {
            handleSubmit (name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        this.$Message.success('提交成功!');
                        console.log(this.courseT);
                    } else {
                        this.$Message.error('表单验证失败!');
                    }
                })
            },
            handleReset (name) {
                this.$refs[name].resetFields();
            },
            receptTime(data){
                  this.courseT = data;
            }
        },
        components:{courseT},
    }
</script>
<style scoped>
.addCourse{
    width:400px;
    height:470px;
    margin-top: -21px;
    margin-left:60px;
    border:1px solid #000;
    padding-top:50px;
    padding-left:20px;
    padding-right:20px;
    border-radius:20px;
}
</style>
