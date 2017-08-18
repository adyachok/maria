#!/usr/bin/env groovy

node("master") {
    try {

       stage('Checkout SCM'){
                  checkout([
                      $class: 'GitSCM',
                      branches: [[name: "refs/heads/${env.BRANCH_NAME}"]],
                      extensions: [[$class: 'LocalBranch']],
                      userRemoteConfigs: scm.userRemoteConfigs,
                      doGenerateSubmoduleConfigurations: false,
                      submoduleCfg: []
                  ])
       }
      stage("build") {
         echo "Build stage"
      }
      stage("test") {
         sh "pwd"
         dir ('./files/src/') {
             sh "pwd; la -l; python tests.py"
         }

      }
    } catch(error) {

    } finally {

    }
}