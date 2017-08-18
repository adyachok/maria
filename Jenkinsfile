#!/usr/bin/env groovy

node("master") {
    try {
      stage("build") {
         echo "Build stage"
      }
      stage("test") {
         sh "python tests.py"
      }
    } catch {

    } finally {

    }
}