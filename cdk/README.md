## spring-boot-react-app cdk

Create ECR repogitory
```
$ yarn cdk deploy ecr-repo-stack
```

Execute docker login
```
$ aws ecr get-login-password --region ap-northeast-1 | docker login --password-stdin --username AWS "<account_id>.dkr.ecr.ap-northeast-1.amazonaws.com"
```

Build and push image
```
$ cd ..
$ docker build -t spring-boot-react-app .
$ docker tag <image_id> <account_id>.dkr.ecr.ap-northeast-1.amazonaws.com/spring-boot-react-app-repo
$ docker push <account_id>.dkr.ecr.ap-northeast-1.amazonaws.com/spring-boot-react-app-repo
```

Deploy app
```
$ yarn cdk deploy ecs-app-stack
```
