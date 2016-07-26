!function(){"use strict";angular.module("otusDomainClient",["ngResource"])}(),function(){"use strict";function e(e,t){function r(){R="http://"+e.location.hostname,m="/otus-domain-rest",y="/v01"}function o(){R=""}function n(){return!!e.sessionStorage[S]}function i(){delete e.sessionStorage[S]}function u(t){e.sessionStorage[S]=t}function a(){return e.sessionStorage[S]}function s(e){R=e}function c(e){m="/"+e}function l(e){y="/"+e}function h(){return R+m+y}function f(){return R}function g(){return m}function d(){return y}var R,m,y,T=this,S="dutk";T.setHostname=s,T.setContext=c,T.setVersion=l,T.setSecurityToken=u,T.getRestPrefix=h,T.getVersion=d,T.getHostName=f,T.getContext=g,T.getSecurityToken=a,T.removeSecurityToken=i,T.hasToken=n,T.init=r,T.reset=o,T.init()}angular.module("otusDomainClient").service("DomainRestResourceContext",e),e.$inject=["$window","UrlParser"]}(),function(){"use strict";function e(e,t,r,o,n,i,u){function a(e){u.setHostname(e)}function s(){return u.hasToken()}function c(e){u.setSecurityToken(e)}function l(){u.removeSecurityToken()}function h(){return e.create()}function f(){return t.create()}function g(){return r.create()}function d(){return o.create()}function R(){return n.create()}function m(){return i.create()}var y=this;y.getInstallerResource=h,y.getAuthenticatorResource=f,y.getUserResource=g,y.getRepositoryResource=d,y.getOtusProjectResource=R,y.getUrlResource=m,y.setSecurityToken=c,y.removeSecurityToken=l,y.isLogged=s,y.setHostname=a}angular.module("otusDomainClient").service("RestResourceService",e),e.$inject=["InstallerResourceFactory","AuthenticatorResourceFactory","UserResourceFactory","RepositoryResourceFactory","OtusProjectResourceFactory","UrlResourceFactory","DomainRestResourceContext"]}(),function(){"use strict";function e(e,t){function r(){return e({},{},{register:{method:"POST",url:t.getRestPrefix()+o+"/register",headers:{Authorization:"Bearer "+t.getSecurityToken()}},fetchAll:{method:"GET",url:t.getRestPrefix()+o,headers:{Authorization:"Bearer "+t.getSecurityToken()}}})}var o="/otus",n=this;return n.create=r,n}angular.module("otusDomainClient").factory("OtusProjectResourceFactory",e),e.$inject=["$resource","DomainRestResourceContext"]}(),function(){"use strict";function e(e,t){function r(){return e({},{},{authenticate:{method:"POST",url:t.getRestPrefix()+o,headers:{Authorization:"Bearer "+t.getSecurityToken()}},invalidate:{method:"POST",url:t.getRestPrefix()+o+"/invalidate",headers:{Authorization:"Bearer "+t.getSecurityToken()}}})}var o="/authentication",n=this;return n.create=r,n}angular.module("otusDomainClient").factory("AuthenticatorResourceFactory",e),e.$inject=["$resource","DomainRestResourceContext"]}(),function(){"use strict";function e(e,t){function r(){return e({},{},{ready:{method:"GET",url:t.getRestPrefix()+o+"/ready",headers:{Authorization:"Bearer "+t.getSecurityToken()}},validation:{method:"POST",url:t.getRestPrefix()+o+"/validation",headers:{Authorization:"Bearer "+t.getSecurityToken()}},config:{method:"POST",url:t.getRestPrefix()+o,headers:{Authorization:"Bearer "+t.getSecurityToken()}}})}var o="/installer",n=this;return n.create=r,n}angular.module("otusDomainClient").factory("InstallerResourceFactory",e),e.$inject=["$resource","DomainRestResourceContext"]}(),function(){"use strict";function e(e,t){function r(){return e({},{},{exists:{method:"GET",url:t.getRestPrefix()+o+"/exists",headers:{Authorization:"Bearer "+t.getSecurityToken()}},create:{method:"POST",url:t.getRestPrefix()+o,headers:{Authorization:"Bearer "+t.getSecurityToken()}},logged:{method:"GET",url:t.getRestPrefix()+o,headers:{Authorization:"Bearer "+t.getSecurityToken()}},fetch:{method:"GET",url:t.getRestPrefix()+o+"/fetch",headers:{Authorization:"Bearer "+t.getSecurityToken()}},enable:{method:"POST",url:t.getRestPrefix()+o+"/enable",headers:{Authorization:"Bearer "+t.getSecurityToken()}},disable:{method:"POST",url:t.getRestPrefix()+o+"/disable",headers:{Authorization:"Bearer "+t.getSecurityToken()}}})}var o="/user",n=this;return n.create=r,n}angular.module("otusDomainClient").factory("UserResourceFactory",e),e.$inject=["$resource","DomainRestResourceContext"]}(),function(){"use strict";function e(e,t){function r(){return e({},{},{validateConnection:{method:"POST",url:t.getRestPrefix()+o+"/validate/connection",headers:{Authorization:"Bearer "+t.getSecurityToken()}},validateCredentials:{method:"POST",url:t.getRestPrefix()+o+"/validate/credentials",headers:{Authorization:"Bearer "+t.getSecurityToken()}},validateDatabase:{method:"GET",url:t.getRestPrefix()+o+"/validate/database",headers:{Authorization:"Bearer "+t.getSecurityToken()}},getByRepositoryName:{method:"GET",url:t.getRestPrefix()+o+"/get",headers:{Authorization:"Bearer "+t.getSecurityToken()}},connect:{method:"POST",url:t.getRestPrefix()+o+"/connect",headers:{Authorization:"Bearer "+t.getSecurityToken()}},create:{method:"POST",url:t.getRestPrefix()+o+"/create",headers:{Authorization:"Bearer "+t.getSecurityToken()}}})}var o="/repository",n=this;return n.create=r,n}angular.module("otusDomainClient").factory("RepositoryResourceFactory",e),e.$inject=["$resource","DomainRestResourceContext"]}(),function(){"use strict";function e(e,t){function r(){return e({},{},{isValidDomain:{method:"GET",url:t.getRestPrefix()+o}})}var o="/url",n=this;return n.create=r,n}angular.module("otusDomainClient").factory("UrlResourceFactory",e),e.$inject=["$resource","DomainRestResourceContext"]}();