FROM ubuntu:xenial
MAINTAINER Andras Gyacsok "andras.dyacsok@boehringer-ingelheim.com"
RUN apt-get update -y && \
   apt-get install -y python-pip python-dev build-essential && \
   pip install -U pip ansible    
COPY . /app
WORKDIR /app
#RUN pip install -r requirements.txt
RUN mkdir downloads && cd downloads && \
    curl https://code.jquery.com/jquery-3.2.1.min.js && \
    curl https://github.com/d3/d3/releases/download/v4.10.0/d3.zip && \
    curl https://github.com/c3js/c3/archive/v0.4.15.zip && \
    curl http://underscorejs.org/underscore-min.js && \
    curl https://github.com/twbs/bootstrap/releases/download/v4.0.0-alpha.6/bootstrap-4.0.0-alpha.6-dist.zip && \
    mkdir ../static/js/lib/ && \
    mkdir ../static/css/lib/ && \
    mv jquery-3.2.1.min.js ../static/js/lib/ && \
    mv underscore-min.js ../static/js/lib/ && \
    unzip d3.zip && \
    unzip v0.4.15.zip && \
    unzip bootstrap-4.0.0-alpha.6-dist.zip
EXPOSE 8080
ENTRYPOINT ["python"]
CMD ["server.py"]