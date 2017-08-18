#!/usr/bin/env groovy

node("master") {
    try {
      stage("build") {
         echo "Build stage"
      }
      stage("test") {
         sh "pwd"
         dir ('./files/src') {
             sh "pwd"
             sh "python tests.py"
         }

      }
    } catch(error) {

    } finally {

    }
}