<template>
    <div>
        <Breadcrumb id="frameBreadcrumb">
            <BreadcrumbItem>
                <router-link to="/">
                    主页
                </router-link>
            </BreadcrumbItem>
            <BreadcrumbItem>{{$store.state.topnav[0]}}</BreadcrumbItem>
            <BreadcrumbItem>{{$store.state.topnav[1]}}</BreadcrumbItem>
        </Breadcrumb>
    </div>
</template>

<script>
    export default {}
</script>

<style scoped>
    #frameBreadcrumb {
        margin: 16px 0
    }
</style>