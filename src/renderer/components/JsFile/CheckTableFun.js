import checkTable from '@/components/VarFile/CheckTable.js'

export function excelJsonListToServerJsonList(excelTable) {

    let newExcelJsonTable = []
    let excelColumnTable = checkTable.excelColumnTable
    let newExcelJson
    // console.log(excelTable)
    for (let i = 2; i < excelTable.length; i++) {
        newExcelJson = JSON.stringify(checkTable.serverTableNull)
        newExcelJson = JSON.parse(newExcelJson)
        for (let key in excelTable[i]) {
            if (key != '晶棒检验统计表') {
                // console.log(key)
                // console.log(excelTable[i][key])
                // console.log(excelColumnTable[key])
                // console.log(newExcelJson)
                newExcelJson[excelColumnTable[key]] = excelTable[i][key].toString()
            }
        }
        // console.log(newExcelJson)
        newExcelJsonTable.push(newExcelJson)
    }
    // console.log(newExcelJsonTable)
    return newExcelJsonTable
}

export function appendSql(filterJson) {
    let sentence = "select * from wechat_company.qywx_crystal_stick_statistics where "
    let numberSentence = "select count(*) countNumber from wechat_company.qywx_crystal_stick_statistics where "

    let calcu = {
        less: '<',
        equal: '=',
        more: '>'
    }

    for (let item in filterJson) {
        if (filterJson[item].column && filterJson[item].condition && filterJson[item].number) {
            let calcuChar = calcu[filterJson[item].condition]
            let newSentence = filterJson[item].column + calcuChar + filterJson[item].number + " and "
            sentence = sentence + newSentence
            numberSentence = numberSentence + newSentence
        }
    }
    sentence = sentence.substring(0, sentence.length - 5)
    numberSentence = numberSentence.substring(0, sentence.length - 5)
    return [sentence, numberSentence]
    // console.log(sentence.substring(0, sentence.length - 5))
}




