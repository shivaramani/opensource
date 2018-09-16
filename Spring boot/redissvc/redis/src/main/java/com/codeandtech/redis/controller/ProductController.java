package com.codeandtech.redis.controller;

import java.util.HashMap;
import java.util.Map;

import com.codeandtech.redis.model.Product;
import com.codeandtech.redis.repository.ProductRedisRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping("/")
public class ProductController{
    
    private static final String FIND_ALL = "/findAll";
    private static final String ADD = "/add";
    private static final String DELETE = "/delete";
    private static final String FIND_ALL_PRODUCTS = "/findAllProducts";
    private static final String SLASH = "/";

    @Autowired
    private ProductRedisRepository productRedisRepository;

    // http://localhost:8090/add?key=2&value=testprod2&desc=testproductdescription2
    // http://localhost:8090/findAll
    
    @RequestMapping(SLASH)
    public String index(){
        return "index";
    }    

    @RequestMapping(FIND_ALL_PRODUCTS)
    public @ResponseBody Map<Object, Object> findAllProducts(){
        return productRedisRepository.findAllProducts();
    }

    @RequestMapping(FIND_ALL)
    public @ResponseBody Map<String, String> findAll() {
        Map<Object, Object> aa = productRedisRepository.findAllProducts();
        Map<String, String> map = new HashMap<String, String>();
        for(Map.Entry<Object, Object> entry : aa.entrySet()){
            String key = (String) entry.getKey();
            map.put(key, aa.get(key).toString());
        }
        return map;
    }

    @RequestMapping(value = ADD, method = RequestMethod.POST)
    public ResponseEntity<String> add(
        @RequestParam String key,
        @RequestParam String value, 
        @RequestParam String desc) {
        
        Product product = new Product(key, value, desc);
        
        productRedisRepository.add(product);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @RequestMapping(value = DELETE, method = RequestMethod.POST)
    public ResponseEntity<String> delete(@RequestParam String key) {
        productRedisRepository.delete(key);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}