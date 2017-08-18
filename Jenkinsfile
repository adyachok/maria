#!/usr/bin/env groovy

node("master") {
    try {
      stage("build") {
         echo "Build stage"
      }
      stage("test") {
         sh "pwd"
         sh "cd files/src"
         sh "python tests.py"
      }
    } catch(error) {

    } finally {

    }
}