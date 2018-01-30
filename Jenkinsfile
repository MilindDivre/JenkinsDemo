pipeline {
    agent any

    stages {
        stage ('Compile Stage') {

            steps {
                withMaven(maven : 'Maven') {
					bat 'start cmd.exe /c mvn clean compile'
                }
            }
        }

        stage ('Testing Stage') {

            steps {
                withMaven(maven : 'Maven') {
					bat 'start cmd.exe /c mvn test'
                }
            }
        }


        stage ('Deployment Stage') {
            steps {
                withMaven(maven : 'Maven') {
					bat 'start cmd.exe /c mvn deploy'
                }
            }
        }
    }
}