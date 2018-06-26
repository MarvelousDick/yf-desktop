var testVar = require("D:\\Applet\\WebProjectStorage\\wechat_companyv0.2\\desktop\\vue\\src\\renderer\\components\\Draft\\Draft3.js")


// let timer = 0
// for (let a in processDetailNameTable) {
//     if (a != 'id') {
//
//         processDetailNameTable[a] = '__EMPTY_' + timer
//     }
//
//     timer++
// }



//Transfer from ExcelJson to database Json
function excelJsonToTableJson() {

    let newExcelJsonTable = []
    let excelColumnTable = testVar.excelColumnTable
    let newExcelJson
    let excelTable = testVar.a
    // console.log(excelTable)
    for (let i = 2; i < excelTable.length; i++) {
        newExcelJson = JSON.stringify(testVar.nullTable)
        newExcelJson = JSON.parse(newExcelJson)
        for (let key in excelTable[i]) {
            if (key != '晶棒检验统计表'){

                newExcelJson[excelColumnTable[key]] = excelTable[i][key]
            }
        }
        // console.log(newExcelJson)
        newExcelJsonTable.push(newExcelJson)
    }
   console.log(newExcelJsonTable)
   //  console.log(testVar.nullTable)

}
// excelJsonToTableJson()

// console.log(processDetailNameTable)

function newProcessNameTable (){

    let processDetailNameTable = testVar.processDetailNameTable
    let tmp
    let newprocessDetailNameTable = {}
    let timer = -1
    for (let a in processDetailNameTable){
        tmp = '__EMPTY_' + timer
        timer++
        newprocessDetailNameTable[tmp] = a
    }
    console.log(newprocessDetailNameTable)
}

// newProcessNameTable ()



function getTableHead(){
    let newJson = []

    let processDetailNameTable = testVar.processDetailNameTable
    for (let key in processDetailNameTable){
        // console.log(key)
        let tmp = {}
        tmp['text'] = processDetailNameTable[key]
        tmp['value'] = key
        newJson.push(tmp)
    }
    console.log(newJson)
}



function getTableContent(){
    let newJson = []

    let processDetailNameTable = testVar.processDetailNameTable
    for (let key in processDetailNameTable){
        // console.log(key)
        let tmp = {}
        tmp['text'] = processDetailNameTable[key]
        tmp['value'] = key
        newJson.push(tmp)

        console.log("<td>{{ props.item." + key + " }}</td>")

    }
    // console.log(newJson)
}


// getTableContent()

function getNewTableHead() {

    let tableHead = testVar.tableHead
    let index = 1
    let newTableHead = []
    for (let item in tableHead){
        let jsonItem = {}
        // console.log(tableHead[item])
        // jsonItem['key'] = index
        jsonItem['text'] = tableHead[item]['text']
        jsonItem['value'] = tableHead[item]['value']

        index++
        // console.log(tableHead[item]['text'])
        newTableHead.push(jsonItem)
    }

    console.log(newTableHead)

}

// getNewTableHead()


function getTableHeadNew(){

    let tableHead = testVar.tableHeadDesktop
    let newTableHead = []
    let newJson = {}

    for (let item in tableHead){
        newJson[tableHead[item].text] = tableHead[item].value
        // newTableHead.push(singleJson)
        // console.log(tableHead[item].text)
    }
    console.log(newJson)
}

// getTableHeadNew()


function appendSql() {
    let filterJson = testVar.filterJson

    let sentence = "select * from wechat_company.qywx_crystal_stick_statistics where "

    let calcu = {
        less: '<',
        equal: '=',
        more: '>'
    }

    for (let item in filterJson){

        if(filterJson[item].column && filterJson[item].condition && filterJson[item].number){

            let calcuChar = calcu[filterJson[item].condition]

            let newSentence = filterJson[item].column + calcuChar + filterJson[item].number + " and "

            sentence = sentence + newSentence
        }

    }

    console.log(sentence.substring(0, sentence.length - 5))
}

// appendSql()
























