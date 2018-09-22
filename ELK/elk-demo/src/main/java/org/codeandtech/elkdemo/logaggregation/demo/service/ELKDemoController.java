package org.codeandtech.elkdemo.logaggregation.demo.service;


//import org.springframework.stereotype.Controller;

import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import ch.qos.logback.classic.Logger;

//@Controller
@RestController
public class ELKDemoController{

    private static final String DEMO_WRITELOGS = "/demo/writelogs";

    private Logger logger = (Logger) LoggerFactory.getLogger(ELKDemoController.class);
    
    @Value("${logging.elk-demo-service.file}")
    private String loggingFileName;
    
    // http://localhost:8091/demo/sayhello
    // http://localhost:8091/demo/writelogs
    
    private static final String DEMO_SAYHELLO = "/demo/sayhello";

    @RequestMapping(DEMO_SAYHELLO)
    public String sayhello() {
        return "Hello From Demo Controller";
    }   
    
    @RequestMapping(DEMO_WRITELOGS)
    public String WriteLogs(){
        int i = 0;
		while (true) {
			if (i++ > 500) {
				break;
			}
            
            //logger.debug("debug message DemoController - WriteLogs");
			
			//logger.warn("warn message DemoController - WriteLogs");
            //logger.error("error message DemoController - WriteLogs - log file name is {}", loggingFileName);			
            
            logger.info("info message DemoController - WriteLogs - log file name is {}", loggingFileName);			
                    
            try {
                Thread.sleep(30000);
            } catch (InterruptedException e) {
                // TODO Auto-generated catch block
                e.printStackTrace();
            }

        }

        return "logs written";
    }

}