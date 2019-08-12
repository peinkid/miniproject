const app = getApp()
Page({
    data: {
        id: '广州',
        future: {},
        sk: {},
        today: {},
        bug: ''
    },
    getCityId(e) {
        this.setData({
            id: e.detail.value
        }, () => {
            // this.getRes()

        })
    },
    getRes() {
        let that = this
        wx.request({
            url: 'http://v.juhe.cn/weather/index',
            data: {
                cityname: that.data.id,
                key: '3bdd4208bb3138962d644d4dbe455683'
            },
            success: function (res) {
                if (res.data.result == null) {
                    that.setData({
                        bug: res.data.reason
                    }, () => {
                        console.log(that.data.bug)
                    })
                } else {
                    console.log(res)
                    that.setData({
                        future: res.data.result.future,
                        sk: res.data.result.sk,
                        today: res.data.result.today
                    })
                }
            }
        })
    },
    onLoad: function (options) {
        // this.getRes()
    },
    onReady: function () {
        //Do some when page ready.

    },
    onShow: function () {
        //Do some when page show.

    },
    onHide: function () {
        //Do some when page hide.

    },
    onUnload: function () {
        //Do some when page unload.

    },
    onPullDownRefresh: function () {
        //Do some when page pull down.

    }
})