<template>
    <div>
        <Breadcrumb id="frameBreadcrumb">
            <BreadcrumbItem>
                <router-link to="/">
                    主页
                </router-link>
            </BreadcrumbItem>
            <BreadcrumbItem v-if="$store.state.topnav">{{$store.state.topnav}}</BreadcrumbItem>
        </Breadcrumb>
    </div>
</template>

<script>
    export default {
    }
</script>

<style scoped>
    #frameBreadcrumb {
        margin: 16px 0
    }
</style>