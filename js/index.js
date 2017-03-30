angular.module('myapp',[])
	.controller('mainCtroller',["$scope",function ($scope) {
		$scope.submitForm = function () {
			console.log('已提交。。。')
		}
	}])
	.controller('signUpCtroller',["$scope",function ($scope) {

		$scope.userdata = {}

		$scope.submitForm = function () {
			console.log($scope.userdata);
			if (signUpForm.username.$invalid) {
				alert('请检查')
			}else{
				alert('提交成功')
			}
		}

	}])



	.directive('compare',function () {

		var com ={};
		// 命令作用于元素和属性中
		com.strict = "AE" ;
		com.scope = {
			//之前的这个字符,@对应字符串，=对应数据，&对应函数
			orgText :'=compare'
		}
		com.require =  'ngModel';
		/*
		 *sco 域，$scope
		 *ele 当前元素
		 *att 属性
		 *con ngModel
		 *v 用户输入值
		 */
		com.link = function (scope,ele,attr,control) {
			control.$validators.compare = function(v){
				 return v ==scope.orgText;
			}
			//与之前的orgText比较
			scope.$watch('orgText',function(){
				//一旦有变化则开始验证
				control.$validate();
			})
		}
		return com;
	})