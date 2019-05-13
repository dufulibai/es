<template>
    <div id="tt">
         <i-table border :content="self" :columns="columns7" :data="data6" :row-class-name="rowClassName"></i-table>
    </div>
</template>
<script>
    export default {
        props:['queryuser'],
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
                                      this.Modify(params.index)
                                    }
                                  }
                                }, '修改'),
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
                data8:this.queryuser
            }
        },
        mounted:function(){

                      this.$http.get("../../../static/addTea.json")
                       .then((response)=>{
                        this.data7 = response.data.th;
                        for(let item in this.data7){
                            this.columns7.unshift(this.data7[item]);
                        }
                        this.dataTd=response.data.td;
                        this.data6 =response.data.td;
                        console.log("6");
                        console.log(this.data6); 
                       for(let i in this.data6){
                            this.data6[i].role = this.data6[i].role.filter(item => item.checked).map(item => item.value)
                           }
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
            },
            Modify(index){
              console.log("xx");
              console.log(this.dataTd[index]);
                 this.$emit("sendModify",this.dataTd[index]);
                //  this.$Modal.info({
                //     title: '用户信息',
                //     content: `姓名：${this.data6[index].name}<br>年龄：${this.data6[index].age}<br>地址：${this.data6[index].address}`
                // })
            }
        
      }
}
</script>

<style scoped>
#tt{
  width: 700px;
position: absolute;
top: 131px;
right: 20px;
border: 1px solid #040506;
}

.ivu-table th {
    height: 40px;
    white-space: nowrap;
    overflow: hidden;
    background-color: #e8ebcc;
  }
.ivu-table {
    color: #05080e;
}
.ivu-table-border td, .ivu-table-border th {
    border-right: 1px solid #050c12;
}
.ivu-table td, .ivu-table th {
    min-width: 0;
    height: 48px;
    box-sizing: border-box;
    text-align: left;
    text-overflow: ellipsis;
    vertical-align: middle;
    border-bottom: 1px solid #020911;
}
.ivu-table td {
    background-color: #e8ebcc;
    transition: background-color .2s ease-in-out;

}
.ivu-btn-primary {
    color: #4e6fe3;
    background-color: #e8ebcc;
    border-color: #2275c8;

}
.ivu-btn-error {
    color: #d42828;
    background-color: #e8ebcc;
    border-color: #ed4014;
}
</style>