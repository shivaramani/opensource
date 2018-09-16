package com.codeandtech.redis.repository;

import java.util.Map;

import com.codeandtech.redis.model.*;

public interface ProductRedisRepository {

    Map<Object, Object> findAllProducts();

    void add(Product product);

    void delete(String id);
    
    Product findProduct(String id);
    
}
