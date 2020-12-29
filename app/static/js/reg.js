$(function(){
    $('#btreg').click(function(){
        console.log('click')
        let result = $('.result');
        $.ajax({
            url: '/signUpAjax',
            data: $('#form') serialize(),
            dataType:'json',
            type: 'POST',
            success: function(response) {
                $(result).html(JSON.parse(response)['html'])
            },
            error: function(error){
                $(result).html(JSON.parse(response)['html'])
            },
        })
    })
})