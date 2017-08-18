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
         dir ('./files/src/') {
             sh "pwd; la -l; python tests.py"
         }

      }
    } catch(error) {
      echo error
    } finally {

    }
}