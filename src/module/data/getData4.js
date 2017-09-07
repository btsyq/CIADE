var configs={
	"baseUrl":"http://192.168.4.213:9090/jusfoun/gov/api/extend/",//基础路径
	"data":{}
}

var Module={
  barHistory:function(cb){//参展企业数量走势数据
  	    getData(window.baseApiPath+"enterprise/enterpriseProportion",{},function(value){
			var data={
				"dataAxis":['成立30年以上','成立15-30年','成立10-15年','成立5-10年','成立1-5年','成立1年以内'],
				"data": []
			}
		
			for(var i in value.data[0]){ 
				data.data.push(value.data[0][i])
			} 
			cb(data);
	
  		});
	
  },
  enterpriseInfo:function(cb){
  		getData(window.baseApiPath+"enterprise/enterpriseInfo",{},function(value){
			
			cb(value.data[0]);
	
  		});
  },
  enterpriseAmount:function(cb){
  		getData(window.baseApiPath+"enterprise/enterpriseAmount",{},function(value){
			var data={
					"amount":[],
					"name":[],
					"allName":[]
				};
			$.each(value.data,function(i,v){	
					data.amount.push(v.amount);
					data.name.push(v.name.substr(0,4));
					data.allName.push(v.name);
			});
			cb(data);
	
  		});
  },
  enterpriseProof:function(cb){
  		getData(window.baseApiPath+"enterprise/enterpriseProof",{},function(value){
			var num=[];

			$.each(value.data[0],function(i,v){
				num.push(v)
			});
			cb(num);
	
  		});
  },
  enterpriseScale:function(cb){
  		getData(window.baseApiPath+"enterprise/enterpriseScale",{},function(value){
			var num=[];

			$.each(value.data[0],function(i,v){
				num.push(v)
			});
			cb(num);
	
  		});
  },
  enterpriseType:function(cb){
  		getData(window.baseApiPath+"enterprise/enterpriseType",{},function(value){
			var datas=[];
			value.data.forEach(function(v,i){
				if(v.name!=undefined&&v.value!=undefined){
					datas.push(v)
				}
			});
			cb(datas);
  		});
  },
  enterpriseRangeA:function(cb){
  		getData(window.baseApiPath+"enterprise/enterpriseRange",{key:"amount"},function(value){
			var data={};
			
			cb(value);
	
  		});
  },
  enterpriseRangeD:function(cb){
  		getData(window.baseApiPath+"enterprise/enterpriseRange",{key:"density"},function(value){
			
			cb(value);
	
  		});
  },
  enterpriseMap:function(cb,isChange){
  		getData(window.baseApiPath+"enterprise/enterpriseMap",{isChina:isChange},function(value){
			
			cb(value);
	
  		});
  }

}

function getData(url,param,callback){
	var value=null;
	var jsonData=param?param:{}
		$.ajax({
				url:url,
				type:"GET",
				data:"jsonData=" + JSON.stringify(jsonData),
				dataType:"json",
				success:function(val){
					value=val;
					callback(value)
				},
				error:function(error){
					console.error(error)
					return {};
				}
		});
	
	
}

module.exports = Module;