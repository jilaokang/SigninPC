<template>
    <div>
        <div id="login">
            <Row type="flex" justify="center" align="middle" style="{height:sreceenheight}" >
                <Col span="6">
                <Card>
                    <p slot="title">
                        登录
                    </p>
                    <Form ref="formInline" :model="formInline" :rules="ruleInline" inline>
                        <FormItem prop="user">
                            <Input type="text" v-model="formInline.user" placeholder="用户名">
                            <Icon type="ios-person-outline" slot="prepend"></Icon>
                            </Input>
                        </FormItem>
                        <br/>
                        <FormItem prop="password">
                            <Input type="password" v-model="formInline.password" placeholder="密码">
                            <Icon type="ios-locked-outline" slot="prepend"></Icon>
                            </Input>
                        </FormItem>
                        <br/>
                        <FormItem>
                            <Button type="primary" @click="handleSubmit('formInline')">登录</Button>
                        </FormItem>
                    </Form>
                </Card>
                </Col>
            </Row>
        </div>
    </div>
</template>


<style scoped>
    #login {
        text-align: center;
        margin: 8em auto;
    }
</style>

<script>
    export default {
        data() {
            return {
                formInline: {
                    user: "",
                    password: ""
                },
                ruleInline: {
                    user: [{
                        required: true,
                        message: "用户名还没输入怎么登？",
                        trigger: "blur"
                    }],
                    password: [{
                            required: true,
                            message: "密码呢？",
                            trigger: "blur"
                        },
                        {
                            type: "string",
                            min: 6,
                            message: "The password length cannot be less than 6 bits",
                            trigger: "blur"
                        }
                    ]
                }
            };
        },
        computed:{
            sreceenheight(){
                return window.innerHeight;
            }
        },
        methods: {
            handleSubmit(name) {
                this.$refs[name].validate(valid => {
                    if (valid) {
                        this.$Message.success("Success!");
                    } else {
                        this.$Message.error("Fail!");
                    }
                });
            }
        }
    };
</script>
