<template>
    <v-layout>
        <v-card>
            <v-data-table
                    :headers="tableHead"
                    :items="tableContent"
                    header-text="text"
                    :rows-per-page-items="[12,25]"
                    :loading="loading"
                    sort-icon="mdi-menu-down"
            >
                <v-progress-linear slot="progress" color="blue" height="3.82" indeterminate></v-progress-linear>
                <template slot="items" slot-scope="props">
                    <td>{{ props.item.id }}</td>
                    <td>{{ props.item.line_id }}</td>
                    <td>{{ props.item.rod_id }}</td>
                    <td>{{ props.item.crow_est_rough_len }}</td>
                    <td>{{ props.item.crow_est_exact_len }}</td>
                    <td>{{ props.item.crow_date }}</td>
                    <td>{{ props.item.crow_operator }}</td>
                    <td>{{ props.item.crow_total_len }}</td>
                    <td>{{ props.item.crow_stick_len }}</td>
                    <td>{{ props.item.crow_mac_id }}</td>
                    <td>{{ props.item.cut_date }}</td>
                    <td>{{ props.item.cut_operator }}</td>
                    <td>{{ props.item.cut_len }}</td>
                    <td>{{ props.item.cut_pre_len }}</td>
                    <td>{{ props.item.cut_bub_len }}</td>
                    <td>{{ props.item.cut_cry_len }}</td>
                    <td>{{ props.item.cut_crack }}</td>
                    <td>{{ props.item.cut_crack_len }}</td>
                    <td>{{ props.item.rub_date }}</td>
                    <td>{{ props.item.rub_operator }}</td>
                    <td>{{ props.item.rub_len }}</td>
                    <td>{{ props.item.roll_date }}</td>
                    <td>{{ props.item.roll_operator }}</td>
                    <td>{{ props.item.roll_len }}</td>
                    <td>{{ props.item.of_date }}</td>
                    <td>{{ props.item.of_operator }}</td>
                    <td>{{ props.item.of_len }}</td>
                    <td>{{ props.item.of_format }}</td>
                    <td>{{ props.item.of_collap }}</td>
                    <td>{{ props.item.final_bub }}</td>
                    <td>{{ props.item.final_crack }}</td>
                    <td>{{ props.item.final_date }}</td>
                    <td>{{ props.item.final_total_len }}</td>
                    <td>{{ props.item.final_exact_len }}</td>
                    <td>{{ props.item.add_info }}</td>
                </template>
                <!--<v-alert slot="no-results" :value="true" color="error" icon="warning">-->
                <!--Your search for "{{ search }}" found no results.-->
                <!--</v-alert>-->
            </v-data-table>
        </v-card>
    </v-layout>
</template>

<script>
    // import globalVar from '@/components/JsFile/GlobalVar.js'
    import {excelJsonListToServerJsonList} from '@/components/JsFile/CheckTableFun.js'

    export default {
        name: "QueryTable",

        data() {
            return {
                loading: true,
                rowsPerPageText: '10'
            }
        },
        //
        computed: {
            tableHead() {
                return this.$store.state['CrystalStick'].tableHead
            },

            tableContent() {
                return this.$store.state['CrystalStick'].previewExcelJson
            }
            // tableHead: () => globalVar.tableHead,
            // tableContent: () => globalVar.previewExcelJson
        },

        mounted() {

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

                self.$store.commit('SET_previewExcelJson', response.data['productList'])
                console.log(self.$store.state['CrystalStick'].previewExcelJson)
                self.loading = false
            }).catch(function (error) {
                console.log(error)
            })

        }


    }
</script>

<style scoped>

</style>