/*
            FileReader共有4种读取方法：
            1.readAsArrayBuffer(file)：将文件读取为ArrayBuffer。
            2.readAsBinaryString(file)：将文件读取为二进制字符串
            3.readAsDataURL(file)：将文件读取为Data URL
            4.readAsText(file, [encoding])：将文件读取为文本，encoding缺省值为'UTF-8'
                         */

import XLSX from 'xlsx'
import store from '@/store'
// import globalVar from '@/components/JsFile/GlobalVar.js'

var wb;//读取完成的数据
var rABS = false; //是否将文件读取为二进制字符串

export function excelToJson(obj) {//导入

    if(!obj.files) {
        return;
    }
    var f = obj.files[0];
    var reader = new FileReader();
    reader.onload = function(e) {
        var data = e.target.result;
        if(rABS) {
            wb = XLSX.read(btoa(fixdata(data)), {//手动转化
                type: 'base64'
            });
        } else {
            wb = XLSX.read(data, {
                type: 'binary'
            });
        }
        //wb.SheetNames[0]是获取Sheets中第一个Sheet的名字
        //wb.Sheets[Sheet名]获取第一个Sheet的数据
        // document.getElementById("demo").innerHTML= JSON.stringify( XLSX.utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]]) );

        // console.log(XLSX.utils.sheet_to_json(wb.Sheets['圆棒']))
        store.commit('SET_excelFileJson', XLSX.utils.sheet_to_json(wb.Sheets['圆棒']))
        // globalVar.excelFileJson = XLSX.utils.sheet_to_json(wb.Sheets['圆棒'])
        // globalVar.previewExcelJson = globalVar.excelFileJson

    };
    if(rABS) {
        reader.readAsArrayBuffer(f);
    } else {
        reader.readAsBinaryString(f);
    }
}

export function fileListToJsonArray(fileList) {
    let excelListJsonArray = []
    let excelJson
    for (let id in fileList){
        // console.log(fileList[id])
        // let fso = new ActiveXObject('Scripting.FileSystemObject');
        //
        // let objectFile = new File([file], "D:\\Applet\\WebProjectStorage\\Sample\\晶棒加工统计表样本数据2.xlsx")
        // excelJson = excelToJson(objectFile)
        // excelListJsonArray.push(excelJson)
    }
    // console.log(excelListJsonArray)
    return excelListJsonArray
}


function fixdata(data) { //文件流转BinaryString
    var o = "",
        l = 0,
        w = 10240;
    for(; l < data.byteLength / w; ++l) o += String.fromCharCode.apply(null, new Uint8Array(data.slice(l * w, l * w + w)));
    o += String.fromCharCode.apply(null, new Uint8Array(data.slice(l * w)));
    return o;
}