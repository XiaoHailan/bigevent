$(function () {
    // 点击‘去注册’链接
    $('#link-reg').on('click', function () {
        $('.login-box').hide()
        $('.reg-box').show()
    })

    //点击“去登陆”链接
    $('#link-login').on('click', function () {
        $('.login-box').show()
        $('.reg-box').hide()
    })
})