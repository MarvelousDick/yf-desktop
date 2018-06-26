<template>
    <v-layout justify-center align-center style="padding-top: 13%">
        <input type="file" @change="importFile"/>
        <v-btn color="success"
               @click="upLoad"

        >上传
        </v-btn>
    </v-layout>
</template>

<script>

    import {excelToJson, fileListToJsonArray} from '@/components/JsFile/ExecuteExcel.js'
    // import globalVar from '@/components/JsFile/GlobalVar.js'
    import {getSonFiles} from '@/components/JsFile/ReturnFileList.js'
    import {excelJsonListToServerJsonList} from '@/components/JsFile/CheckTableFun.js'
    import tableContent from '@/components/yfproject/yfcomponent/TableContent.vue'
    import iteratorContent from '@/components/yfproject/yfcomponent/IteratorContent.vue'

    export default {
        name: "UpLoadPage",

        data() {
            return {excelFile: null}
        },
        methods: {
            upLoad() {
                let self = this
                self.$store.commit('SET_previewExcelJson', excelJsonListToServerJsonList(self.$store.state['CrystalStick'].excelFileJson))
                // globalVar.previewExcelJson = excelJsonListToServerJsonList(globalVar.excelFileJson)
                console.log(self.$store.state['CrystalStick'].previewExcelJson)

                let param = new URLSearchParams()
                param.append("excelFileJsonArray", JSON.stringify(self.$store.state['CrystalStick'].previewExcelJson))
                // param.append('excelFileJsonArray', JSON.stringify(globalVar.previewExcelJson))

                self.$http({
                    method: 'post',
                    url: 'http://ethermorganapi.s1.natapp.cc/yfprod/savedatafromexcel',
                    // url: 'localhost:356/yfprod/getdatafromexcel',
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
                    },
                    data: param
                }).then(function (response) {
                    console.log(response)
                }).catch(function (error) {
                    console.log(error)
                })

                // this.$router.push({name: 'TableContent'})
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

                // console.log(globalVar.excelFileJsonArray)
                // globalVar.previewExcelJson = excelJsonListToServerJsonList(globalVar.excelFileJson)
            }

        }
    }
</script>

<style scoped>

</style>