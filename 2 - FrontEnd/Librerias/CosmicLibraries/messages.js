"use strict";

function info(){
	if(arguments.length > 1){
		for(let arg of arguments){
			info(arg);
		}
	}else{
		console.log(`%c${arguments[0]}`, `
			display: block;
			width: 100%;
			padding: 10px;
			color: #2E86C1;
			background-color: #AED6F1;
			font-size: 14px;
			letter-spacing: 3px;
		`);
	}
}

function error(){
	if(arguments.length > 1){
		for(let arg of arguments){
			error(arg);
		}
	}else{
		console.log(`%c${arguments[0]}`, `
			display: block;
			width: 100%;
			padding: 10px;
			color: #B03A2E;
			background-color: #F5B7B1;
			font-size: 14px;
			letter-spacing: 3px;
		`);
	}
}

function success(){
	if(arguments.length > 1){
		for(let arg of arguments){
			success(arg);
		}
	}else{
		console.log(`%c${arguments[0]}`, `
			display: block;
			width: 100%;
			padding: 10px;
			color: #239B56;
			background-color: #ABEBC6;
			font-size: 14px;
			letter-spacing: 3px;
		`);
	}
}