// List all files in a directory in Node.js recursively in a synchronous fashion
function walkSync(dir, filelist) {
    if (dir[dir.length - 1] != '/') dir = dir.concat('/')
    var fs = fs || require('fs'),
        files = fs.readdirSync(dir)
    filelist = filelist || []
    files.forEach(function (file) {
        if (fs.statSync(dir + file).isDirectory()) {
            filelist = walkSync(dir + file + '/', filelist)
        }
        else {
            filelist.push(dir + file)
        }
    })
    return filelist
}

export function getSonFiles(dir) {
    let files = []
    return walkSync(dir, files)
}

// function getSonFiles(dir) {
//     let files = []
//     return walkSync(dir, files)
// }
// files = []
// let filePath = 'D:\\Applet\\WebProjectStorage\\样本数据 - 副本'
// //
// let a = getSonFiles(filePath)
// console.log(a)