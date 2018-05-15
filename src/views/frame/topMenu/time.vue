<template>
    <MenuItem name="1">
        {{this.time}}
    </MenuItem>
</template>

<script>
    export default {
        data() {
            return {
                time: ''
            };
        },
        mounted: function () {
            setInterval(() => {
                let a = new Date();

                function check(str) {
                    str = str.toString();
                    if (str.length < 2) {
                        str = "0" + str;
                    }
                    return str;
                }

                this.time = `${check(a.getMonth()+1)}月${check(a.getDay())}日  ${check(a.getHours())}:${check(a.getMinutes())}:${check(
                    a.getSeconds()
                )}`;
            }, 1000)
        }
    }
</script>

<style scoped>

</style>