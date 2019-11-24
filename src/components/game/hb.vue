<template>
    <div class="hbrv">
        <div class="hb">
            <img class="rbhbimg" :class="{dou:t,s:s}" @click="dou" :src="k?oimg:cimg" alt="" width="50">
        </div>
    </div>
</template>

<script>
import $ from "jquery";
import _ from "underscore";
import { setTimeout } from "timers";
export default {
    name: "HB",
    props: ["value", "wvalue", "pri"],
    data() {
        return {
            cimg: "/img/chb.png",
            oimg: "/img/ohb.gif",
            t: false,
            k: false,
            s: true,
            pos: [],
            f: false,
        };
    },
    mounted() {
        this.tpos();
        $("img").css({
            width: $(window).width() / 5 - 15 + "px"
        });

    },
    methods: {
        tpos() {
            this.pos = [];
            for (let i = 0; i < $(".cont .hb img").length; i++) {
                this.pos.push(
                    $(".rbhbimg")
                    .eq(i)
                    .position()
                );
            }
            this.pos = _.shuffle(this.pos);
            for (let i = 0; i < this.pos.length; i++) {
                $(".rbhbimg")
                    .eq(i)
                    .css({
                        position: "absolute",
                        left: this.pos[i].left + "px",
                        top: this.pos[i].top + "px"
                    });
            }
        },
        dou() {
            if (this.pri < 0) {
                this.$dialog({
                    title: "余额不足,请充值!",
                    message: "前往充值中心"
                }).then(() => {
                    this.$router.push("/recharge")
                    return
                });
                return
            }
            this.t = !this.t;
            setTimeout(() => {
              this.k=!this.k
                this.axios
                    .post("/redbao", {
                        luck: this.value,
                        pri: this.pri,
                        wuli: this.wvalue,
                        name: JSON.parse(sessionStorage.getItem("userinfo")).name,
                    })
                    .then(x => {
                        console.log(x)
                        this.$emit("up",x.data.balance)
                        if (x.data.msg == "ok") {
                            this.t = false
                            this.$dialog({
                                title: `恭喜您,抽到红包${x.data.jj.toFixed(2)}元`,
                                message: "点击确定后红包将自动刷新!"
                            }).then(() => {
                                this.k = false
                                this.s = true
                                this.tpos();
                            });
                        } else if (x.data.msg == "no") {
                            this.t = false
                            this.$dialog({
                                title: "oh!No，下次再接再厉吧！！",
                                message: "点击确定后红包将自动刷新!"
                            }).then(() => {
                                this.k = false
                                this.s = true
                                this.tpos();
                            });
                        } else {
                            this.t = false
                            this.$dialog({
                                title: "余额不足",
                                message: "请充值"
                            }).then(() => {
                                this.$router.push("/recharge")
                            });
                        }
                    });
            }, 700);
        },
        open() {}
    }
};
</script>

<style lang="scss" scoped>
.s {
    box-shadow: 3px 3px 5px black;
}

.f {
    animation: f 0.07s linear 0s infinite alternate backwards;
}

.hb {
    img {
        transition: 0.9s;
    }
    width: 20%;
    height: 70px;
    box-sizing: border-box;
    margin: 10px;
}

.dou {
    animation: d 0.07s linear 0s infinite alternate backwards;
    z-index: 999;
}

@keyframes d {
    0% {
        transform: rotate(20deg) scale(1.3);
    }
    100% {
        transform: rotate(-20deg) scale(1.3);
    }
}

@keyframes f {
    0% {
        transform: rotateY(360deg);
    }
    100% {
        transform: rotateY(360deg);
    }
}
</style>