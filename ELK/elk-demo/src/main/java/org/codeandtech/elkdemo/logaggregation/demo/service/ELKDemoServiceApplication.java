package org.codeandtech.elkdemo.logaggregation.demo.service;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;


@SpringBootApplication
//@ComponentScan(value ="org.codeandtech.elkdemo.logaggregation.**")
public class ELKDemoServiceApplication 
{
    public static void main( String[] arguments )
    {
    	 SpringApplication.run(ELKDemoServiceApplication.class, arguments);
    }
}
