This document details installing an ELK stack in an AWS Instance (I chose t2.small - redhat7)

## update the latest and run as su
$ yum update
$ sudo su

## Install Java

	cd /opt/
	wget --no-cookies --no-check-certificate --header "Cookie: gpw_e24=http%3A%2F%2Fwww.oracle.com%2F; oraclelicense=accept-securebackup-cookie" "http://download.oracle.com/otn-pub/java/jdk/8u181-b13/96a7b8442fe848ef90c96a2fad6ed6d1/jdk-8u181-linux-x64.tar.gz"
	tar xzf jdk-8u181-linux-x64.tar.gz

	cd /opt/jdk1.8.0_181/
	alternatives --install /usr/bin/java java /opt/jdk1.8.0_181/bin/java 2
	alternatives --config java

	alternatives --install /usr/bin/jar jar /opt/jdk1.8.0_181/bin/jar 2
	alternatives --install /usr/bin/javac javac /opt/jdk1.8.0_181/bin/javac 2
	alternatives --set jar /opt/jdk1.8.0_181/bin/jar
	alternatives --set javac /opt/jdk1.8.0_181/bin/javac

	java -version

	Set the JAVA_HOME, JRE_HOME and PATH environment variables. - set this in nano /etc/bashrc

	export JAVA_HOME=/opt/jdk1.8.0_181
	export JRE_HOME=/opt/jdk1.8.0_181/jre
	export PATH=$PATH:/opt/jdk1.8.0_181/bin:/opt/jdk1.8.0_181/jre/bin

## Install Elasticsearch

	Download and install the public signing key:

	rpm --import https://artifacts.elastic.co/GPG-KEY-elasticsearch

	nano /etc/yum.repos.d/elasticsearch.repo

		[elasticsearch-6.x]
		name=Elasticsearch repository for 6.x packages
		baseurl=https://artifacts.elastic.co/packages/6.x/yum
		gpgcheck=1
		gpgkey=https://artifacts.elastic.co/GPG-KEY-elasticsearch
		enabled=1
		autorefresh=1
		type=rpm-md

	yum install elasticsearch

	chkconfig --add elasticsearch
	service elasticsearch start

## Install Logstash

	rpm --import https://artifacts.elastic.co/GPG-KEY-elasticsearch

	nano /etc/yum.repos.d/logstash.repo

		[logstash-6.x]
		name=Elastic repository for 6.x packages
		baseurl=https://artifacts.elastic.co/packages/6.x/yum
		gpgcheck=1
		gpgkey=https://artifacts.elastic.co/GPG-KEY-elasticsearch
		enabled=1
		autorefresh=1
		type=rpm-md

	yum install logstash

	chkconfig --add logstash

	service logstash start
	
	# To test logstash
		cd /usr/share/logstash
		
		input { stdin { } }
		output {
		  elasticsearch { hosts => ["localhost:9200"] }
		  stdout { codec => rubydebug }
		}
		
		Then, run logstash and specify the configuration file with the -f flag.
		bin/logstash -f logstash-simple.conf

## Install kibana

	rpm --import https://artifacts.elastic.co/GPG-KEY-elasticsearch

	nano /etc/yum.repos.d/kibana.repo

		[kibana-6.x]
		name=Kibana repository for 6.x packages
		baseurl=https://artifacts.elastic.co/packages/6.x/yum
		gpgcheck=1
		gpgkey=https://artifacts.elastic.co/GPG-KEY-elasticsearch
		enabled=1
		autorefresh=1
		type=rpm-md


	yum install kibana 

	nano /etc/kibana/kibana.yml
		server.host: 0.0.0.0
		elasticsearch.url: "http://localhost:9200"

	chkconfig --add kibana

	service kibana start

## Install NGINX


	nano /etc/yum.repos.d/nginx.repo

		[nginx]
		name=nginx repo
		baseurl=https://nginx.org/packages/mainline/rhel/7/$basearch/
		gpgcheck=0
		enabled=1

	yum install httpd-tools

	touch /etc/nginx/.htpasswd
	# you can check your encrypted password set as below
	nano /etc/nginx/.htpasswd
	
	htpasswd -c /etc/nginx/.htpasswd myuser

	# set your password
	mypassword

	# Set reverse proxy as below
	nano /etc/nginx/nginx.conf

		server {
		  listen *:80;
		  server_name _;
		  location / {
			proxy_pass http://localhost:5601;
			auth_basic "Restricted";
			auth_basic_user_file /etc/nginx/.htpasswd;
		  }
		}

	nginx -t

	enable httpd connect
	setsebool -P httpd_can_network_connect true

## This should set the logstash feeding to elastic search which can be seen in the kibana dashboard

   http://yourid/
   
   Create Index
   
   ex: logstash*
       select a filter (ex: time) and click apply
	   Click "Discover"and on the top right select "Today" (various time range  options available)
	   
	   http://52.24.216.213

## Filebeat - Filebeat is a lightweight shipper for forwarding and centralizing log data. Installed as an agent on your servers, Filebeat monitors the log files or locations that you specify, collects log events, and forwards them to either to Elasticsearch or Logstash for indexing.


	   
## References

- https://www.elastic.co/guide/en/elasticsearch/reference/current/rpm.html
- https://www.elastic.co/guide/en/logstash/current/installing-logstash.html
- https://www.elastic.co/guide/en/kibana/current/rpm.html
- https://www.elastic.co/guide/en/beats/filebeat/current/filebeat-overview.html

