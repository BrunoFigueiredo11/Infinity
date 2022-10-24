FROM openjdk

WORKDIR /app-scania

COPY target/api.scania-0.0.1-SNAPSHOT.jar /app-scania/scania-api.jar

ENTRYPOINT ["java","-jar","scania-api.jar"]