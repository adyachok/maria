FROM ubuntu:xenial
MAINTAINER Andras Gyacsok "andras.dyacsok@boehringer-ingelheim.com"
RUN apt-get update -y
RUN apt-get install -y python-pip python-dev build-essential
COPY . /app
WORKDIR /app
RUN pip install -r requirements.txt
EXPOSE 8080
ENTRYPOINT ["python"]
CMD ["server.py"]