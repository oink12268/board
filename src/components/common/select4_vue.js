Vue.component('select2', {
    props: ['value', 'item'],
    template: '<select><slot></slot></select>',
    data: function () {
        return {
            cnt: false
        }
    },
    mounted: function () {
        var vm = this;
        $(this.$el)
            .select2()
            .val(this.value)
            .trigger('change')
            .on('change', function () {
                vm.$emit('input', this.value); //요건 두번씩 호출되어야 정상 동작 함!!
                vm.cnt = !vm.cnt; //동일한 이벤트가 두번씩 불려서 강제로 한번만 emit 하게 했음.. ㅠㅠ
                if (vm.cnt) vm.$emit('s2chg', this.value);
            })
    },
    watch: {
        value: function (value) {
            $(this.$el).val(value).trigger('change');
        },
    },
    destroyed: function () {
        $(this.$el).off().select2('destroy')
    },
    methods: {
        reload () {
            var vm = this;
            $(this.$el)
                .select2()
                .val(this.value)
                .trigger('change')
                .on('change', function () {
                    vm.$emit('input', this.value); //요건 두번씩 호출되어야 정상 동작 함!!
                    vm.cnt = !vm.cnt; //동일한 이벤트가 두번씩 불려서 강제로 한번만 emit 하게 했음.. ㅠㅠ
                    if (vm.cnt) vm.$emit('s2chg', this.value);
                })
        }
    }
});
