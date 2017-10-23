//일반 javascript function
var printHello_normal = function(){
	console.log("hello");	
}

printHello_normal();

//ecma6 에크마6 람다 형식 
var printHello_lambda = ()=>{
	console.log("nello");	
}

printHello_lambda()

//파라메터가 있는 ecma6 에크마6 람다 형식
var printMessage = (message)=>{
	console.log(message);
}

printMessage("bye");

//람다 표현식(일급 함수)
var plusOne = (x)=>x+1;

console.log(plusOne(10));


//람다(일급)함수 넘기는 방법
var plusNim = (x)=>x + "님";

var printHelloWho = (who)=>{
	console.log(who + " 안녕하세요." );
}

printHelloWho(plusNim("김경록"));
