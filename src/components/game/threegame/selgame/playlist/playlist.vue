<template>
  <div class="game">
    <div class="play">
      <div class="list" v-for="(item, index) in playlist" :key="index">
        <van-button
          plain
          type="primary"
          @click="wch(index)"
          :class="{ isact: isact(index) }"
        >{{ item.posname }}</van-button>
      </div>
    </div>
    <div class="ls">
      <div class="lschild" v-for="(item, index) in sleitem" :key="index">
        <div class="lsname">
          <van-button type="info" class="name">{{ item.type }}</van-button>
        </div>
        <div class="lslist">
          <van-button
            :class="{ isz: isz(index, t) }"
            :disabled="isz(index,t)"
            type="warning"
            plain
            v-for="(i, t) in item.list"
            :key="t"
            @click="ente(x, index, t)"
          >{{ i }}</van-button>
        </div>
      </div>
    </div>
    <div class="zz" @click="show"></div>
  </div>
</template>

<script>
export default {
  name: "PList",
  computed: {
    sleitem() {
      return this.playlist[this.x].posplaylist;
    }
  },
  methods: {
    wch(x) {
      this.x = x;
      this.y = 0;
      this.z = 0;
      this.$emit("sub", {
        pname: this.playlist[x].posname,
        pgame: this.playlist[x].posplaylist[this.y].list[this.z]
      });
    },
    ente(x, y, z) {
      this.x = x;
      this.y = y;
      this.z = z;
      this.$emit("sub", {
        pname: this.playlist[x].posname,
        pgame: this.playlist[x].posplaylist[y].list[z]
      });
    },
    isz(y, z) {
      return (z == this.z) & (y == this.y) ? true : false;
    },
    isact(x) {
      return x == this.x ? true : false;
    },
    show() {
      this.$emit("show");
    }
  },
  data() {
    return {
      x: 0,
      y: 0,
      z: 0,

      playlist: [
        {
          posname: "一星",
          posplaylist: [
            { type: "定位", list: ["直选复式"] }
          ]
        },
        {
          posname: "前二",
          posplaylist: [
            {
              type: "直选",
              list: ["直选复式", "直选单式", "直选和值", "直选跨度"]
            },
            {
              type: "组选",
              list: [ "组选复式","组选单式", "组选和值", "不定位包胆"]
            }
          ]
        },
        {
          posname: "后二",
          posplaylist: [
            {
              type: "直选",
              list: ["直选复式", "直选单式", "直选和值", "直选跨度"]
            },
            {
              type: "组选",
              list: [ "组选复式","组选单式", "组选和值", "不定位包胆"]
            }
          ]
        },
        {
          posname: "前三",
          posplaylist: [
            {
              type: "直选",
              list: ["直选复式", "直选单式", "直选和值", "直选跨度"]
            },
            {
              type: "组选",
              list: ["组选组六","组选组三", "组选单式", "组选和值", "一码不定位","二码不定位"]
            }
          ]
        },
        {
          posname: "龙虎斗",
          posplaylist: [
            { type: "龙虎斗", list: ["龙虎斗"] }
          ]
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.isz {
  background-color: red;
}
.isact {
  background-color: red;
}
.game {
  z-index: 9999;
  display: flex;
  height: 100%;
  position: absolute;
  flex-flow: column;
  .play {
    background-color: white;
    min-height: 100px;
    display: flex;
    flex-flow: wrap;
    justify-content: space-around;
  }
  .zz {
    flex: 1;
    background-color: rgba(0, 0, 0, 0.8);
  }
}
.list {
  margin: 10px;
}
.ls {
  background-color: #fff;
  border-top: 3px dashed #ccc;
  .lschild {
    display: flex;
  }
  .lsname {
    display: flex;
    justify-content: center;
    min-width: 100px;
    align-items: center;
  }
  .lslist {
    display: flex;
    flex-flow: wrap;
    margin: 5px;
    .van-button {
      margin: 3px 5px;
    }
  }
  .lschild:nth-child(2) {
    border-top: 2px solid gray;
  }
}
.playlist {
  position: absolute;
  top: 100px;
}
</style>
