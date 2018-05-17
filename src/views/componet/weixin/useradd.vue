<template>
    <Row type="flex" justify="center" align="middle">
        <Col span="6">
            <h1 class="title">用户添加</h1>
            <Form label-position="top">
                <Row :gutter="16">
                    <Col span="12">
                        <FormItem>
                            <Input :maxlength="4" type="Number" v-model="person.user" placeholder="腾讯通编号（登陆账号）"></Input>
                        </FormItem>
                    </Col>
                    <Col span="12">
                        <FormItem>
                            <Input :maxlength="6" v-model="person.username" placeholder="姓名"></Input>
                        </FormItem>
                    </Col>
                </Row>
                <FormItem>
                    <Input :maxlength="16" type="password" v-model="person.userpasswd" placeholder="密码"></Input>
                </FormItem>
                <FormItem>
                    <Input v-model="person.userWechat" placeholder="微信号"></Input>
                </FormItem>
                <FormItem>
                    <RadioGroup v-model="person.formItem.radio">
                        <Radio label="male">管理员</Radio>
                        <Radio label="a">校领导</Radio>
                        <Radio label="b">系主任</Radio>
                        <Radio label="c">辅导员</Radio>
                    </RadioGroup>
                </FormItem>
            </Form>
            <Button type="primary" @click="addUser(false)" size="large">提交</Button>
        </Col>
    </Row>
</template>

<script>
    import smallCard from '../common/smallCard'

    export default {
        components: {
            smallCard
        },
        data() {
            return {
                myWeixinApiNumber: {
                    icon: "ios-chatbubble",
                    content: "6个",
                    title: "我的微信接口数"
                },
                person: {
                    user: '',
                    username: '',
                    userpasswd: '',
                    userWechat: '',
                    formItem: {
                        radio: "male"
                    },
                }
            }
        },
        methods: {
            addUser(nodesc) {
                const value = this.person;
                if (value.user && value.username && value.userpasswd && value.userWechat && value.formItem.radio) {
                    this.$Notice.success({
                        title: '注册成功！',
                        desc: nodesc ? '' : `账号：${this.person.user}<br/>密码：${this.person.userpasswd} `
                    });
                    value.user = value.username = value.userpasswd = value.userWechat = "";
                }
                else {
                    this.$Notice.error({
                        title: '提交失败！',
                        desc: nodesc ? '' : '抱歉！您有未填写内容，请填写完重新提交！ '
                    });
                }
            }
        }
    }
</script>

<style scoped>
    .title {
        color: #495060;
        line-height: 3;
        text-align: left;
    }

    .buttonWidth {
        width: 61.8%;
    }

    .center {
        text-align: center;
    }
</style>