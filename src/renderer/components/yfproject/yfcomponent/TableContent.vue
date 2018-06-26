<template>

    <v-card>
        <v-card-title>
            Nutrition
            <v-spacer></v-spacer>
            <v-text-field
                    v-model="search"
                    append-icon="search"
                    label="Search"
                    single-line
                    hide-details
            ></v-text-field>
        </v-card-title>
        <v-data-table
                :headers="tableHead"
                :items="tableContent"
                :search="search"
        >
            <template slot="items" slot-scope="props">
                <td class="text-xs-center">{{ props.item.id }}</td>
                <td class="text-xs-center">{{ props.item.line_id }}</td>
                <td class="text-xs-center">{{ props.item.rod_id }}</td>
                <td class="text-xs-center">{{ props.item.crow_est_rough_len }}</td>
                <td class="text-xs-center">{{ props.item.crow_est_exact_len }}</td>
                <td class="text-xs-center">{{ props.item.crow_date }}</td>
                <td class="text-xs-center">{{ props.item.crow_operator }}</td>
                <td class="text-xs-center">{{ props.item.crow_total_len }}</td>
                <td class="text-xs-center">{{ props.item.crow_stick_len }}</td>
                <td class="text-xs-center">{{ props.item.crow_mac_id }}</td>
                <td class="text-xs-center">{{ props.item.cut_date }}</td>
                <td class="text-xs-center">{{ props.item.cut_operator }}</td>
                <td class="text-xs-center">{{ props.item.cut_len }}</td>
                <td class="text-xs-center">{{ props.item.cut_pre_len }}</td>
                <td class="text-xs-center">{{ props.item.cut_bub_len }}</td>
                <td class="text-xs-center">{{ props.item.cut_cry_len }}</td>
                <td class="text-xs-center">{{ props.item.cut_crack }}</td>
                <td class="text-xs-center">{{ props.item.cut_crack_len }}</td>
                <td class="text-xs-center">{{ props.item.rub_date }}</td>
                <td class="text-xs-center">{{ props.item.rub_operator }}</td>
                <td class="text-xs-center">{{ props.item.rub_len }}</td>
                <td class="text-xs-center">{{ props.item.roll_date }}</td>
                <td class="text-xs-center">{{ props.item.roll_operator }}</td>
                <td class="text-xs-center">{{ props.item.roll_len }}</td>
                <td class="text-xs-center">{{ props.item.of_date }}</td>
                <td class="text-xs-center">{{ props.item.of_operator }}</td>
                <td class="text-xs-center">{{ props.item.of_len }}</td>
                <td class="text-xs-center">{{ props.item.of_format }}</td>
                <td class="text-xs-center">{{ props.item.of_collap }}</td>
                <td class="text-xs-center">{{ props.item.final_bub }}</td>
                <td class="text-xs-center">{{ props.item.final_crack }}</td>
                <td class="text-xs-center">{{ props.item.final_date }}</td>
                <td class="text-xs-center">{{ props.item.final_total_len }}</td>
                <td class="text-xs-center">{{ props.item.final_exact_len }}</td>
                <td class="text-xs-center">{{ props.item.add_info }}</td>
            </template>
            <v-alert slot="no-results" :value="true" color="error" icon="warning">
                Your search for "{{ search }}" found no results.
            </v-alert>
        </v-data-table>
    </v-card>

</template>

<script>
    // import globalVar from '@/components/JsFile/GlobalVar.js'
    import {excelJsonListToServerJsonList} from '@/components/JsFile/CheckTableFun.js'

    export default {
        name: "TableContent",
        data() {
            return {
                search: '',
                headers: [
                    {
                        text: '',
                        align: 'left',
                        sortable: false,
                        value: 'name'
                    },
                    {text: 'Calories', value: 'calories'},
                    {text: 'Fat (g)', value: 'fat'},
                    {text: 'Carbs (g)', value: 'carbs'},
                    {text: 'Protein (g)', value: 'protein'},
                    {text: 'Iron (%)', value: 'iron'}
                ],
                desserts: [
                    {
                        value: false,
                        name: 'Frozen Yogurt',
                        calories: 159,
                        fat: 6.0,
                        carbs: 24,
                        protein: 4.0,
                        iron: '1%'
                    }

                ]
            }
        },
        computed: {
            tableHead(){
                return this.$store.state['CrystalStick'].tableHead
            },

            tableContent() {
                return this.$store.state['CrystalStick'].previewExcelJson
            }
        }

    }
</script>

<style scoped>

</style>