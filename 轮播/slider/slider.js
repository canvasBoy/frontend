;var Slider = (function() {
    var Slider = function(id) {
        this.node = $(id)
    }

    var touchstart = function(e) {
        var touches = e.targetTouches.length > 0? e.targetTouches : e.changedTouches
        this.status.startX = touches[0].clientX;
        this._slider.addClass('move')
        if (this.options.interval) {
            window.clearInterval(this.status._timer)
        }
        // 阻止默认方法会导致其中的 a 连接等元素失效
        // e.preventDefault();
    }

    var touchmove = function(e) {
        var touches = e.targetTouches.length > 0? e.targetTouches : e.changedTouches
        var currentX = touches[0].clientX
        this.status.deltaX = currentX - this.status.startX
        var dest = -(this.status.currentIndex * (this._slider.offset().width)) + this.status.deltaX

        // 使用 translate3d 防止部分 anroid 手机出现滑动过程中的白屏问题
        this._slider.css({
            'transform': 'translate3d('+ (dest) +'px,0,0)',
            '-webkit-transform': 'translate3d('+ (dest) +'px,0,0)'
        })
        // 阻止默认事件提高性能
        e.preventDefault();
        e.stopPropagation();
    }

    var touchend = function(e) {
        this._slider.removeClass('move')
        // 点击
        if (this.status.deltaX == 0) {
            if (this.onclick) {
                this.onclick()
            }
            return;
        }

        var oldIndex = this.status.currentIndex

        if (this.status.deltaX > 40) {
            this.status.currentIndex --
            if (!this.options.cycle && this.status.currentIndex <= 0) {
                this.status.currentIndex = 0
            }
        }
        if (this.status.deltaX < -40) {
            this.status.currentIndex ++
            if (!this.options.cycle && this.status.currentIndex >= this._length) {
                this.status.currentIndex = this._length - 1
            }
        }
        this.status.deltaX = 0;

        this.setIndex(this.status.currentIndex)
        if (this.options.interval) {
            this.status._timer = this.getTimer(this.options.interval)
        }
    }

    Slider.prototype.getTimer = function(interval) {
        var that = this;
        return setInterval(function() {
            var nextIndex = that.status.currentIndex + 1
            if (!that.options.cycle && nextIndex >= that._length) {
                nextIndex = 0
            }
            that.status.currentIndex = nextIndex
            that._slider.removeClass('move')
            that.setIndex(nextIndex)
        }, interval);
    }

    Slider.prototype.init = function(index, options) {
        var that = this
        this.isInit = true
        index = index || 0
        this._slider = this.node.find('.image-slider-box')
        this._sliderItems = this._slider.children()
        this._nav = this.node.find('.image-slider-nav')
        this._indicator = this._nav.find('.indicator')
        this._current = this._nav.find('.current-count')
        this._total = this._nav.find('.total-count')
        this._length = this._slider.children().length
        this.options = options || {}
        this.status = {
            startX: 0,
            deltaX: 0,
            currentIndex: index
        }
        this._total.text(this._length)
        this._indicator.html('')

        // 初始化计时器
        if (this.options.interval) {
            this.status._timer = this.getTimer(this.options.interval)
        }
        for (var i = 0; i < this._length; i++) {
            this._sliderItems.eq(i).css('right', -(i*100) + '%')
            this._indicator.append('<span>')
        }
        // 循环的情况
        if (this.options.cycle) {
            this._slider.prepend(this._sliderItems.last().clone().css({right: 'auto',left: '-100%'}))
            this._slider.append(this._sliderItems.first().clone().css('right', -(100*this._length)+ '%'))
        }
        this.setIndex(index)
        this._slider.on('touchstart', touchstart.bind(this))
        this._slider.on('touchmove', touchmove.bind(this))
        this._slider.on('touchend', touchend.bind(this))
        $(window).on('resize', function() {
            that.setIndex(that.status.currentIndex)
        })
    }

    Slider.prototype.setIndex = function(index, setStatus) {
        var that = this
        var toIndex = index,
            isCycle = false

        if (this.options.cycle) {
            if (index >= this._length) {
                toIndex = 0
                isCycle = true
            }
            if (index < 0) {
                toIndex = this._length - 1
                isCycle = true
            }
        }

        this._indicator.children().removeClass('current')
        this._indicator.children().eq(toIndex).addClass('current')
        this._current.text(toIndex + 1)

        if (setStatus) {
            this.status.currentIndex = toIndex
        }

        // 使用百分比可以不用 resize 的时候重新计算，但是在 android 下会出现白屏的情况
        var dest = -(index)*100;
        this._slider.css({
            'transform': 'translate3d('+ (dest) +'%,0,0)',
            '-webkit-transform': 'translate3d('+ (dest) +'%,0,0)'
        })

        // 如果是循环过程，调整回到想要到达的 index
        if (isCycle) {
            this.status.currentIndex = toIndex
            setTimeout(function() {
                var dest = -(toIndex)*(that._slider.offset().width)
                that._slider.addClass('move').css({
                    'transform': 'translate3d('+ (dest) +'px,0,0)',
                    '-webkit-transform': 'translate3d('+ (dest) +'px,0,0)'
                })
            }, 500);
        }
    }

    return Slider
})();
