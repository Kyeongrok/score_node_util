const fs = require("fs");

const compareAndDelete = (path)=>{
    let fileList = fs.readdirSync( path );

    let beforeFileString = "";
    for(let fileName of fileList){
        let file = fs.readFileSync(path + fileName);
        let fileString =  file.toString();

        if(beforeFileString == fileString){
            console.log("same");
            fs.unlinkSync(path + fileName)
        }else{
            console.log("different")
        }

        beforeFileString = fileString;
    }
};

const processAndSave = (path)=>{
    let fileList = fs.readdirSync( path );

    for(let fileName of fileList){
        let file = fs.readFileSync(path + fileName);
        let fileString =  file.toString();

        //metadata 뺀다
        let extractedMetadata = extractMetadata(fileString);

        //저장한다.
        fs.writeFile(path + fileName, JSON.stringify(extractedMetadata), function(err) {
            if(err) {
                return console.log(err);
            }

            console.log("The file was saved!");
        });

    }
};

const extractMetadata = (fileString)=>{
    //json을 만든다
    let jsonObject = JSON.parse(fileString);

    //metadata를 없앤다
    delete jsonObject['metaData'];

    return jsonObject;
};


exports.compareAndDelete = compareAndDelete;
exports.processAndSave = processAndSave;
