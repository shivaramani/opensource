package com.codeandtech.redis.repository;

import java.util.Map;

import javax.annotation.PostConstruct;

import com.codeandtech.redis.model.Product;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.redis.core.HashOperations;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.stereotype.Repository;

@Repository
public class ProductRedisRepositoryImpl implements ProductRedisRepository {

    private RedisTemplate<String, Object> redisTemplate;
    private HashOperations hashOperations;

    private static final String KEY = "Product";

    @Autowired
    public ProductRedisRepositoryImpl(RedisTemplate<String, Object> redisTemplate){
        this.redisTemplate = redisTemplate;
    }

    @PostConstruct
    private void init(){
        hashOperations = redisTemplate.opsForHash();
    }

    @Override
    public Map<Object, Object> findAllProducts() {
        return hashOperations.entries(KEY);
    }

    @Override
    public void add(Product product) {
        hashOperations.put(KEY, product.getId(), product.getName());
    }

    @Override
    public void delete(String id) {
        hashOperations.delete(KEY, id);
    }

	@Override
	public Product findProduct(String id) {
		return (Product) hashOperations.get(KEY, id);
	}

}