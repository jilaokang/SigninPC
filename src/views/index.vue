<style scoped>
    .layout {
        border: 1px solid #d7dde4;
        background: #f5f7f9;
        position: relative;
        border-radius: 4px;
        overflow: hidden;
    }

    .layout-footer-center {
        text-align: center;
    }

    #frameContent{
        padding: 24px 0;
        minHeight: 280px;
        background: #fff;
    }

    #frameLayout{
        padding: 0 50px;
    }

    #frameSider{
        background: #fff;
    }
</style>
<template>
    <div class="layout">
        <Layout>
            <Header>
                <topMenu></topMenu>
            </Header>
            <Layout id="frameLayout">
                <topNav></topNav>
                <Content id="frameContent">
                    <Layout>
                        <Sider hide-trigger id="frameSider">
                            <leftSider></leftSider>
                        </Sider>
                        <centerContent></centerContent>
                    </Layout>
                </Content>
            </Layout>
            <footFather></footFather>
        </Layout>
    </div>
</template>
<script>
    import leftSider from './componet/frame/leftMenu';
    import centerContent from './componet/frame/content';
    import topNav from './componet/frame/topNav'
    import footFather from './componet/frame/footer'
    import topMenu from './componet/frame/topMenu'

    export default {
        components: {
            leftSider, centerContent, topNav, footFather,topMenu
        }
    }
</script>
