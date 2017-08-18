#!/usr/bin/env groovy

node("master") {
    try {
      stage("build") {
         echo "Build stage"
      }
      stage("test") {
         sh "pwd"
         sh "find . -iname app.py"
         sh "python tests.py"
      }
    } catch(error) {

    } finally {

    }
}