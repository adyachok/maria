#!/usr/bin/env groovy

node("master") {
    try {
      stage("build") {
         echo "Build stage"
      }
      stage("test") {
         sh "pwd"
         FIND = sh (
             script: 'find . -iname app.py',
             returnStdout: true
         ).trim()
         echo "FIND: ${FIND}"

         sh "python tests.py"
      }
    } catch(error) {

    } finally {

    }
}