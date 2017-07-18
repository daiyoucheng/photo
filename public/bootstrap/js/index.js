var index = {
    picture:function () {
        $(".aa").click(function () {
            debugger;
            var data = {}
            data.url = this.children[1].innerHTML;
            var url = "http://localhost:8888/picture"
            $.ajax({
                type: 'GET',
                url: url ,
                data: data,
                success:function (data) {
                    if(data.arr.length <=0){
                        alert("里面没有图片啦");
                        return;
                    }
                    $(".row").empty();

                    for(var a = 0;a <data.arr.length;a++){
                    var str = '<div class="col-xs-6 col-md-3"><a href="#" class="thumbnail"><img src="file/'+data.url+'/'+  data.arr[a]+ '" alt="..."> </a> <h3 style="text-align:center"><%=arr[i]%></h3> </div>'
                        $(".row").prepend(str);
                    }
                }
            });
        })
    }
}
$(document).ready(function () {
        index.picture();
})
