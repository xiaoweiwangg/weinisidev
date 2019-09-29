<template>
    <div>
        <div data-v-e1fcc0e8 title="2001" class="how-to-play">
        <div class="game-chess-img how-to-play-top">
          <div class="game-chess-img how-to-play-head"></div>
          <div class="game-chess-img how-to-play-close" @click="close"></div>
        </div>
        <div class="game-chess-img how-to-play-middle">
          <div class="how-to-play-content setfont games-font">
            <div>
              <div class="tit">开奖时间：</div>
              <div class="row-bottom">30秒1局，全天2880局；</div>
            </div>
            <div>
              <div class="tit">玩法规则</div>
              <div class="row-bottom">
                每局由一副扑克牌（&nbsp;不含大小王）开出20张牌为开奖号码，庄、闲1、闲2、闲3各5张牌，竞猜庄分别与闲1、闲2、闲3的牌型大小；
                <br />
                <br />庄对闲1「庄」&nbsp;&nbsp;庄获胜即中奖；
                <br />庄对闲1「闲1」&nbsp;闲1获胜即中奖；
                <br />庄对闲2「庄」&nbsp;&nbsp;庄获胜即中奖；
                <br />庄对闲2「闲2」闲2获胜即中奖；
                <br />庄对闲3「庄」&nbsp;&nbsp;庄获胜即中奖；
                <br />庄对闲3「闲3」闲3获胜即中奖；
              </div>
            </div>
            <div>
              <div class="tit">牌型大小：</div>
              <div
                class="row-bottom"
              >四炸&gt;五花牛&gt;四花牛&gt;牛牛&gt;牛九&gt;牛八&gt;牛七&gt;牛六&gt;牛五&gt;牛四&gt;牛三&gt;牛二&gt;牛一&gt;无牛；牌型相同时比较最大一张牌点数大小，K最大A最小，若点数也相同比较花色大小，黑桃&gt;红桃&gt;梅花&gt;方块;（特例：四炸时比较四张一样的那张牌）JQK都为10，A为1；</div>
            </div>
            <!---->
            <!---->
            <ul class="how-to-play-list">
              <li>
                <div class="how-to-play-code">
                  <em class="game-chess-card card-0 pk4"></em>
                  <em class="game-chess-card card-1 pk5"></em>
                  <em class="game-chess-card card-2 pk6"></em>
                  <em class="game-chess-card card-3 pk7"></em>
                  <em class="game-chess-card card-4 pk8"></em>
                </div>
                <div class="how-to-play-info">
                  <div class="tit">四炸：</div>
                  <div>五张牌中有四张完全一样；</div>
                </div>
              </li>
              <li>
                <div class="how-to-play-code">
                  <em class="game-chess-card card-0 pk53"></em>
                  <em class="game-chess-card card-1 pk52"></em>
                  <em class="game-chess-card card-2 pk51"></em>
                  <em class="game-chess-card card-3 pk50"></em>
                  <em class="game-chess-card card-4 pk47"></em>
                </div>
                <div class="how-to-play-info">
                  <div class="tit">五花牛：</div>
                  <div>五张牌全部是JQK的组合；</div>
                </div>
              </li>
              <li>
                <div class="how-to-play-code">
                  <em class="game-chess-card card-0 pk54"></em>
                  <em class="game-chess-card card-1 pk51"></em>
                  <em class="game-chess-card card-2 pk47"></em>
                  <em class="game-chess-card card-3 pk49"></em>
                  <em class="game-chess-card card-4 pk43"></em>
                </div>
                <div class="how-to-play-info">
                  <div class="tit">四花牛：</div>
                  <div>五张牌除了一张10，其余四张为JQK的组合；</div>
                </div>
              </li>
              <li>
                <div class="how-to-play-code">
                  <em class="game-chess-card card-0 pk13"></em>
                  <em class="game-chess-card card-1 pk28"></em>
                  <em class="game-chess-card card-2 pk42"></em>
                  <em class="game-chess-card card-3 pk44"></em>
                  <em class="game-chess-card card-4 pk48"></em>
                </div>
                <div class="how-to-play-info">
                  <div class="tit">牛牛：</div>
                  <div>五张牌中任意三张相加为10的倍数，剩余两张相加也为10的倍数；</div>
                </div>
              </li>
              <li>
                <div class="how-to-play-code">
                  <em class="game-chess-card card-0 pk14"></em>
                  <em class="game-chess-card card-1 pk28"></em>
                  <em class="game-chess-card card-2 pk43"></em>
                  <em class="game-chess-card card-3 pk5"></em>
                  <em class="game-chess-card card-4 pk8"></em>
                </div>
                <div class="how-to-play-info">
                  <div class="tit">牛一至牛九：</div>
                  <div>五张牌中任意三张相加为10的倍数，剩余两张相加取个位数，个位数是几就是牛几；</div>
                </div>
              </li>
              <li>
                <div class="how-to-play-code">
                  <em class="game-chess-card card-0 pk33"></em>
                  <em class="game-chess-card card-1 pk32"></em>
                  <em class="game-chess-card card-2 pk28"></em>
                  <em class="game-chess-card card-3 pk41"></em>
                  <em class="game-chess-card card-4 pk47"></em>
                </div>
                <div class="how-to-play-info">
                  <div class="tit">无牛：</div>
                  <div>五张牌中任意三张相加不为10的倍数；</div>
                </div>
              </li>
            </ul>
            <!---->
          </div>
        </div>
        <div class="game-chess-img how-to-play-dottom">
          <em class="game-chess-img how-to-play-icon"></em>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name:"HowPlay",
       data(){
           return {
            //    ishow:false
           }
       } ,
       methods:{
           close(){
               this.$emit("close")
           }
       }
    }
</script>

<style lang="scss" scoped>

</style>