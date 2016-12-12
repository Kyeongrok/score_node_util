var FileHandler = require('./FileHandler.js');
var JsonHandler = require('./JsonHandler.js');
var PrintFunctions = require('./PrintFunctions.js');


var testDataLocation = "C:/Users/grkim/Desktop/node_json_handler/data/";
var fh = new FileHandler(testDataLocation);
var fileList = fh.fileList;

var gamePrintFunctions_oct07 = new PrintFunctions("c:/git_bitbucket/score_parser/basketball_livescore/test_data/stats/livescore/oct_07/");
//gamePrintFunctions_oct07.printGameData(3, 4);

var printFunctions1 = new PrintFunctions("C:/Users/grkim/Desktop/node_json_handler/data/");
printFunctions1.printFileList();
//printFunctions1.printPlayerData(3);
printFunctions1.printApiResults(16);
//printFunctions1.printTeamData('stats_nba_team.json');

//printFunctions1.printPlayDetail('stats_nfl_playDetail.json');


//printFunctions1.printNflPlayDetail('stats_nfl_playDetail.json');



var gamePrintFunctions_oct28 = new PrintFunctions("c:/git_bitbucket/score_parser/basketball_livescore/test_data/stats/livescore/oct_28/");
//gamePrintFunctions_oct28.printFileList();
//gamePrintFunctions_oct28.printTeamData("");

//gamePrintFunctions_oct28.printGameData(980, 981);
