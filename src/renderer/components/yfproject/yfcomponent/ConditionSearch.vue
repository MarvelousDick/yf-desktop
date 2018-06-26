<template>
    <v-layout>
        <v-btn
                fab
                bottom
                right
                color="pink"
                dark
                fixed
                @click.stop="dialog = !dialog"
        >
            <v-icon>add</v-icon>
        </v-btn>
        <v-dialog v-model="dialog" width="800px">
            <v-card>
                <v-card-title
                        class="grey lighten-4 py-4 title"
                >
                    条件查询
                </v-card-title>
                <v-container grid-list-sm class="pa-4">
                    <v-layout v-for="item in filter" row wrap>

                        <v-layout row wrap>
                            <v-flex xs4>
                                <v-select
                                        :items="column"
                                        item-text="text"
                                        item-value="value"
                                        v-model="item.column"
                                        label="字段"
                                ></v-select>
                            </v-flex>
                            <v-flex xs2>
                                <v-select
                                        :items="condition"
                                        v-model="item.condition"
                                        label="符号"
                                ></v-select>
                            </v-flex>
                            <v-flex xs2>
                                <v-text-field
                                        label="数值"
                                        v-model="item.number"
                                ></v-text-field>
                            </v-flex>
                        </v-layout>

                    </v-layout>

                </v-container>
                <v-card-actions>
                    <v-btn flat color="primary" @click="addCondition">More</v-btn>
                    <v-spacer></v-spacer>
                    <v-btn flat color="primary" @click="dialog = false">Cancel</v-btn>
                    <v-btn flat @click="queryResult">Save</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>

    </v-layout>
</template>

<script>
    // import globalVar from '@/components/JsFile/GlobalVar.js'
    import {appendSql} from '@/components/JsFile/CheckTableFun.js'

    export default {
        data: () => ({
            dialog: false,
            drawer: null,
            e1: null,
            column: [
                {text: ' 编号 ', value: 'id'},
                {text: '晶体号', value: 'line_id'},
                {text: '晶棒号', value: 'rod_id'},
                {text: '掏棒评估毛长', value: 'crow_est_rough_len'},
                {text: '掏棒评估净长', value: 'crow_est_exact_len'},
                {text: '掏棒日期', value: 'crow_date'},
                {text: '掏棒操作', value: 'crow_operator'},
                {text: '掏棒总长（mm）', value: 'crow_total_len'},
                {text: '掏棒长度', value: 'crow_stick_len'},
                {text: '掏棒机台号', value: 'crow_mac_id'},
                {text: '锯床去头尾日期', value: 'cut_date'},
                {text: '锯床去头尾操作', value: 'cut_operator'},
                {text: '锯床去头尾长度（mm)', value: 'cut_len'},
                {text: '锯床去头尾返工前长度', value: 'cut_pre_len'},
                {text: '锯床去头尾气泡（mm)', value: 'cut_bub_len'},
                {text: '锯床去头尾晶界（mm)', value: 'cut_cry_len'},
                {text: '锯床去头开裂', value: 'cut_crack'},
                {text: '锯床去头裂纹（mm)', value: 'cut_crack_len'},
                {text: '平磨日期', value: 'rub_date'},
                {text: '平磨操作', value: 'rub_operator'},
                {text: '平磨长度（mm)', value: 'rub_len'},
                {text: '滚磨日期', value: 'roll_date'},
                {text: '滚磨操作', value: 'roll_operator'},
                {text: '滚磨长度', value: 'roll_len'},
                {text: 'OF面日期', value: 'of_date'},
                {text: 'OF面操作', value: 'of_operator'},
                {text: 'OF面长度', value: 'of_len'},
                {text: 'OF面规格', value: 'of_format'},
                {text: 'OF面崩边（mm）', value: 'of_collap'},
                {text: '终检气泡', value: 'final_bub'},
                {text: '终检开裂', value: 'final_crack'},
                {text: '终检日期', value: 'final_date'},
                {text: '终检总长（mm）', value: 'final_total_len'},
                {text: '终检净长（mm）', value: 'final_exact_len'},
                {text: '备注', value: 'add_info'}
            ],
            condition: [
                {text: '小于', value: 'less'},
                {text: '等于', value: 'equal'},
                {text: '大于', value: 'more'}
            ],
            test: 's5',
            filter: [
                {column: 's1', condition: '小于', number: null}
                // {column: 's2', condition: '等于', number: null}
            ],

        }),

        name: "ConditionSearch",

        methods: {
            printValue() {
                // console.log(this.filter)
                console.log(this.filter)
            },
            addCondition() {
                let condition = {column: null, condition: null, number: null}
                this.filter.push(condition)
            },
            queryResult() {
                let sqlSentence = appendSql(this.filter)
                // console.log(sqlSentence)
                sqlSentence[0] = "select * from wechat_company.qywx_crystal_stick_statistics where cut_len>200 and cut_len<240"
                sqlSentence[1] = "select count(*) countNumber from wechat_company.qywx_crystal_stick_statistics where cut_len>200 and cut_len<240"

                let queryList = sqlSentence[0]
                let queryNumber = sqlSentence[1]

                let self = this
                let param = new URLSearchParams()

                param.append("queryList", queryList)
                param.append("queryNumber", queryNumber)

                self.$http({
                    method: 'post',
                    url: 'http://ethermorganapi.s1.natapp.cc/yfprod/getresult',
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
                    },
                    data: param
                }).then(function (response) {
                    console.log(response.data['productList'])
                    self.$store.commit('SET_previewExcelJson', response.data['productList'])
                    self.dialog = false
                }).catch(function (error) {
                    console.log(error)
                })
            }
        }
    }
</script>

<style scoped>

</style>