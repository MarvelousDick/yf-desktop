<template>
    <div style="width: 100%;">
        <input type="file" @change="importFile"/>
        <v-btn color="success"
               @click="upLoad"

        >预览
        </v-btn>
        <div id="demo"></div>
        <router-view name="tableContent"></router-view>
        <!--<iteratorcontent></iteratorcontent>-->
        <!--<tablecontent></tablecontent>-->
    </div>
</template>

<script>

    import {excelToJson, fileListToJsonArray} from '@/components/JsFile/ExecuteExcel.js'
    // import globalVar from '@/components/JsFile/GlobalVar.js'
    import {getSonFiles} from '@/components/JsFile/ReturnFileList.js'
    import {excelJsonListToServerJsonList} from '@/components/JsFile/CheckTableFun.js'
    import tableContent from '@/components/yfproject/yfcomponent/TableContent.vue'
    import iteratorContent from '@/components/yfproject/yfcomponent/IteratorContent.vue'


    export default {
        name: "StickTable",

        data() {
            return {
                excelFile: null,
                excelFileListAddress: 'D:\\Applet\\WebProjectStorage\\Sample'
            }
        },

        components: {
            'tablecontent': tableContent,
            'iteratorcontent': iteratorContent
        },

        methods: {
            upLoad() {

                this.$store.commit('SET_previewExcelJson', excelJsonListToServerJsonList(this.$store.state['CrystalStick'].excelFileJson))
                // globalVar.previewExcelJson = excelJsonListToServerJsonList(globalVar.excelFileJson)
                console.log(this.$store.state['CrystalStick'].previewExcelJson)
                this.$router.push({name: 'TableContent'})
            },

            importFile(e) {
                // location.reload()
                self = this
                return new Promise(function (resolve, reject) {
                    self.excelFile = e.target
                    excelToJson(self.excelFile)
                    resolve('666')
                }).then(function (value) {
                    // console.log(value)
                    //使用while判定是否有值，如果有，则跳出
                    setTimeout(function () {
                        // console.log(globalVar.excelFileJson)
                        // console.log(globalVar.previewExcelJson)
                        //转换成globalVar.tableHead和globalVar.tableHead
                    }, 2000)
                });

            },

            importFileList() {
                // globalVar.excelFileNameArray = getSonFiles(this.excelFileListAddress)
                this.$store.commit('SET_excelFileJsonArray', fileListToJsonArray(this.$store.state['CrystalStick'].excelFileNameArray))
                // globalVar.excelFileJsonArray = fileListToJsonArray(globalVar.excelFileNameArray)
                // console.log(globalVar.excelFileJsonArray)
                // globalVar.previewExcelJson = excelJsonListToServerJsonList(globalVar.excelFileJson)
            }

        }

    }
</script>

<style scoped>
    * {
        overflow-x: hidden;
    }
</style>