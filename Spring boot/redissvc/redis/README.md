## Redis Spring boot application

- Create a spring boot application
	- Add spring boot web, redis dependency
	- Add application properties. Set spring.data.redis properies - host and port. Optionally can set server port for the application
	- Set Redis Config. 
	 	- Add a RedisConfig.java
		- Create a JedisConnectionFactory & a RedisTemplate with GenericToStringSerializer
	- Set Publish-Subscribe Queue
		- Message Publisher - Create a service and interface and implementation to publish the message
			- Create an interface to accept the string message 
			- Create an implementation.
				- Autowire the redisTemplate created above
				- Autowire a ChannelTopic 
				- Provide the publish method implementation to convertAndSend the topic/message to the redisTemplate
		- Message Listener - Create a service that implements MessageListener(redis.connection.MessageListener)
			- create a "onMessage" implementation that would add the incoming (published message) to a static message list
			
	- Model - Product		
		- Create a Product model that implements Serializable (java.io.Serializable)
		
	- Repository
		- Create an interface IProductRedisRepository to perform the CRUD -  findAllProduct, add, delete, findProduct 
		- Use "HashOperations" to add/delete/findAll operations
		
	- Controller
		- Expose a controller method to interact with the repository
	