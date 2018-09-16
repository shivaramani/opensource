package com.codeandtech.redis.queue;

public interface MessagePublisher {

    void publish(final String message);
}
