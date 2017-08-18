#!/usr/bin/env groovy

node("master") {
    try {
      stage ("Get Latest Code") {
          checkout scm
      }

      stage("build") {
         echo "Build stage"
      }
      stage("test") {
             sh "python files/src/tests.py"
      }
    } catch(error) {
      echo "${error}"
    } finally {

    }
}