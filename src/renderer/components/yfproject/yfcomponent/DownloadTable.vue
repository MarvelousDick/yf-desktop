<template>
    <div>
        <v-alert v-model="alert" type="success" dismissible style="width: 100%">
            下载完毕
        </v-alert>

    <v-layout justify-center align-center style="padding-top: 13%">

        <v-btn color="success" @click="getExcel">下载</v-btn>
    </v-layout>
    </div>
</template>

<script>
    import {downloadExl} from '@/components/JsFile/DownloadTable.js'

    export default {
        name: "DownloadTable",

        data() {
            return {
                alert: false
            }
        },

        computed: {
            // tableContent() {
            //     return this.$store.state['CrystalStick'].previewExcelJson
            // }
        },

        mounted() {

            console.log(90)
        },

        methods: {
            getExcel() {
                let self = this
                let param = new URLSearchParams()
                param.append('sql', '00000')
                self.$http({
                    method: 'post',
                    // url: 'http://ethermorganapi.s1.natapp.cc/yfprod/getdatadesktop',
                    url: 'http://ethermorganapi.s1.natapp.cc/yfprod/getdatadesktop',
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
                    },
                    data: param,
                    timeout: 90000,
                }).then(function (response) {
                    // console.log(response.data)
                    console.log(response.data['productNumber'][0]['countnumber'])
                    // console.log(response.data['productList'])
                    // self.tableContent = response.data['productList']
                    let excelJson = response.data['productList']

                    downloadExl(excelJson)
                    // self.alert = true

                }).catch(function (error) {
                    console.log(error)
                })
            }
        }


    }
</script>

<style scoped>

</style>