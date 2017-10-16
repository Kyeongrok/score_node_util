let FileHandler = require('./handler/FileHandler.js');
let JsonHandler = require('./handler/JsonHandler.js');
let PrintFunctions = require('./handler/MessagePrintFunctions.js');


let testDataLocation = "C:/Users/grkim/Desktop/node_json_handler/data/";
let fh = new FileHandler(testDataLocation);
let fileList = fh.fileList;

let gamePrintFunctions_oct07 = new PrintFunctions("c:/git_bitbucket/score_parser/basketball_livescore/test_data/stats/livescore/oct_07/");
//gamePrintFunctions_oct07.printGameData(3, 4);

let printFunctions1 = new PrintFunctions("C:/Users/grkim/Desktop/node_json_handler/data/");
printFunctions1.printFileList();
//printFunctions1.printPlayerData(3);
printFunctions1.printApiResults(16);
//printFunctions1.printTeamData('stats_nba_team.json');

//printFunctions1.printPlayDetail('stats_nfl_playDetail.json');
//printFunctions1.printNflPlayDetail('stats_nfl_playDetail.json');

let gamePrintFunctions_oct28 = new PrintFunctions("c:/git_bitbucket/score_parser/basketball_livescore/test_data/stats/livescore/oct_28/");
//gamePrintFunctions_oct28.printFileList();
//gamePrintFunctions_oct28.printTeamData("");

//gamePrintFunctions_oct28.printGameData(980, 981);
