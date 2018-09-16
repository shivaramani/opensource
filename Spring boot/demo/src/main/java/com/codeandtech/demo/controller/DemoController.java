package com.codeandtech.demo.controller;


//import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class DemoController{
    
    // http://localhost:8090/demo/sayhello
    
    private static final String DEMO_SAYHELLO = "/demo/sayhello";

    @RequestMapping(DEMO_SAYHELLO)
    public String sayhello() {
        return "Hello From Demo Controller";
    }    

}