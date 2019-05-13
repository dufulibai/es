<template>
    <div id="ct">
         <i-table border :content="self" :columns="columns7" :data="data6" :row-class-name="rowClassName"></i-table>
    </div>
</template>
<script>
    export default {
        props:['queryClaCourse'],
        data () {
            return {
                self: this,
                columns7: [
                    {
                        title: '操作',
                        key: 'action',
                        width: 150,
                        align: 'center',
                        render: (h, params) => {
                              return h('div', [
                                h('Button', {
                                  props: {
                                    type: 'primary',
                                    size: 'small'
                                  },
                                  style: {
                                    marginRight: '5px'
                                  },
                                  on: {
                                    click: () => {
                                      this.show(params.index)
                                    }
                                  }
                                }, '查看'),
                                h('Button', {
                                  props: {
                                    type:'error',
                                    size: 'small'
                                  },
                                  on: {
                                    click: () => {
                                      this.remove(params.index)
                                    }
                                  }
                                }, '删除')
                           ]);
                        }
                    }
                    
                ],
                data6:[],
                data7:[],
                dataTd:[],
                data8:this.queryClaCourse
            }
        },
        mounted:function(){

                      this.$http.get("../../../static/addCourse.json")
                       .then((response)=>{
                        this.data7 = response.data.th;
                        for(let item in this.data7){
                            this.columns7.unshift(this.data7[item]);
                        }
                        this.dataTd=response.data.td;
                        this.data6 =response.data.td; 
                      });
        },
        watch:{
            data8:function(newdata, olddata){
              if(newdata.length !=0){
               this.data6 = newdata;
              }else{
                this.data6 = this.dataTd;
              }
            }
        },
        methods: {
            remove (index) {
                this.data6.splice(index, 1);
            },
            rowClassName (row, index) {
                    return 'demo-table-info-row';
            } 
        
      }
}
</script>

<style scoped>
#ct{
width: 780px;
position: absolute;
top: 12px;
right: 20px;
border: 1px solid #040506;
}

    .ivu-table .demo-table-info-row td{
        background-color: #e8ebcc;
        color: #000;
    }
.ivu-table td, .ivu-table th{
    border-bottom: 1px solid #121518;
    border-right: 1px solid #121518;
}
.ivu-table th{
    background-color:#e8ebcc;
     color: #000;
}
.ivu-btn-primary {
    color: #000;
    background-color: #e8ebcc;
    border-color: #000;
}
.ivu-btn-error {
   color: #000;
    background-color: #e8ebcc;
    border-color: #000;
}
</style>