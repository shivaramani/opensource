package com.codeandtech.redis.model;

import java.io.Serializable;

public class Product implements Serializable {
    
    private static final long serialVersionUID = 1L;
    private String id;
    private String name;
    private String desc;

    public Product(String id, String name, String desc){
        this.id = id;
        this.name = name;
        this.desc = desc;
    }

    public String getId() {
        return id;
    }
    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
    public String getDesc() {
        return desc;
    }

    public void setDesc(String desc) {
        this.desc = desc;
    }
    
    @Override
    public String toString(){
        return "Product{" + "id=" +id + '\''  + ", name =" + name + ", desc =  " +desc  + "  }";
    }

}
