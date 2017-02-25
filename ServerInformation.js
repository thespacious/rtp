function makeLot(name, totalSpaces)
{
	var json=
	{
  		"name": name,
  		"totalSpaces": totalSpaces
  	};
  var rec = {
  	type: "POST",
  	url: "192.168.1.3:8080/api/v1/makeLot",
  	contentType: "application/json; charset=UTF-8",
  	data: JSON.stringify(json)
  };
$.ajax(rec).done(function(data)
{
  console.log(data);
});
}