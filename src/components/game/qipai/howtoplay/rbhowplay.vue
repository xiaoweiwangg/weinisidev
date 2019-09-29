<template>
    <div>
<div data-v-e1fcc0e8 title="2002" class="how-to-play">
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
                每局由一副扑克牌（不含大小王）开出6张牌，红方、黑方各3张牌，竞猜红方和黑方的牌型大小，
                <br />
                <br />「红方」红方胜利即中奖；
                <br />「黑方」黑方胜利即中奖；
                <br />「幸运一击」胜利一方的牌型为特殊牌型时（豹子、顺金、金花、顺子、对子9-A）即中奖，不同牌型奖金也不同；
              </div>
            </div>
            <div>
              <div class="tit">牌型大小：</div>
              <div class="row-bottom">豹子&gt;顺金&gt;金花&gt;顺子&gt;对子&gt;单张；若牌型相同比点数大小，若点数也相同则比花色大小；</div>
            </div>
            <div>
              <div class="tit">点数大小：</div>
              <div
                class="row-bottom"
              >A&gt;K&gt;Q&gt;J&gt;10&gt;9&gt;8&gt;7&gt;6&gt;5&gt;4&gt;3&gt;2；</div>
            </div>
            <div>
              <div class="tit">花色大小：</div>
              <div class="row-bottom">黑桃&gt;红桃&gt;梅花&gt;方块</div>
            </div>
            <ul class="how-to-play-list">
              <li>
                <div class="how-to-play-code">
                  <em class="game-chess-card rbcard-0 pk4"></em>
                  <em class="game-chess-card rbcard-1 pk5"></em>
                  <em class="game-chess-card rbcard-2 pk6"></em>
                </div>
                <div class="how-to-play-info">
                  <div class="tit">豹子：</div>
                  <div>三张点数相同的牌；</div>
                </div>
              </li>
              <li>
                <div class="how-to-play-code">
                  <em class="game-chess-card rbcard-0 pk46"></em>
                  <em class="game-chess-card rbcard-1 pk50"></em>
                  <em class="game-chess-card rbcard-2 pk54"></em>
                </div>
                <div class="how-to-play-info">
                  <div class="tit">顺金：</div>
                  <div>三张花色相同的顺子；</div>
                </div>
              </li>
              <li>
                <div class="how-to-play-code">
                  <em class="game-chess-card rbcard-0 pk4"></em>
                  <em class="game-chess-card rbcard-1 pk24"></em>
                  <em class="game-chess-card rbcard-2 pk36"></em>
                </div>
                <div class="how-to-play-info">
                  <div class="tit">金花：</div>
                  <div>三张花色相同的牌</div>
                </div>
              </li>
              <li>
                <div class="how-to-play-code">
                  <em class="game-chess-card rbcard-0 pk15"></em>
                  <em class="game-chess-card rbcard-1 pk17"></em>
                  <em class="game-chess-card rbcard-2 pk20"></em>
                </div>
                <div class="how-to-play-info">
                  <div class="tit">顺子：</div>
                  <div>三张不同花色的连牌；</div>
                </div>
              </li>
              <li>
                <div class="how-to-play-code">
                  <em class="game-chess-card rbcard-0 pk4"></em>
                  <em class="game-chess-card rbcard-1 pk5"></em>
                  <em class="game-chess-card rbcard-2 pk8"></em>
                </div>
                <div class="how-to-play-info">
                  <div class="tit">对子：</div>
                  <div>两张点数一样的牌；</div>
                </div>
              </li>
              <li>
                <div class="how-to-play-code">
                  <em class="game-chess-card rbcard-0 pk21"></em>
                  <em class="game-chess-card rbcard-1 pk40"></em>
                  <em class="game-chess-card rbcard-2 pk54"></em>
                </div>
                <div class="how-to-play-info">
                  <div class="tit">单张：</div>
                  <div>三张不同的牌；</div>
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
        name:"RbPlay",
        methods:{
           close(){
               this.$emit("close")
           }
       }
    }
</script>

<style lang="scss" scoped>

</style>