const state = {
    excelFileName: null,
    excelFileJson: null,
    excelFoldName: null,
    excelFileListAddress: null,
    excelFileNameArray: [],
    excelFileJsonArray: [],
    previewExcelJson: [{
        add_info: null,
        crow_date: null,
        crow_est_exact_len: null,
        crow_est_rough_len: null,
        crow_mac_id: null,
        crow_operator: null,
        crow_stick_len: null,
        crow_total_len: null,
        cut_bub_len: null,
        cut_crack: null,
        cut_crack_len: null,
        cut_cry_len: null,
        cut_date: null,
        cut_len: null,
        cut_operator: null,
        cut_pre_len: null,
        final_bub: null,
        final_crack: null,
        final_date: null,
        final_exact_len: null,
        final_total_len: null,
        id: null,
        line_id: null,
        of_collap: null,
        of_date: null,
        of_format: null,
        of_len: null,
        of_operator: null,
        rod_id: null,
        roll_date: null,
        roll_len: null,
        roll_operator: null,
        rub_date: null,
        rub_len: null,
        rub_operator: null
    }],
    jsonFromServer: null,
    tableHead: [
        {
            text: '',
            align: 'left',
            sortable: false,
            value: 'name'
        },
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
    filterColumnSelector: {
        '编号': 'id',
        '晶体号': 'line_id',
        '晶棒号': 'rod_id',
        '掏棒评估毛长': 'crow_est_rough_len',
        '掏棒评估净长': 'crow_est_exact_len',
        '掏棒日期': 'crow_date',
        '掏棒操作': 'crow_operator',
        '掏棒总长（mm）': 'crow_total_len',
        '掏棒长度': 'crow_stick_len',
        '掏棒机台号': 'crow_mac_id',
        '锯床去头尾日期': 'cut_date',
        '锯床去头尾操作': 'cut_operator',
        '锯床去头尾长度（mm)': 'cut_len',
        '锯床去头尾返工前长度': 'cut_pre_len',
        '锯床去头尾气泡（mm)': 'cut_bub_len',
        '锯床去头尾晶界（mm)': 'cut_cry_len',
        '锯床去头开裂': 'cut_crack',
        '锯床去头裂纹（mm)': 'cut_crack_len',
        '平磨日期': 'rub_date',
        '平磨操作': 'rub_operator',
        '平磨长度（mm)': 'rub_len',
        '滚磨日期': 'roll_date',
        '滚磨操作': 'roll_operator',
        '滚磨长度': 'roll_len',
        'OF面日期': 'of_date',
        'OF面操作': 'of_operator',
        'OF面长度': 'of_len',
        'OF面规格': 'of_format',
        'OF面崩边（mm）': 'of_collap',
        '终检气泡': 'final_bub',
        '终检开裂': 'final_crack',
        '终检日期': 'final_date',
        '终检总长（mm）': 'final_total_len',
        '终检净长（mm）': 'final_exact_len',
        '备注': 'add_info'
    },
    tableContent: [
        {
            value: false,
            name: 'Frozen Yogurt',
            calories: 159,
            fat: 6.0,
            carbs: 24,
            protein: 4.0,
            iron: '1%'
        },
        {
            value: false,
            name: 'Ice cream sandwich',
            calories: 237,
            fat: 9.0,
            carbs: 37,
            protein: 4.3,
            iron: '1%'
        },
        {
            value: false,
            name: 'Eclair',
            calories: 262,
            fat: 16.0,
            carbs: 23,
            protein: 6.0,
            iron: '7%'
        }
    ]
}

const mutations = {

    SET_excelFileName(state, excelFileName) {
        state.excelFileName = excelFileName
    },
    SET_excelFileJson(state, excelFileJson) {
        state.excelFileJson = excelFileJson
    },
    SET_excelFoldName(state, excelFoldName) {
        state.excelFoldName = excelFoldName
    },
    SET_excelFileListAddress(state, excelFileListAddress) {
        state.excelFileListAddress = excelFileListAddress
    },
    SET_excelFileNameArray(state, excelFileNameArray) {
        state.excelFileNameArray = excelFileNameArray
    },
    SET_excelFileJsonArray(state, excelFileJsonArray) {
        state.excelFileJsonArray = excelFileJsonArray
    },
    SET_previewExcelJson(state, previewExcelJson) {
        state.previewExcelJson = previewExcelJson
    },
    SET_jsonFromServer(state, jsonFromServer) {
        state.jsonFromServer = jsonFromServer
    },

    SET_tableHead(state, tableHead) {
        state.tableHead = tableHead
    },
    SET_filterColumnSelector(state, filterColumnSelector) {
        state.filterColumnSelector = filterColumnSelector
    },
    SET_tableContent(state, tableContent) {
        state.tableContent = tableContent
    }

}

const actions = {
    someAsyncTask({commit}) {
        // do something async
        // commit('INCREMENT_MAIN_COUNTER')
    }
}

export default {
    state,
    mutations,
    actions
}
