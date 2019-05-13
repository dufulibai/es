<template>
    <div id="test">
    <i-button @click="modal7 = true">禁用右上角关闭（含Esc键）</i-button>
    <Modal
        title="对话框标题"
        v-model:visible="modal7"
        :closable="false">
        <p>对话框内容</p>
        <p>对话框内容</p>
        <p>对话框内容</p>
    </Modal>
    <i-button @click="modal8 = true">禁用遮罩层关闭</i-button>
    <Modal
        title="对话框标题"
        :visible.sync="modal8"
        :mask-closable="false">
        <p>对话框内容</p>
        <p>对话框内容</p>
        <p>对话框内容</p>
    </Modal>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                modal7: false,
                modal8: false,
            }
        }
    }
</script>
