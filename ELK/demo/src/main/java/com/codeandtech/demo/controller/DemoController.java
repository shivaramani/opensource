package com.codeandtech.demo.controller;


//import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;

import ch.qos.logback.classic.Logger;

//@Controller
@RestController
public class DemoController{

    private Logger logger = (Logger)LoggerFactory.getLogger(DemoController.class);
    
    @Value("${demo-elk-service.file}")
    private String loggingFileName;
    
    // http://localhost:8090/demo/sayhello
    
    private static final String DEMO_SAYHELLO = "/demo/sayhello";

    @RequestMapping(DEMO_SAYHELLO)
    public String sayhello() {
        return "Hello From Demo Controller";
    }   
    
    @RequestMapping("/writelogs")
    public String WriteLogs(){
        int i = 0;
		while (true) {
			if (i++ > 500) {
				break;
			}
			logger.debug("debug message DemoController - WriteLogs");
			logger.info("info message DemoController - WriteLogs");
			logger.warn("warn message DemoController - WriteLogs");
			logger.error("error message DemoController - WriteLogs - log file name is {}", loggingFileName);			
        }
        
        return "logs written";
    }

}