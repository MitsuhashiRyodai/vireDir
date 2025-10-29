// let targetBatch = "目標のバッチファイルのファイルパス";
// サンプルでは直下にある特定のディレクトリの中身をコピーするパッチ
let targetBatch = "batRun.js";

function activeRunBatch() {
    let WshShell = new ActiveXObject("WScripte.Shell");
    WshShell.run(targetBatch);
}

let activeBatButton =document.getElementById('showDirButton');
activeBatButton.onclick = activeRunBatch;