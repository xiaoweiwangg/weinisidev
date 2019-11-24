<template>
    <div class="longhu">
    
        <van-popup v-model="ishow">
            <div data-v-e1fcc0e8="" title="2005" class="how-to-play">
                <div class="game-chess-img how-to-play-top">
                    <div class="game-chess-img how-to-play-head">
                    </div>
                    <div @click="close" class="game-chess-img how-to-play-close">
                    X
                    </div>
                </div>
                <div class="game-chess-img how-to-play-middle">
                    <div class="how-to-play-content setfont games-font">
                        <div>
                            <div class="tit">开奖时间：</div>
                            <div class="row-bottom">30秒1局，全天2880局；</div>
                        </div>
                        <div>
                            <div class="tit">玩法规则</div>
                            <div class="row-bottom">《奔驰宝马》是一款极刺激的豪车轮盘游戏，每一局时长为30S，共有4个汽车标志，分为大小两种方式代表八个不同的下注区域。游戏玩家可以在游戏过程中任意选择自己喜欢的区域投放筹码。游戏开始后红灯会开始转动，几圈以后红灯会停下，红灯所停位置就代表此次游戏开奖结果。玩家投中后，即可获得相应的奖金；<br><br>1.本游戏共有4个汽车标志，分为大小两种方式代表八个不同的下注区域，游戏玩家可以在游戏过程中任意选择自己喜欢的区域投放筹码。<br><br><br><br>2.整个游戏共有8个下注区域分别为：&nbsp;大奔驰&nbsp;、小奔驰&nbsp;、大宝马&nbsp;、小宝马&nbsp;、大保时捷&nbsp;、小保时捷&nbsp;、大大众&nbsp;、小大众等分别代表了5种不同的赔率；游戏开始后红灯会开始转动，几圈以后红灯会停下，红灯所停位置就代表此次游戏开奖结果。<br><br><br><br>3.游戏时长：30S；<br><br><br><br>4.每天局数：每天2880局；第一局开始时间为：00:00:00（实际以游戏服务端启动时间为准，同时中途游戏中断或者暂停，局数将根据上一局游戏的局数+1，开始下一局游戏；）<br><br>2.游戏规则<br><br>（1）开始新局后即开始下注倒数计时，你可以依照你的预测，选择筹码下注&nbsp;。<br><br>（2）倒数时间结束后停止下注，红灯将会开始转动，几圈后，红灯停下，红灯所停的位置就代表此次的游戏开奖结果。<br><br>（3）开奖完成后，将会直接根据你所押注的盘口进行派奖；</div>
                        </div>
                        <!---->
                        <!---->
                        <!---->
                        <!---->
                        <!---->
                    </div>
                </div>
                <div class="game-chess-img how-to-play-dottom"><em class="game-chess-img how-to-play-icon"></em></div>
            </div>
        </van-popup>
        <div class="ad" v-show="isload">
            <p>{{per}}%</p>
        </div>
        <header-top :start="djs" :playdate="playdate" :type="type" @play="play" @close="close"></header-top>
        <div class="player">
            <span>({{pm}})</span>
        </div>
        <chi-per class="ch" v-for="(item,index) in chiplist" :key="index" :chip="item.price" :size=".25"></chi-per>
        <div class="d">
            <div data-v-e1fcc0e8="" class="benz-container">
                <div data-v-e1fcc0e8="" class="trend-content">
                    <div data-v-e1fcc0e8="" class="game-benzbmw-img benzbmw-trend">
                        <div data-v-e1fcc0e8="" class="benzbmw-ul">
                            <div data-v-e1fcc0e8="" id="meteor-end" class="game-benzbmw-img benzbmw-trendbg">
                                <div data-v-e1fcc0e8="" class="game-benzbmw-img benzbmw-position blue-bmw"></div>
                                <div data-v-e1fcc0e8="" class="game-benzbmw-img benzbmw-position blue-circle show line-show blue-light"></div>
                            </div>
                            <div data-v-e1fcc0e8="" id="" class="game-benzbmw-img benzbmw-trendbg">
                                <div data-v-e1fcc0e8="" class="game-benzbmw-img benzbmw-position blue-bmw"></div>
                                <div data-v-e1fcc0e8="" class="game-benzbmw-img benzbmw-position blue-circle"></div>
                            </div>
                            <div data-v-e1fcc0e8="" id="" class="game-benzbmw-img benzbmw-trendbg">
                                <div data-v-e1fcc0e8="" class="game-benzbmw-img benzbmw-position blue-bmw"></div>
                                <div data-v-e1fcc0e8="" class="game-benzbmw-img benzbmw-position blue-circle"></div>
                            </div>
                            <div data-v-e1fcc0e8="" id="" class="game-benzbmw-img benzbmw-trendbg">
                                <div data-v-e1fcc0e8="" class="game-benzbmw-img benzbmw-position blue-porsche"></div>
                                <div data-v-e1fcc0e8="" class="game-benzbmw-img benzbmw-position blue-circle"></div>
                            </div>
                            <div data-v-e1fcc0e8="" id="" class="game-benzbmw-img benzbmw-trendbg">
                                <div data-v-e1fcc0e8="" class="game-benzbmw-img benzbmw-position blue-benz"></div>
                                <div data-v-e1fcc0e8="" class="game-benzbmw-img benzbmw-position blue-circle"></div>
                            </div>
                            <div data-v-e1fcc0e8="" id="" class="game-benzbmw-img benzbmw-trendbg">
                                <div data-v-e1fcc0e8="" class="game-benzbmw-img benzbmw-position blue-bmw"></div>
                                <div data-v-e1fcc0e8="" class="game-benzbmw-img benzbmw-position blue-circle"></div>
                            </div>
                            <div data-v-e1fcc0e8="" id="" class="game-benzbmw-img benzbmw-trendbg">
                                <div data-v-e1fcc0e8="" class="game-benzbmw-img benzbmw-position blue-public"></div>
                                <div data-v-e1fcc0e8="" class="game-benzbmw-img benzbmw-position blue-circle"></div>
                            </div>
                            <div data-v-e1fcc0e8="" id="" class="game-benzbmw-img benzbmw-trendbg">
                                <div data-v-e1fcc0e8="" class="game-benzbmw-img benzbmw-position red-porsche"></div>
                                <div data-v-e1fcc0e8="" class="game-benzbmw-img benzbmw-position red-circle"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div data-v-e1fcc0e8="" class="benz-content games-font">
                    <div data-v-e1fcc0e8="" class="benzbmw-outside">
                        <div data-v-e1fcc0e8="" title="1" class="game-benzbmw-img box">
                            <div data-v-e1fcc0e8="" class="game-benzbmw-img box-red-porsche"></div>
                            <div data-v-e1fcc0e8="" class="game-benzbmw-img box-red-circle"></div>
                            <div data-v-e1fcc0e8="" class="game-benzbmw-img box-red-light display"></div>
                            <div data-v-e1fcc0e8="" class=""></div>
                            <div data-v-e1fcc0e8="" class="game-benzbmw-run-light" style="display: none;"></div>
                        </div>
                        <div data-v-e1fcc0e8="" title="2" class="game-benzbmw-img box">
                            <div data-v-e1fcc0e8="" class="game-benzbmw-img box-blue-porsche"></div>
                            <div data-v-e1fcc0e8="" class="game-benzbmw-img box-blue-circle"></div>
                            <div data-v-e1fcc0e8="" class="game-benzbmw-img box-blue-light display"></div>
                            <div data-v-e1fcc0e8="" class=""></div>
                            <div data-v-e1fcc0e8="" class="game-benzbmw-run-light" style="display: none;"></div>
                        </div>
                        <div data-v-e1fcc0e8="" title="3" class="game-benzbmw-img box">
                            <div data-v-e1fcc0e8="" class="game-benzbmw-img box-red-bmw"></div>
                            <div data-v-e1fcc0e8="" class="game-benzbmw-img box-red-circle"></div>
                            <div data-v-e1fcc0e8="" class="game-benzbmw-img box-red-light display"></div>
                            <div data-v-e1fcc0e8="" class=""></div>
                            <div data-v-e1fcc0e8="" class="game-benzbmw-run-light" style="display: none;"></div>
                        </div>
                        <div data-v-e1fcc0e8="" title="4" class="game-benzbmw-img box">
                            <div data-v-e1fcc0e8="" class="game-benzbmw-img box-blue-bmw"></div>
                            <div data-v-e1fcc0e8="" class="game-benzbmw-img box-blue-circle"></div>
                            <div data-v-e1fcc0e8="" class="game-benzbmw-img box-blue-light display"></div>
                            <div data-v-e1fcc0e8="" class=""></div>
                            <div data-v-e1fcc0e8="" class="game-benzbmw-run-light" style="display: none;"></div>
                        </div>
                        <div data-v-e1fcc0e8="" title="5" class="game-benzbmw-img box">
                            <div data-v-e1fcc0e8="" class="game-benzbmw-img box-red-benz"></div>
                            <div data-v-e1fcc0e8="" class="game-benzbmw-img box-red-circle"></div>
                            <div data-v-e1fcc0e8="" class="game-benzbmw-img box-red-light display"></div>
                            <div data-v-e1fcc0e8="" class=""></div>
                            <div data-v-e1fcc0e8="" class="game-benzbmw-run-light" style="display: none;"></div>
                        </div>
                        <div data-v-e1fcc0e8="" title="6" class="game-benzbmw-img box">
                            <div data-v-e1fcc0e8="" class="game-benzbmw-img box-blue-benz"></div>
                            <div data-v-e1fcc0e8="" class="game-benzbmw-img box-blue-circle"></div>
                            <div data-v-e1fcc0e8="" class="game-benzbmw-img box-blue-light display"></div>
                            <div data-v-e1fcc0e8="" class=""></div>
                            <div data-v-e1fcc0e8="" class="game-benzbmw-run-light" style="display: none;"></div>
                        </div>
                        <div data-v-e1fcc0e8="" title="7" class="game-benzbmw-img box">
                            <div data-v-e1fcc0e8="" class="game-benzbmw-img box-red-public"></div>
                            <div data-v-e1fcc0e8="" class="game-benzbmw-img box-red-circle"></div>
                            <div data-v-e1fcc0e8="" class="game-benzbmw-img box-red-light display"></div>
                            <div data-v-e1fcc0e8="" class=""></div>
                            <div data-v-e1fcc0e8="" class="game-benzbmw-run-light" style="display: none;"></div>
                        </div>
                        <div data-v-e1fcc0e8="" title="8" class="game-benzbmw-img box">
                            <div data-v-e1fcc0e8="" class="game-benzbmw-img box-blue-public"></div>
                            <div data-v-e1fcc0e8="" class="game-benzbmw-img box-blue-circle"></div>
                            <div data-v-e1fcc0e8="" class="game-benzbmw-img box-blue-light display"></div>
                            <div data-v-e1fcc0e8="" class=""></div>
                            <div data-v-e1fcc0e8="" class="game-benzbmw-run-light" style="display: none;"></div>
                        </div>
                        <div data-v-e1fcc0e8="" title="9" class="game-benzbmw-img box">
                            <div data-v-e1fcc0e8="" class="game-benzbmw-img box-red-porsche"></div>
                            <div data-v-e1fcc0e8="" class="game-benzbmw-img box-red-circle"></div>
                            <div data-v-e1fcc0e8="" class="game-benzbmw-img box-red-light display"></div>
                            <div data-v-e1fcc0e8="" class=""></div>
                            <div data-v-e1fcc0e8="" class="game-benzbmw-run-light" style="display: none;"></div>
                        </div>
                        <div data-v-e1fcc0e8="" title="10" class="game-benzbmw-img box">
                            <div data-v-e1fcc0e8="" class="game-benzbmw-img box-blue-porsche"></div>
                            <div data-v-e1fcc0e8="" class="game-benzbmw-img box-blue-circle"></div>
                            <div data-v-e1fcc0e8="" class="game-benzbmw-img box-blue-light display"></div>
                            <div data-v-e1fcc0e8="" class=""></div>
                            <div data-v-e1fcc0e8="" class="game-benzbmw-run-light" style="display: none;"></div>
                        </div>
                        <div data-v-e1fcc0e8="" title="11" class="game-benzbmw-img box">
                            <div data-v-e1fcc0e8="" class="game-benzbmw-img box-red-bmw"></div>
                            <div data-v-e1fcc0e8="" class="game-benzbmw-img box-red-circle"></div>
                            <div data-v-e1fcc0e8="" class="game-benzbmw-img box-red-light display"></div>
                            <div data-v-e1fcc0e8="" class=""></div>
                            <div data-v-e1fcc0e8="" class="game-benzbmw-run-light" style="display: none;"></div>
                        </div>
                        <div data-v-e1fcc0e8="" title="12" class="game-benzbmw-img box">
                            <div data-v-e1fcc0e8="" class="game-benzbmw-img box-blue-bmw"></div>
                            <div data-v-e1fcc0e8="" class="game-benzbmw-img box-blue-circle"></div>
                            <div data-v-e1fcc0e8="" class="game-benzbmw-img box-blue-light display"></div>
                            <div data-v-e1fcc0e8="" class=""></div>
                            <div data-v-e1fcc0e8="" class="game-benzbmw-run-light" style="display: none;"></div>
                        </div>
                        <div data-v-e1fcc0e8="" title="13" class="game-benzbmw-img box">
                            <div data-v-e1fcc0e8="" class="game-benzbmw-img box-red-benz"></div>
                            <div data-v-e1fcc0e8="" class="game-benzbmw-img box-red-circle"></div>
                            <div data-v-e1fcc0e8="" class="game-benzbmw-img box-red-light display"></div>
                            <div data-v-e1fcc0e8="" class=""></div>
                            <div data-v-e1fcc0e8="" class="game-benzbmw-run-light" style="display: none;"></div>
                        </div>
                        <div data-v-e1fcc0e8="" title="14" class="game-benzbmw-img box">
                            <div data-v-e1fcc0e8="" class="game-benzbmw-img box-blue-benz"></div>
                            <div data-v-e1fcc0e8="" class="game-benzbmw-img box-blue-circle"></div>
                            <div data-v-e1fcc0e8="" class="game-benzbmw-img box-blue-light display"></div>
                            <div data-v-e1fcc0e8="" class=""></div>
                            <div data-v-e1fcc0e8="" class="game-benzbmw-run-light" style="display: none;"></div>
                        </div>
                        <div data-v-e1fcc0e8="" title="15" class="game-benzbmw-img box">
                            <div data-v-e1fcc0e8="" class="game-benzbmw-img box-red-public"></div>
                            <div data-v-e1fcc0e8="" class="game-benzbmw-img box-red-circle"></div>
                            <div data-v-e1fcc0e8="" class="game-benzbmw-img box-red-light display"></div>
                            <div data-v-e1fcc0e8="" class=""></div>
                            <div data-v-e1fcc0e8="" class="game-benzbmw-run-light" style="display: none;"></div>
                        </div>
                        <div data-v-e1fcc0e8="" title="16" class="game-benzbmw-img box">
                            <div data-v-e1fcc0e8="" class="game-benzbmw-img box-blue-public"></div>
                            <div data-v-e1fcc0e8="" class="game-benzbmw-img box-blue-circle"></div>
                            <div data-v-e1fcc0e8="" class="game-benzbmw-img box-blue-light display"></div>
                            <div data-v-e1fcc0e8="" class=""></div>
                            <div data-v-e1fcc0e8="" class="game-benzbmw-run-light" style="display: none;"></div>
                        </div>
                        <div data-v-e1fcc0e8="" title="17" class="game-benzbmw-img box">
                            <div data-v-e1fcc0e8="" class="game-benzbmw-img box-red-porsche"></div>
                            <div data-v-e1fcc0e8="" class="game-benzbmw-img box-red-circle"></div>
                            <div data-v-e1fcc0e8="" class="game-benzbmw-img box-red-light display"></div>
                            <div data-v-e1fcc0e8="" class=""></div>
                            <div data-v-e1fcc0e8="" class="game-benzbmw-run-light" style="display: none;"></div>
                        </div>
                        <div data-v-e1fcc0e8="" title="18" class="game-benzbmw-img box">
                            <div data-v-e1fcc0e8="" class="game-benzbmw-img box-blue-porsche"></div>
                            <div data-v-e1fcc0e8="" class="game-benzbmw-img box-blue-circle"></div>
                            <div data-v-e1fcc0e8="" class="game-benzbmw-img box-blue-light display"></div>
                            <div data-v-e1fcc0e8="" class=""></div>
                            <div data-v-e1fcc0e8="" class="game-benzbmw-run-light" style="display: none;"></div>
                        </div>
                        <div data-v-e1fcc0e8="" title="19" class="game-benzbmw-img box">
                            <div data-v-e1fcc0e8="" class="game-benzbmw-img box-red-bmw"></div>
                            <div data-v-e1fcc0e8="" class="game-benzbmw-img box-red-circle"></div>
                            <div data-v-e1fcc0e8="" class="game-benzbmw-img box-red-light display"></div>
                            <div data-v-e1fcc0e8="" class=""></div>
                            <div data-v-e1fcc0e8="" class="game-benzbmw-run-light" style="display: none;"></div>
                        </div>
                        <div data-v-e1fcc0e8="" title="20" class="game-benzbmw-img box">
                            <div data-v-e1fcc0e8="" class="game-benzbmw-img box-blue-bmw"></div>
                            <div data-v-e1fcc0e8="" class="game-benzbmw-img box-blue-circle"></div>
                            <div data-v-e1fcc0e8="" class="game-benzbmw-img box-blue-light"></div>
                            <div data-v-e1fcc0e8="" class=""></div>
                            <div data-v-e1fcc0e8="" class="game-benzbmw-run-light" style="display: none;"></div>
                        </div>
                        <div data-v-e1fcc0e8="" title="21" class="game-benzbmw-img box">
                            <div data-v-e1fcc0e8="" class="game-benzbmw-img box-red-benz"></div>
                            <div data-v-e1fcc0e8="" class="game-benzbmw-img box-red-circle"></div>
                            <div data-v-e1fcc0e8="" class="game-benzbmw-img box-red-light display"></div>
                            <div data-v-e1fcc0e8="" class=""></div>
                            <div data-v-e1fcc0e8="" class="game-benzbmw-run-light" style="display: none;"></div>
                        </div>
                        <div data-v-e1fcc0e8="" title="22" class="game-benzbmw-img box">
                            <div data-v-e1fcc0e8="" class="game-benzbmw-img box-blue-benz"></div>
                            <div data-v-e1fcc0e8="" class="game-benzbmw-img box-blue-circle"></div>
                            <div data-v-e1fcc0e8="" class="game-benzbmw-img box-blue-light display"></div>
                            <div data-v-e1fcc0e8="" class=""></div>
                            <div data-v-e1fcc0e8="" class="game-benzbmw-run-light" style="display: none;"></div>
                        </div>
                        <div data-v-e1fcc0e8="" title="23" class="game-benzbmw-img box">
                            <div data-v-e1fcc0e8="" class="game-benzbmw-img box-red-public"></div>
                            <div data-v-e1fcc0e8="" class="game-benzbmw-img box-red-circle"></div>
                            <div data-v-e1fcc0e8="" class="game-benzbmw-img box-red-light display"></div>
                            <div data-v-e1fcc0e8="" class=""></div>
                            <div data-v-e1fcc0e8="" class="game-benzbmw-run-light" style="display: none;"></div>
                        </div>
                        <div data-v-e1fcc0e8="" title="24" class="game-benzbmw-img box">
                            <div data-v-e1fcc0e8="" class="game-benzbmw-img box-blue-public"></div>
                            <div data-v-e1fcc0e8="" class="game-benzbmw-img box-blue-circle"></div>
                            <div data-v-e1fcc0e8="" class="game-benzbmw-img box-blue-light display"></div>
                            <div data-v-e1fcc0e8="" class=""></div>
                            <div data-v-e1fcc0e8="" class="game-benzbmw-run-light" style="display: none;"></div>
                        </div>
                        <div data-v-e1fcc0e8="" title="25" class="game-benzbmw-img box">
                            <div data-v-e1fcc0e8="" class="game-benzbmw-img box-red-porsche"></div>
                            <div data-v-e1fcc0e8="" class="game-benzbmw-img box-red-circle"></div>
                            <div data-v-e1fcc0e8="" class="game-benzbmw-img box-red-light display"></div>
                            <div data-v-e1fcc0e8="" class=""></div>
                            <div data-v-e1fcc0e8="" class="game-benzbmw-run-light" style="display: none;"></div>
                        </div>
                        <div data-v-e1fcc0e8="" title="26" class="game-benzbmw-img box">
                            <div data-v-e1fcc0e8="" class="game-benzbmw-img box-blue-porsche"></div>
                            <div data-v-e1fcc0e8="" class="game-benzbmw-img box-blue-circle"></div>
                            <div data-v-e1fcc0e8="" class="game-benzbmw-img box-blue-light display"></div>
                            <div data-v-e1fcc0e8="" class=""></div>
                            <div data-v-e1fcc0e8="" class="game-benzbmw-run-light" style="display: none;"></div>
                        </div>
                        <div data-v-e1fcc0e8="" title="27" class="game-benzbmw-img box">
                            <div data-v-e1fcc0e8="" class="game-benzbmw-img box-red-bmw"></div>
                            <div data-v-e1fcc0e8="" class="game-benzbmw-img box-red-circle"></div>
                            <div data-v-e1fcc0e8="" class="game-benzbmw-img box-red-light display"></div>
                            <div data-v-e1fcc0e8="" class=""></div>
                            <div data-v-e1fcc0e8="" class="game-benzbmw-run-light" style="display: none;"></div>
                        </div>
                        <div data-v-e1fcc0e8="" title="28" class="game-benzbmw-img box">
                            <div data-v-e1fcc0e8="" class="game-benzbmw-img box-blue-bmw"></div>
                            <div data-v-e1fcc0e8="" class="game-benzbmw-img box-blue-circle"></div>
                            <div data-v-e1fcc0e8="" class="game-benzbmw-img box-blue-light display"></div>
                            <div data-v-e1fcc0e8="" class=""></div>
                            <div data-v-e1fcc0e8="" class="game-benzbmw-run-light" style="display: none;"></div>
                        </div>
                        <div data-v-e1fcc0e8="" title="29" class="game-benzbmw-img box">
                            <div data-v-e1fcc0e8="" class="game-benzbmw-img box-red-benz"></div>
                            <div data-v-e1fcc0e8="" class="game-benzbmw-img box-red-circle"></div>
                            <div data-v-e1fcc0e8="" class="game-benzbmw-img box-red-light display"></div>
                            <div data-v-e1fcc0e8="" class=""></div>
                            <div data-v-e1fcc0e8="" class="game-benzbmw-run-light" style="display: none;"></div>
                        </div>
                        <div data-v-e1fcc0e8="" title="30" class="game-benzbmw-img box">
                            <div data-v-e1fcc0e8="" class="game-benzbmw-img box-blue-benz"></div>
                            <div data-v-e1fcc0e8="" class="game-benzbmw-img box-blue-circle"></div>
                            <div data-v-e1fcc0e8="" class="game-benzbmw-img box-blue-light display"></div>
                            <div data-v-e1fcc0e8="" class=""></div>
                            <div data-v-e1fcc0e8="" class="game-benzbmw-run-light" style="display: none;"></div>
                        </div>
                        <div data-v-e1fcc0e8="" title="31" class="game-benzbmw-img box">
                            <div data-v-e1fcc0e8="" class="game-benzbmw-img box-red-public"></div>
                            <div data-v-e1fcc0e8="" class="game-benzbmw-img box-red-circle"></div>
                            <div data-v-e1fcc0e8="" class="game-benzbmw-img box-red-light display"></div>
                            <div data-v-e1fcc0e8="" class=""></div>
                            <div data-v-e1fcc0e8="" class="game-benzbmw-run-light" style="display: none;"></div>
                        </div>
                        <div data-v-e1fcc0e8="" title="32" class="game-benzbmw-img box">
                            <div data-v-e1fcc0e8="" class="game-benzbmw-img box-blue-public"></div>
                            <div data-v-e1fcc0e8="" class="game-benzbmw-img box-blue-circle"></div>
                            <div data-v-e1fcc0e8="" class="game-benzbmw-img box-blue-light display"></div>
                            <div data-v-e1fcc0e8="" class=""></div>
                            <div data-v-e1fcc0e8="" class="game-benzbmw-run-light" style="display: none;"></div>
                        </div>
                    </div>
                    <div data-v-e1fcc0e8="" class="benzbmw-allmoney games-font"><span data-v-e1fcc0e8="">总下注 323</span></div>
                    <div data-v-e1fcc0e8="" class="benzbmw-inside">
                        <div data-v-e1fcc0e8="" class="benzbmw-abs game-benzbmw-inside opacity-box benzbmw-red-porsche">
                            <div data-v-e1fcc0e8="" class="benzbmw-light-img benzbmw-light-red-porsche"></div>
                            <div data-v-e1fcc0e8="" class="benzbmw-inside-up"><span data-v-e1fcc0e8="" class="benzbmw-money">151</span></div>
                            <div data-v-e1fcc0e8="" class="benzbmw-inside-middle"><span data-v-e1fcc0e8="" id="content1" class="red-chipbox"></span>
                                <div data-v-e1fcc0e8="">
                                    <div data-v-e1fcc0e8="" class="benzbmw-red-odds">39.400 x</div>
                                </div>
                                <div data-v-e1fcc0e8="">
                                    <div data-v-e1fcc0e8="" class="game-benzbmw-img benzbmw-inside-red inside-red-porsche">
                                        <div data-v-e1fcc0e8="" class="benzbmw-run-porsche-img"></div>
                                        <!---->
                                        <!---->
                                    </div>
                                </div>
                                <!---->
                            </div>
                            <div data-v-e1fcc0e8="" class="benzbmw-inside-down"><span data-v-e1fcc0e8="" class="benzbmw-red">0</span></div>
                        </div>
                        <div data-v-e1fcc0e8="" class="benzbmw-abs game-benzbmw-inside opacity-box benzbmw-red-bmw">
                            <div data-v-e1fcc0e8="" class="benzbmw-light-img benzbmw-light-red-bmw"></div>
                            <div data-v-e1fcc0e8="" class="benzbmw-inside-up"><span data-v-e1fcc0e8="" class="benzbmw-money">152</span></div>
                            <div data-v-e1fcc0e8="" class="benzbmw-inside-middle"><span data-v-e1fcc0e8="" id="content2" class="red-chipbox"></span>
                                <div data-v-e1fcc0e8="">
                                    <div data-v-e1fcc0e8="" class="benzbmw-red-odds">29.550 x</div>
                                </div>
                                <div data-v-e1fcc0e8="">
                                    <div data-v-e1fcc0e8="" class="game-benzbmw-img benzbmw-inside-red inside-red-bmw">
                                        <!---->
                                        <div data-v-e1fcc0e8="" class="benzbmw-run-img"></div>
                                        <!---->
                                    </div>
                                </div>
                                <!---->
                            </div>
                            <div data-v-e1fcc0e8="" class="benzbmw-inside-down"><span data-v-e1fcc0e8="" class="benzbmw-red">0</span></div>
                        </div>
                        <div data-v-e1fcc0e8="" class="benzbmw-abs game-benzbmw-inside opacity-box benzbmw-red-benz">
                            <div data-v-e1fcc0e8="" class="benzbmw-light-img benzbmw-light-red-benz"></div>
                            <div data-v-e1fcc0e8="" class="benzbmw-inside-up"><span data-v-e1fcc0e8="" class="benzbmw-money">0</span></div>
                            <div data-v-e1fcc0e8="" class="benzbmw-inside-middle"><span data-v-e1fcc0e8="" id="content3" class="red-chipbox"></span>
                                <div data-v-e1fcc0e8="">
                                    <div data-v-e1fcc0e8="" class="benzbmw-red-odds">19.700 x</div>
                                </div>
                                <div data-v-e1fcc0e8="">
                                    <div data-v-e1fcc0e8="" class="game-benzbmw-img benzbmw-inside-red inside-red-benz">
                                        <!---->
                                        <div data-v-e1fcc0e8="" class="benzbmw-run-img"></div>
                                        <!---->
                                    </div>
                                </div>
                                <!---->
                            </div>
                            <div data-v-e1fcc0e8="" class="benzbmw-inside-down"><span data-v-e1fcc0e8="" class="benzbmw-red">0</span></div>
                        </div>
                        <div data-v-e1fcc0e8="" class="benzbmw-abs game-benzbmw-inside opacity-box benzbmw-red-public">
                            <div data-v-e1fcc0e8="" class="benzbmw-light-img benzbmw-light-red-public"></div>
                            <div data-v-e1fcc0e8="" class="benzbmw-inside-up"><span data-v-e1fcc0e8="" class="benzbmw-money">1</span></div>
                            <div data-v-e1fcc0e8="" class="benzbmw-inside-middle"><span data-v-e1fcc0e8="" id="content4" class="red-chipbox"></span>
                                <div data-v-e1fcc0e8="">
                                    <div data-v-e1fcc0e8="" class="benzbmw-red-odds">9.850 x</div>
                                </div>
                                <div data-v-e1fcc0e8="">
                                    <div data-v-e1fcc0e8="" class="game-benzbmw-img benzbmw-inside-red inside-red-public">
                                        <!---->
                                        <div data-v-e1fcc0e8="" class="benzbmw-run-img"></div>
                                        <!---->
                                    </div>
                                </div>
                                <!---->
                            </div>
                            <div data-v-e1fcc0e8="" class="benzbmw-inside-down"><span data-v-e1fcc0e8="" class="benzbmw-red">0</span></div>
                        </div>
                        <div data-v-e1fcc0e8="" class="benzbmw-abs game-benzbmw-inside opacity-box benzbmw-blue-porsche">
                            <div data-v-e1fcc0e8="" class="benzbmw-light-img benzbmw-light-blue-porsche"></div>
                            <div data-v-e1fcc0e8="" class="benzbmw-inside-up"><span data-v-e1fcc0e8="" class="benzbmw-money">5</span></div>
                            <div data-v-e1fcc0e8="" class="benzbmw-inside-middle"><span data-v-e1fcc0e8="" id="content5" class="blue-chipbox"></span>
                                <!---->
                                <div data-v-e1fcc0e8="">
                                    <div data-v-e1fcc0e8="" class="game-benzbmw-img benzbmw-inside-blue inside-blue-porsche">
                                        <!---->
                                        <!---->
                                        <div data-v-e1fcc0e8="" class="game-benzbmw-img benzbmw-run-small"></div>
                                    </div>
                                </div>
                                <div data-v-e1fcc0e8="">
                                    <div data-v-e1fcc0e8="" class="benzbmw-blue-odds">x 4.925</div>
                                </div>
                            </div>
                            <div data-v-e1fcc0e8="" class="benzbmw-inside-down"><span data-v-e1fcc0e8="" class="benzbmw-blue">0</span></div>
                        </div>
                        <div data-v-e1fcc0e8="" class="benzbmw-abs game-benzbmw-inside opacity-box benzbmw-blue-bmw">
                            <div data-v-e1fcc0e8="" class="benzbmw-light-img benzbmw-light-blue-bmw"></div>
                            <div data-v-e1fcc0e8="" class="benzbmw-inside-up"><span data-v-e1fcc0e8="" class="benzbmw-money">5</span></div>
                            <div data-v-e1fcc0e8="" class="benzbmw-inside-middle"><span data-v-e1fcc0e8="" id="content6" class="blue-chipbox"></span>
                                <!---->
                                <div data-v-e1fcc0e8="">
                                    <div data-v-e1fcc0e8="" class="game-benzbmw-img benzbmw-inside-blue inside-blue-bmw">
                                        <!---->
                                        <!---->
                                        <div data-v-e1fcc0e8="" class="game-benzbmw-img benzbmw-run-small"></div>
                                    </div>
                                </div>
                                <div data-v-e1fcc0e8="">
                                    <div data-v-e1fcc0e8="" class="benzbmw-blue-odds">x 4.925</div>
                                </div>
                            </div>
                            <div data-v-e1fcc0e8="" class="benzbmw-inside-down"><span data-v-e1fcc0e8="" class="benzbmw-blue">0</span></div>
                        </div>
                        <div data-v-e1fcc0e8="" class="benzbmw-abs game-benzbmw-inside opacity-box benzbmw-blue-benz">
                            <div data-v-e1fcc0e8="" class="benzbmw-light-img benzbmw-light-blue-benz"></div>
                            <div data-v-e1fcc0e8="" class="benzbmw-inside-up"><span data-v-e1fcc0e8="" class="benzbmw-money">5</span></div>
                            <div data-v-e1fcc0e8="" class="benzbmw-inside-middle"><span data-v-e1fcc0e8="" id="content7" class="blue-chipbox"></span>
                                <!---->
                                <div data-v-e1fcc0e8="">
                                    <div data-v-e1fcc0e8="" class="game-benzbmw-img benzbmw-inside-blue inside-blue-benz">
                                        <!---->
                                        <!---->
                                        <div data-v-e1fcc0e8="" class="game-benzbmw-img benzbmw-run-small"></div>
                                    </div>
                                </div>
                                <div data-v-e1fcc0e8="">
                                    <div data-v-e1fcc0e8="" class="benzbmw-blue-odds">x 4.925</div>
                                </div>
                            </div>
                            <div data-v-e1fcc0e8="" class="benzbmw-inside-down"><span data-v-e1fcc0e8="" class="benzbmw-blue">0</span></div>
                        </div>
                        <div data-v-e1fcc0e8="" class="benzbmw-abs game-benzbmw-inside opacity-box benzbmw-blue-public">
                            <div data-v-e1fcc0e8="" class="benzbmw-light-img benzbmw-light-blue-public"></div>
                            <div data-v-e1fcc0e8="" class="benzbmw-inside-up"><span data-v-e1fcc0e8="" class="benzbmw-money">4</span></div>
                            <div data-v-e1fcc0e8="" class="benzbmw-inside-middle"><span data-v-e1fcc0e8="" id="content8" class="blue-chipbox"></span>
                                <!---->
                                <div data-v-e1fcc0e8="">
                                    <div data-v-e1fcc0e8="" class="game-benzbmw-img benzbmw-inside-blue inside-blue-public">
                                        <!---->
                                        <!---->
                                        <div data-v-e1fcc0e8="" class="game-benzbmw-img benzbmw-run-small"></div>
                                    </div>
                                </div>
                                <div data-v-e1fcc0e8="">
                                    <div data-v-e1fcc0e8="" class="benzbmw-blue-odds">x 4.925</div>
                                </div>
                            </div>
                            <div data-v-e1fcc0e8="" class="benzbmw-inside-down"><span data-v-e1fcc0e8="" class="benzbmw-blue">0</span></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="desk">
            </div>
        </div>
        <lotte-r :cpl="cpl" class="cpr" @chek="ck"></lotte-r>
        <Foo-ter @reback="reback" @sub="sub" :pr="price" :start="start"></Foo-ter>
        <div class="timerdjs" v-show="jishil">{{str}}</div>
        <div class="x">
            <div class="xs"></div>
            <div class="xs"></div>
        </div>
    </div>
</template>

<script>
import $ from "jquery";
import _ from "underscore";
import HeaderTop from "../base/top";
import LotteR from "../base/lotter";
import { Toast } from "vant";
import FooTer from "../base/footer";
import PukerV from "../base/puker";
import ChiPer from "../base/chip";
export default {
    name: "NiuNiu",
    components: {
        HeaderTop,
        LotteR,
        FooTer,
        PukerV,
        ChiPer,
        [Toast.name]: Toast
    },
    filters: {
        fname(x) {
            switch (x) {
                case 0:
                    return "庄";
                    break;
                case 1:
                    return "闲1";
                    break;
                case 2:
                    return "闲2";
                    break;
                case 3:
                    return "闲3";
                    break;
                default:
                    break;
            }
        }
    },
    data() {
        return {
            pm: 0,
            playmode: 1.0,
            playratel: 1.0,
            po: 0,
            list: [], //用户投注定位列表
            cpl: false, //chip动画
            per: 0, //加载进度
            isload: true, //首屏加载动画
            fz: false, //初始化是否翻转牌面
            ct: false, //开牌动画
            t: [], //牌翻转的序列
            n: "jinhua", //全局牛n
            ischip: 1, //默认投注码
            ishow: true,
            puklist: [
                //扑克牌列表
                { num: _.random(0, 13), type: 0, hua: 0 },
                { num: _.random(0, 13), type: 0, hua: 0 },
                { num: _.random(0, 13), type: 0, hua: 0 },
                { num: _.random(0, 13), type: 1, hua: 0 },
                { num: _.random(0, 13), type: 1, hua: 0 },
                { num: _.random(0, 13), type: 1, hua: 0 }
            ],
            chiplist: [], //所有用户的投注码
            jieguo: [], //接收开牌结果集
            vs: [
                //对局列表
                [
                    { type: 0, playnum: 0, iswin: false },
                    { type: 1, playnum: 0, iswin: false }
                ],
                [
                    { type: 0, playnum: 0, iswin: false },
                    { type: 2, playnum: 0, iswin: false }
                ]
            ],
            price: 0,
            start: 30, //默认起始倒计时
            playdate: "2019001", //投注日期
            type: "", //开奖投注状态
            timer: null, //定时器
            djs: 0,
            jishil: false,
            str: "停止下注"
        };
    },
    beforeDestroy() {
        createjs.Sound.stop();
        window.clearInterval(this.timer);
        this.timer = null;
        this.$socket.emit("qtniuniu", {
            username: JSON.parse(sessionStorage.getItem("userinfo")).name
        });
    },
    computed: {},
    mounted() {
        alert("维护中,暂不对外开放投注")
        return
        let tl = 0;
        setInterval(() => {
            tl++;
            if (tl >= 8) {
                tl = 1;
            }
            $("#lbg").attr("class", "bg-img long-animation" + tl);
            $("#tbg").attr("class", "bg-img tiger-animation" + tl);
        }, 200);
        this.sockets.subscribe("rb2", data => {
            this.playdate = parseInt(data.msg.playdate);
            this.puklist = JSON.parse(data.msg.playnum);
        });
        this.sockets.subscribe("move", data => {
            this.chiplist.push(data.tz);
            this.list.push(data.tz);
        });
        this.sockets.subscribe("qtrbwar", data => {
            this.pm = data.pm;
        });
        //---------------------
        console.log($(".box").length);

        document.addEventListener("visibilitychange", function() {
            //浏览器切换事件
            if (document.visibilityState == "hidden") {
                //离开当前tab标签
                createjs.Sound.stop();
            } else {
                /////回到当前tab标签
                // createjs.Sound.play("bg");
            }
        });
        let that = this;
        for (let i = 0; i < $(".jj .sj").length; i++) {}
        let p = this.per;
        var loader = new createjs.LoadQueue();
        // 添加声音支持
        loader.installPlugin(createjs.Sound);
        // 检测文件加载进度
        loader.addEventListener("progress", loadprogress);
        //加载文件列表
        loader.loadManifest(
            [
                { id: "bg", src: "/mp3/benchi.mp3" },
                { id: "daojishi", src: "/mp3/daojishi.mp3" },
                { id: "dingdong", src: "/mp3/dingdong.wav" },
                { id: "start", src: "/rbwar/start.mp3" },
                { id: "kaipai", src: "/mp3/kaipai.mp3" },
                { id: "fapai", src: "/mp3/fapai.mp3" },
                { id: "tingzhu", src: "/mp3/tingzhu.mp3" },
                { id: "shouzhu", src: "/mp3/shouzhu.mp3" },
                { id: "lotter", src: "/mp3/lotter.mp3" },
                { id: "jinbi", src: "/mp3/jinbi.mp3" },
                { id: "baozi", src: "/rbwar/baozi.mp3" },
                { id: "jinshun", src: "/rbwar/shunjin.mp3" },
                { id: "jinhua", src: "/rbwar/jinhua.mp3" },
                { id: "shunzi", src: "/rbwar/shunzi.mp3" },
                { id: "duizi", src: "/rbwar/duizi.mp3" },
                { id: "danzhang", src: "/rbwar/danzhang.mp3" },
                { id: "chexiao", src: "/rbwar/chexiao.mp3" },
                { id: "chenggong", src: "/rbwar/chenggong.mp3" },
                { id: "bwin", src: "/rbwar/bwin.mp3" },
                { id: "rwin", src: "/rbwar/rwin.mp3" },
                { id: "n6", src: "/mp3/FamaleNiuLiu.mp3" },
                { id: "n9", src: "/mp3/FamaleNiuJiu.mp3" },
                { id: "n2", src: "/mp3/FamaleNiuEr.mp3" },
                { id: "n8", src: "/mp3/FamaleNiuBa.mp3" },
                { id: "chip", src: "/mp3/chip.mp3" }
            ],
            true
        );
        //加载文件完成
        loader.addEventListener("complete", listener);
        //媒体文件扩展
        createjs.Sound.alternateExtensions = ["mp3", "wav"];

        function loadprogress(e) {
            let per = e.loaded;
            if (per > 1) {
                per = 1;
            }
            $(".ad p").text("LOADING . . ." + (per * 100).toFixed(0) + " %");
        }

        function listener() {
            that.isload = false;
            createjs.Sound.play("bg", { loop: -1 });
            that.cpl = true;

            that.init();
        }
        //展示牌
        $(".sj").css({
            height: $(window).height() * 0.11 + "px"
        });
        $(".vs").css({
            height: $(window).height() * 0.11 + "px"
        });
        this.normal();
    },
    updated() {
        if ($(".van-notify")[0]) {
            $(".van-notify")[0].style.zIndex = 999999999999999999;
        }
        if ($(".van-toast")[0]) {
            $(".van-toast")[0].style.zIndex = 999999999999999999;
        }
        // console.log($(".ch").eq(0).position().top);
        for (let i = 0; i < $(".ch").length; i++) {
            if (
                $(".ch")
                .eq(i)
                .position().top == 113
            ) {
                // createjs.Sound.play("chip");
                $(".ch")
                    .eq(i)
                    .animate({
                            left: `${_.random(
                $(".jj .sj")
                  .eq(this.chiplist[i].addr)
                  .offset().left - 40,
                $(".jj .sj")
                  .eq(this.chiplist[i].addr)
                  .offset().left + 50
              )}px`,
                            top: `${_.random(
                $(".jj .sj")
                  .eq(this.chiplist[i].addr)
                  .offset().top - 20,
                $(".jj .sj")
                  .eq(this.chiplist[i].addr)
                  .offset().top
              )}px`
                        },
                        600
                    );
            }
        }
    },
    watch: {
        jieguo(x) {
            if (x.length == 2) {
                let winlist = [{ rwin: false }, { bwin: false }, { wluck: false }];
                // setTimeout(() => {
                //   (Math.random() * 10) % 2 == 0 ? this.wanjiashou() : this.zhuangshou();
                // }, 2000);
                let s = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 1];
                let size = [
                    "baozi",
                    "jinshun",
                    "jinhua",
                    "shunzi",
                    "duizi",
                    "danzhang"
                ].reverse();
                // console.log(x);
                //校验同牌
                if (x[0].niu == x[1].niu) {
                    if (s.indexOf(x[0].maxnum) > s.indexOf(x[1].maxnum)) {
                        winlist[0].rwin = true;
                    } else {
                        winlist[1].bwin = true;
                    }
                    if (x[0].maxnum == x[1].maxnum) {
                        let hsize = [1, 0, 2, 3].reverse();
                        if (hsize.indexOf(x[0].maxhua) > hsize.indexOf(x[1].maxhua)) {
                            winlist[0].rwin = true;
                        } else {
                            winlist[1].bwin = true;
                        }
                    }
                } else {
                    if (size.indexOf(x[0].niu) > size.indexOf(x[1].niu)) {
                        winlist[0].rwin = true;
                    } else {
                        winlist[1].bwin = true;
                    }
                }
                if (winlist[0].rwin) {
                    createjs.Sound.play("rwin");
                    $(".redblackwar-red").addClass("on");
                } else {
                    $(".redblackwar-black").addClass("on");
                    createjs.Sound.play("bwin");
                }
                if (winlist[0].rwin && size.indexOf(x[0].niu) != 0) {
                    $(".redblackwar-hit").addClass("on");
                    console.log("luck", size.indexOf(x[0].niu));
                }
                if (winlist[1].bwin && size.indexOf(x[1].niu) != 0) {
                    $(".redblackwar-hit").addClass("on");
                    console.log("luck", size.indexOf(x[1].niu));
                }
                console.log(winlist);

                setTimeout(() => {
                    $(".redblackwar-red,.redblackwar-black,.redblackwar-hit").removeClass(
                        "on"
                    );
                }, 10000);
                //结算
                this.$socket.emit("ks", { data: JSON.stringify(this.vs) });
                this.sockets.subscribe("jiesuan", data => {
                    console.log();
                });
            }
        }
    },
    methods: {
        run() {
            let i = 0
            setInterval(() => {
                i++
                if (i >= $(".box").length) {
                    i = 0
                }
            }, 1000);
        },
        jishiv(x) {
            x > 17 ? "开奖时间" : "下注时间";
        },
        getdata() {
            return new Promise((res, rej) => {
                this.$socket.emit("niuniu2", {
                    username: JSON.parse(sessionStorage.getItem("userinfo")).name
                });
            });
        },
        close() {
            this.ishow = !this.ishow;
        },
        play() {
            createjs.Sound.stop();
        },
        init() {
            this.$socket.emit("rbwar", {
                username: JSON.parse(sessionStorage.getItem("userinfo")).name
            });
            this.sockets.subscribe("rbwar", data => {
                // 初始倒计时时间
                this.start = 30 - (data.s % 30);
                this.djs = 15 - (data.s % 15);

                // 初始开奖date数据
                this.playdate = parseInt(data.msg.playdate);
                this.puklist = JSON.parse(data.msg.playnum);
                this.pm = data.pm;
            });
            if (this.start > 14) {
                this.type = "开奖中";
                this.fz = false;
            } else {
                this.fz = true;
                this.type = "投注中";
                console.log("投注");
            }
            this.timer = setInterval(() => {
                this.start--;
                this.djs--;
                if (this.start > 14) {
                    this.type = "投注中";
                } else {
                    this.type = "开奖中";
                }
                if (this.start == 3) {
                    this.shoupai();
                    setTimeout(() => {
                        this.fapai();
                        createjs.Sound.play("xiazhu");
                        this.str = "开始下注";
                        this.jishil = true;
                        $("#an").addClass("longtiger-kj-container");
                        setTimeout(() => {
                            $("#an").removeClass("longtiger-kj-container");
                        }, 2000);
                    }, 2000);
                    if (this.start % 15 == 0 && this.start != 15) {}
                } else {
                    this.str = null;
                    this.jishil = false;
                }
                if (this.start == 18) {
                    createjs.Sound.play("daojishi");
                    this.str = "3";
                    this.jishil = true;
                }
                if (this.start == 17) {
                    createjs.Sound.play("daojishi");
                    this.str = "2";
                    this.jishil = true;
                }
                if (this.start == 16) {
                    createjs.Sound.play("start");
                    $("#vs").addClass("show");
                    createjs.Sound.play("daojishi");
                    this.jishil = true;
                    // this.getdata().then(x => {
                    //   console.log(x);
                    //   this.playdate = parseInt(x.playdate);
                    //   this.puklist = JSON.parse(x.playnum);
                    // });
                    setTimeout(() => {
                        $("#vs").removeClass("show");
                    }, 2000);
                }
                if (this.start == 14) {}
                if (this.start == 15) {
                    createjs.Sound.play("tingzhu");
                    this.str = "停止下注";
                    this.jishil = true;
                }
                if (this.start == 14) {
                    setTimeout(() => {
                        this.kaipai();
                    }, 500);
                }
                if (this.start <= 0) {
                    this.start = 30;
                }
                if (this.djs == 0) {
                    this.djs = 15;
                }
            }, 1000);
        },
        reback() {
            createjs.Sound.play("lotter");
            this.vs.map(x => {
                x.map(v => (v.playnum = 0));
            });
            this.price = 0;
        },
        sub() {
            if (this.start < 15 || this.price < 1) {
                return;
            }
            let shopcar = {};
            (shopcar.username = JSON.parse(sessionStorage.getItem("userinfo")).name),
            //   // (shopcar.userinput = JSON.stringify({ data: this.gamelist }));
            (shopcar.buydet = JSON.stringify(this.vs));
            shopcar.userinput = JSON.stringify(this.vs);
            shopcar.playdate = `${this.playdate + 1}期`;
            shopcar.playname = "红黑大战";
            shopcar.playgame = "rbwar";
            shopcar.playratel = this.playratel;
            shopcar.price = this.price;
            // shopcar.dl = this.num;
            shopcar.iskj = 0;
            shopcar.playmode = this.playmode;
            this.axios.post("/shopcar", shopcar).then(x => {
                this.reback();
                if (x.data.msg == "余额不足") {
                    this.$notify({
                        message: "您的余额不足,请充值"
                    });
                    Toast.fail("订单提交失败");
                    setTimeout(() => {
                        createjs.Sound.play("dingdong");
                    }, 100);
                } else if (x.data.msg == "ok") {
                    Toast.success("订单提交成功!");
                    this.price = 0;
                    setTimeout(() => {
                        createjs.Sound.play("dingdong");
                    }, 100);
                }
            });
        },
        add(x, y) {
            if (this.start < 17 && this.start > 14) {
                this.$notify({
                    message: "本期投注已截止,请等待开奖",
                    background: "#dc3b40",
                    duration: 1500
                });
                return;
            }
            if (this.start < 14) {
                this.$notify({
                    message: "结算时间,请稍后投注",
                    background: "#dc3b40",
                    duration: 1500
                });
                return;
            }

            let z = 0;
            let tz = {};
            tz.price = this.ischip;
            z = (x + 1) * x + y;
            if (z > 4) {
                z -= 2;
            }
            tz.addr = z;
            // this.list.push(tz);
            // console.log(this.list);
            this.$socket.emit("add", {
                data: tz
            });

            this.vs[x][y].playnum += this.ischip;
            createjs.Sound.play("chip");
            //加入用户投注列表
            // this.chiplist.push(tz);
            this.price += this.ischip;
        },
        ck(x) {
            this.ischip = x;
        },
        nnbg(x) {
            switch (x) {
                case "baozi":
                    return "center -4.55rem";
                    break;
                case "jinshun":
                    return "center -3.7rem";
                    break;
                case "jinhua":
                    return "center -2.85rem";
                    break;
                case "shunzi":
                    return "center -2rem";
                    break;
                case "duizi":
                    return "center -1.2rem";
                    break;
                default:
                    return "center -0.3rem";
                    break;
            }
        },
        wanjiashou() {
            for (let i = 0; i < $(".ch").length; i++) {
                setTimeout(() => {
                    $(".ch")
                        .eq(i)
                        .animate({
                                opacity: 0.2,
                                top: 103 + "px",
                                left: $(".player").position().left + "px"
                            },
                            950,
                            function() {
                                $(".ch")
                                    .eq(i)
                                    .css({ opacity: 0 });
                                this.chiplist = [];
                            }
                        );
                }, i * 10);
                if (i % 2 == 0) {}
            }
        },
        zhuangshou() {
            for (let i = 0; i < $(".ch").length; i++) {
                setTimeout(() => {
                    $(".ch")
                        .eq(i)
                        .animate({
                                opacity: 0.2,
                                top: $(".zhuang").offset().top - 33 + "px",
                                left: $(".zhuang").offset().left - 26 + "px"
                            },
                            950,
                            function() {
                                $(".ch")
                                    .eq(i)
                                    .css({ opacity: 0 });
                                this.chiplist = [];
                            }
                        );
                }, i * 10);
                if (i % 2 == 0) {
                    createjs.Sound.play("shouzhu");
                }
            }
            // this.chiplist=[]
        },
        dif(a, b) {
            for (let i = 0; i < 3; i++) {
                a.splice(a.indexOf(b[i]), 1);
            }
            return a;
        },
        rbme(j) {
            let s = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 1];
            let guize = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 1];
            let jg = {};
            //校验最大单牌
            jg.maxnum = _.sortBy(j, x => s.indexOf(x.num))[2].num;
            jg.niu = "danzhang";
            //校验最大花色
            jg.maxhua = _.sortBy(j, x => s.indexOf(x.num))[2].hua;
            //校验baozi
            for (let i in _(j.map(x => x.num)).countBy()) {
                if (_(j.map(x => x.num)).countBy()[i] == 2) {
                    //校验duizi的值
                    jg.duizi = i;
                    jg.niu = "duizi";
                }
                if (_(j.map(x => x.num)).countBy()[i] == 3) {
                    //校验baozi的值
                    jg.niu = "baozi";
                    jg.baozi = i;
                }
            }
            jg.maxleng = Math.max(...Object.values(_(j.map(x => x.num)).countBy()));
            if (jg.maxleng == 3) {
                jg.niu = "baozi";
            }
            //校验顺子
            if (
                guize.indexOf(_.sortBy(j, x => x.num)[0]) + 1 ==
                guize.indexOf(_.sortBy(j, x => x.num)[1]) &&
                guize.indexOf(_.sortBy(j, x => x.num)[1]) + 1 ==
                guize.indexOf(_.sortBy(j, x => x.num)[2])
            ) {
                jg.niu = "shunzi";
                jg.shunzi = _.sortBy(j, x => x.num)[2];
            }
            //校验同花
            if (j[0].hua == j[1].hua && j[1].hua == j[2].hua) {
                jg.niu = "jinhua";
            }
            //校验同花顺
            if (jg.shunzi && jg.jinhua) {
                jg.niu = "jinshun";
            }
            console.log(jg);
            this.n = jg.niu;
            this.jieguo.push(jg);
            createjs.Sound.play(this.n);
        },
        isfz(x, y, z) {
            if (z) {
                return false;
            }
            if (!x.includes(y)) {
                return true;
            }
        },
        kaipai() {
            let arr = [1, 2, 3, 0];
            for (let i = 0; i < 2; i++) {
                setTimeout(() => {
                    this.t.push(i);
                    setTimeout(() => {
                        createjs.Sound.play("kaipai");
                        setTimeout(() => {
                            this.rbme(this.puklist.filter(x => x.type == i));
                            $(".xs")
                                .eq(i)
                                .css({
                                    backgroundPosition: this.nnbg(this.n)
                                });
                        }, 100);
                        $(".xs")
                            .eq(i)
                            .addClass("ct");
                    }, 400);
                }, i * 900);
            }
        },
        fapai() {
            this.jieguo = [];
            this.fz = false;
            this.t = [];
            let n = 0;
            let b = 0;
            for (let c = 0; c < $(".pk").length; c++) {
                setTimeout(() => {
                    if (c % 3 == 0) {
                        n++;
                        b = n * $(window).width() * 0.03;
                    }
                    if (c % 3 == 0) {
                        createjs.Sound.play("fapai");
                    }
                    $(".pk")
                        .eq(c)
                        .animate({
                                transform: "scale(0.55) rotateX(0deg) rotateY(0deg) translatex(-10px)",
                                top: "10px",
                                opacity: 1,
                                left: $(window).width() * 0.2 +
                                    b +
                                    c * $(window).width() * 0.0634 +
                                    "px"
                            },
                            400,
                            function() {}
                        );
                }, c * 120);
            }
        },
        shoupai() {
            this.reback();
            this.vs.map(x => {
                x.map(v => (v.iswin = false));
            });
            this.jieguo = [];
            this.fz = false;
            for (let i = 0; i < 2; i++) {
                createjs.Sound.play("fapai");
                $(".xs")
                    .eq(i)
                    .removeClass("ct");
            }
            this.t = [];
            let n = 0;
            let b = 70;
            for (let c = 0; c < $(".pk").length; c++) {
                if (c != 0 && c % 3 == 0) {
                    n++;
                    setTimeout(() => {
                        createjs.Sound.play("fapai");
                    }, 800 + n * 50);
                }
                setTimeout(() => {
                    $(".pk")
                        .eq(c)
                        .animate({
                                transform: "rotateY(360deg)",
                                top: "-73px",
                                left: "40%",
                                opacity: 0
                            },
                            500
                        );
                }, 800 + c * 30);
            }
        },
        normal() {
            let n = 0;
            let b = 0;
            for (let c = 0; c < $(".pk").length; c++) {
                if (c != 0 && c % 3 == 0) {
                    n++;
                    b = n * $(window).width() * 0.096;
                }
                $(".pk")
                    .eq(c)
                    .css({
                        transform: "scale(0.55) rotateX(0deg) rotateY(0deg) translatex(-10px)",
                        top: "10px",
                        left: $(window).width() * 0.25 +
                            b +
                            c * $(window).width() * 0.0434 +
                            "px"
                    });
            }
        },
        touzhu() {
            this.chiplist.push(
                [1, 5, 10, 50, 100, 500, 1000, 5000, 10000][_.random(0, 8)]
            );
            //   this.isfz = !this.isfz;
        }
    }
};
</script>

<style lang="scss" scoped>
#an {
    position: fixed;
}

.rb {
    width: 100%;
    height: 16vw;
    margin-top: 6.5vw;
    background-position: 0% 88.3%;
    position: absolute;
}

.w2 {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 999999;
}

.w {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border: 1px dashed red;
    .win {
        background: url(https://images.imags-google.com/game/brnnJackWin.png);
        background-size: 2.8rem;
        background-position: center 4.5rem;
        position: absolute;
        height: 108%;
        width: 100%; // animation: sun 3s linear infinite;
    }
    .sun {
        position: absolute;
        height: 100%;
        width: 100%;
        background: url(https://images.imags-google.com/game/brnnJackWin.png);
        background-size: 3.2rem;
        background-position: center 3rem;
    }
}

.redblackwar-chess-card {
    display: flex;
    justify-content: space-between;
}

.redblackwar-top-right {
    position: relative;
}

.redblack-king {
    position: absolute;
    top: 14px;
    right: -74px;
}

@keyframes sun {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}

.x {
    height: 30px;
    position: fixed;
    top: 100px;
    right: 0;
    left: 0;
    justify-content: center;
    display: flex;
}

.xs {
    // position: absolute;
    height: 100%;
    margin: 5px;
    width: 77px;
    background: url(https://images.imags-google.com/game/redBlackIcon.png) no-repeat; // background-size: auto 100vh;
    background-position: center -4.55rem;
    transition: all 0.7s;
    background-size: 2rem; // border:1px dashed red;
    transform: rotateX(90deg); // background-position: -12px 43%;
}

.ad {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 99999999999999999;
    background: url(https://images.imags-google.com/game/benz-progress.jpg);
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    p {
        position: absolute;
        bottom: 120px;
        font-size: 25px;
        letter-spacing: 5px;
        color: gold;
        text-shadow: 5px 9px 2px black;
        font-weight: 700;
        text-align: center;
    }
}

.name {
    position: relative;
    perspective: 1000px;
    text-align: center;
    transform: translateX(-10px);
    .p {
        background: url(https://images.imags-google.com/game/brnnJackWin.png) no-repeat;
        background-size: auto;
        background-position: -52px 66%;
        position: absolute;
        top: 75px;
        width: 100%;
        height: 0px;
        text-align: center;
        z-index: 99999;
        color: #b0dcfc; // transform-style: preserve-3d;
        backface-visibility: hidden;
        transition: all 0.3s ease-in-out;
        transform: rotateX(-180deg) translateX(-10px);
    }
}

.ct {
    // height: 30px !important;
    transform: rotateX(0deg) !important;
}

.paiqu {
    position: relative; // top:17px;
    height: 80px;
    .pk {
        // transition: all 0.5s;
        position: absolute;
    }
}

.ch {
    position: absolute;
    top: 113px;
    right: -34px;
}

.player {
    span {
        position: relative;
        top: 60px;
        display: block;
        text-align: center;
        font-size: 20px;
        font-weight: bold;
        color: #fff;
    }
    position: fixed;
    height: 60px;
    top: 134px;
    right: -13px;
    transform: scale(0.5);
    width: 59px;
    z-index: 12222; // right: 50px;
    background: url(https://images.imags-google.com/game/nnicon.png?1);
    background-position: 97% 75%;
}

.rbvs {
    position: absolute !important;
    z-index: 999999999;
}

//舞台背景
.longhu {
    display: flex;
    flex-flow: column;
    overflow: scroll;
    background: url(https://images.imags-google.com/game/benzBMW.jpg);
    position: absolute;
    bottom: 0;
    z-index: 999999999;
    top: 0;
    left: 0;
    width: 100%;
    background-size: cover;
    background-position: center center;
}

#bettingBox {
    display: flex;
    flex-flow: column;
    transform: rotateX(2deg) translateX(-190px);
    border-radius: 8px !important;
    position: fixed;
    bottom: 97px;
    left: 50%;
}

#bettingBox>div:nth-child(1) {
    display: flex;
    justify-content: center;
    color: #dca091;
    &>div {
        width: 131px;
        height: 88px;
        border: 0.5vw solid #a93c30 !important;
        overflow: hidden;
        text-align: center;
        display: flex;
        flex-flow: column;
        /* align-items: center; */
        justify-content: space-between;
    }
}

.yet {
    font-size: 0.7em;
    color: #ffdcab;
    width: 100%;
    background-color: #c3330e;
    text-align: center;
}

#yet {
    width: 100%;
    background: #c3330e;
    width: 100%;
}

#bettingBox>div:nth-child(2) {
    display: flex;
    justify-content: center;
    &>div {
        text-align-last: center;
        width: 262px;
        height: 88px;
        border: 1vw solid #a93c30;
        overflow: hidden;
        color: #dca091;
        display: flex;
        flex-flow: column;
        align-items: center;
        #content3 {
            display: flex;
            flex-flow: column;
        }
        display: flex;
        flex-flow: column;
        /* align-items: center; */
        justify-content: space-between;
    }
}

.d {
    flex: 1;
    margin-top: 0px;
    .desk {
        width: 100%;
        perspective: 200px;
        height: 108%;
        justify-content: center;
        display: flex;
        align-items: center; // background: url(https://images.imags-google.com/game/loongTigerFloor.png);
        background-size: 100% 100vh;
        background-position: 0 -304px;
    }
}

.cont {
    position: relative;
    z-index: 9;
    display: flex;
    justify-content: space-between;
    color: #f8c430;
    font-size: 30px;
    font-weight: 900;
    font-family: "宋体";
    margin-top: 15px;
    letter-spacing: 5px;
    text-shadow: 2px 2px 2px black;
    .x1,
    .zhuang,
    .x2,
    .x3 {
        width: 25%;
        height: 30px; // text-align: center;
    }
    .zhuang {
        margin-left: 18px;
    }
}

.desk {
    border: 1px solid transparent;
    .pl {
        margin-top: 14.5%;
        display: flex;
        .count {
            color: white;
            font-weight: bold;
            text-align: center;
            flex: 1;
        }
    }
    .v {
        display: flex;
        flex-flow: column;
        width: 16%;
        position: absolute;
        height: 100%; // transform: translateX(34%);
    }
    .vs {
        width: 100%;
        background: url(https://images.imags-google.com/game/nnicon.png?1);
        height: 43% !important;
        background-position: 24% 40%;
    }
    .jj {
        width: 100%;
        display: flex;
        flex-flow: wrap;
        justify-content: space-around;
        position: relative;
    }
    .jia {
        display: flex;
        flex-flow: wrap;
        justify-content: center;
        padding: 0 20px;
        position: relative;
        .sj {
            position: relative;
            display: flex;
            flex-flow: column;
            align-items: space-around;
            width: 33%;
            height: 83px;
            border: 1px dashed rgb(255, 255, 255);
            border-radius: 9px;
            margin: 15px 5px 0 5px;
            background-color: rgba($color: #000000, $alpha: 0.2);
            .det {
                position: relative;
                text-align: center;
                flex: 1;
                font-size: 12px;
                color: #ccc;
                height: 100%;
                p {
                    line-height: 134%;
                }
            }
            .zhushu {
                color: #f9c970;
                text-align: center;
                height: 16px;
                font-size: 13px;
            }
            .self {
                background-color: rgba($color: #000000, $alpha: 0.4);
                color: #f9c970;
                text-align: center;
                height: 16px;
                line-height: 16px;
            }
        }
    }
}

.rbwar {
    overflow: hidden;
}

.timerdjs {
    position: fixed;
    height: 2rem;
    width: 4rem;
    top: 50%;
    left: 50%;
    transform: translateX(-2rem) translateY(-1rem); // background: url(https://images.imags-google.com/game/btnBg.png);
    // background-size: 100vw auto;
    line-height: 2.4rem;
    font-size: 0.9rem;
    font-weight: bolder;
    text-shadow: 5px 8px 2px black;
    color: #f9c970;
    text-align: center;
    z-index: 7;
    letter-spacing: 5px;
}

//-------------------------
.van-popup {
    z-index: 9999999 !important;
    background: transparent !important;
}

.how-to-play {
    font-size: 26px;
    z-index: 999999999999999999999;
    line-height: 23px;
    font-weight: 600;
}

@font-face {
    font-family: GamesFont;
    src: url(/static/font/fzcjh.ttf);
}

.ceshidonghua {
    position: fixed;
    z-index: 1000;
}

/*公共部分*/

.dafa-toast {
    position: fixed;
    left: 0;
    right: 0;
    max-width: 12rem;
    margin: 0 auto;
    top: 26%;
    /*margin-top: -10px;*/
    text-align: center
}

.dafa-toast.toast-warning span {
    color: #fefc98;
}

.dafa-toast span {
    display: inline-block;
    min-width: 7.44186rem;
    text-align: center;
    font-size: .6rem;
    padding: 0.13953rem 0.74419rem;
    color: #0ac20a;
    text-shadow: 0 0 0.04651rem rgba(0, 0, 0, .3);
    background: url("/static/img/toast-bg.png") no-repeat center;
    background-size: 100% 100%;
}

.games-font {
    font-family: GamesFont;
}

/* 修改盘口筹码index值 */

.chip-zindex .animation-chip:nth-of-type(1) {
    z-index: 15;
}

.chip-zindex .animation-chip:nth-of-type(2) {
    z-index: 14;
}

.chip-zindex .animation-chip:nth-of-type(3) {
    z-index: 13;
}

.chip-zindex .animation-chip:nth-of-type(4) {
    z-index: 12;
}

.chip-zindex .animation-chip:nth-of-type(5) {
    z-index: 11;
}

.chip-zindex .animation-chip:nth-of-type(6) {
    z-index: 10;
}

/**图片精灵 */

.game-chess-img {
    background: url('https://images.imags-google.com/game/nnicon.png?1') no-repeat;
    background-size: 100vw auto;
}

/** 龙虎精灵图 **/

.game-loongTiger-img {
    background: url(https://images.imags-google.com/game/loongTiger.png) no-repeat;
    background-size: 100vw auto;
}

.game-chess-card {
    background: url(https://images.imags-google.com/game/puke.png) no-repeat;
    background-size: 100vw auto;
}

.game-ranking-img {
    background: url(https://images.imags-google.com/game/popupList.png) no-repeat;
    background-size: 100vw auto;
}

/** 筹码 **/

.game-chip-img {
    background: url(https://images.imags-google.com/game/chipIcon.png) no-repeat;
    background-size: 100vw auto;
}

/** 龙虎背景线 **/

.game-loongtiger-line {
    background: url(https://images.imags-google.com/game/longtiger-line.jpg) center center repeat;
    background-size: 100vw auto;
    width: 100%;
    height: 100%;
}

/** 奔驰宝马精灵图 **/

.game-benzbmw-img {
    background: url(https://images.imags-google.com/game/benzBMW-spirit.png) no-repeat;
    background-size: 100vw auto;
}

.game-benzbmw-inside {
    background: url(https://images.imags-google.com/game/benzBMW-inup.png) no-repeat;
    background-size: 97vw auto;
}

.benzbmw-bg {
    background: url(https://images.imags-google.com/game/benzBMW-bg.jpg) center bottom repeat-y;
    background-size: 100vw auto;
    width: 100%;
    height: 100%;
}

/** 骰宝精灵图 **/

.game-sicbo-img {
    background: url(https://images.imags-google.com/game/sicbo-spirit.png) no-repeat;
    background-size: 100vw auto;
}

.game-sicbo-girl {
    background: url(https://images.imags-google.com/game/sicbo-girl.png) no-repeat;
    background-size: 100vw auto;
}

em {
    font-style: normal;
}

.poker-start {
    position: absolute;
    top: 0;
    left: 0;
}

/** 公共倒计时 开始下注，停止下注，暂停下注*/

/* .game-runtime-list{
  position: absolute;
  top:35%;
  left:50%;
  margin-left:-16vw;
  z-index: 20;
  & > div{
    width: 31vw;
    height: 31vw;
    transition:opacity .3s;
    margin: 0 auto;
    opacity: 0;
    background-position: -50% -50%;
    & .on{
      opacity: 1;
    }
    &:nth-of-type(1){
      background-position: 94% 32.3%;
    }
    &:nth-of-type(2){
      background-position: 50% 32.3%;
    }
    &:nth-of-type(3){
      background-position: 4% 32.3%;
    }
  }
} */

.game-enter-out {
    position: absolute;
    top: 35%;
    left: 50%;
    margin-left: -40vw;
    z-index: 20
}

.game-enter-out>div {
    width: 80vw;
    height: 18vw;
    margin: 0 auto;
}

.game-enter-out .game-enter-start {
    background-position: -7% 44.5%;
    /**开始下注*/
}

.game-enter-out .game-enter-stop {
    background-position: -7% 53.7%;
    /**停止下注*/
}

.game-enter-out .game-enter-pause {
    background-position: -7% 63%;
    /**暂停下注*/
}

/** 公共倒计时 开始下注，停止下注，暂停下注*/

.resultMoney {
    padding-right: 0.27907rem;
    font-size: 0.74419rem;
    font-weight: 100
}

.resultMoney .win {
    color: #fdfb54;
}

.resultMoney .lose {
    color: #afd5ff;
}

.resultMoney>i {
    font-style: normal;
}

/** 其它用户图标 **/

.rb-war .game-other-user {
    top: 54vw;
}

.nn100 .game-other-user {
    top: 42vw;
}

@media only screen and (device-width: 375px) and (max-height: 600px) {
    .rb-war .game-other-user {
        top: 43vw;
    }
}

.game-other-user {
    position: absolute;
    right: 1vw;
    top: 45vw;
    z-index: 8
}

.game-other-user .resultMoney {
    opacity: 0;
    position: absolute;
    top: 0.46512rem;
    right: 0;
    width: 5rem;
    text-align: right;
}

.game-other-user.redblackwar {
    top: 52vw;
}

.game-other-user .game-other-icon {
    position: relative;
    width: 10vw;
    height: 15vw;
}

.game-other-user .game-other-icon .game-other-user {
    position: absolute;
    width: 100%;
    height: 11.5vw;
    left: 0;
    top: 0;
    margin-bottom: 5vw;
}

.game-other-user .game-other-icon .game-other-user.play {
    -webkit-animation: fastPlay 300ms 1;
    animation: fastPlay 300ms 1;
}

.game-other-user .game-other-icon .game-other-user>em {
    display: block;
    width: 100%;
    height: 100%;
    background-position: 98% 75%;
    /*background-position: 98% 76%;*/
}

.game-other-user .game-other-icon>span {
    /*font-weight: bold;*/
    position: absolute;
    font-size: 0.5rem;
    width: 100%;
    text-align: center;
    color: #eec16c;
    bottom: 0;
}

/**公共头部 */

.chess-head {
    position: fixed;
    left: 0;
    top: 0;
    z-index: 10;
    width: 100vw;
    height: 12vw;
    /* height:1.9rem; */
    background-position: 0 3.4%
}

.chess-head .chess-head-list {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: nowrap;
    flex-wrap: nowrap;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    height: 100%;
}

.chess-head .chess-head-list .chess-head-left {
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    /*margin-top:.2rem;*/
    text-align: center;
}

.chess-head .chess-head-list .chess-head-middle {
    -webkit-box-flex: 5;
    -ms-flex: 5;
    flex: 5;
    height: 8vw;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    text-align: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    margin-top: -1.1vw;
}

.chess-head .chess-head-list .chess-head-middle .head-zhuang>em {
    display: block;
    width: 11vw;
    height: 9vw;
    background-position: 66.1% 34.4%;
}

.chess-head .chess-head-list .chess-head-middle .head-zhuang>em.nn100-middle-img {
    background-position: 51.7% 34.4%;
}

.chess-head .chess-head-list .chess-head-middle .head-middle-img {
    width: 36%;
    background-position: 0.5% 12.2%;
    color: #fff;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: left;
    -ms-flex-pack: left;
    justify-content: left;
    -ms-flex-line-pack: center;
    align-content: center;
}

.chess-head .chess-head-list .chess-head-middle .head-middle-img .left-icon {
    float: left;
    width: 9.5vw;
    height: 6.3vw;
    line-height: 6.5vw;
    font-size: 4vw;
    margin-top: 1.5vw;
    text-align: center;
    display: inline-block;
}

.chess-head .chess-head-list .chess-head-middle .head-middle-img .number-box {
    font-size: 3vw;
    width: 14vw;
    display: table-cell;
    vertical-align: middle;
}

.chess-head .chess-head-list .chess-head-middle .head-middle-img .right-icon {
    float: right;
    display: inline-block;
    margin-right: 0;
    width: 5vw;
    height: 6vw;
}

.chess-head .chess-head-list .chess-head-middle .head-middle-img .right-icon i {
    display: block;
    width: 100%;
    height: 100%;
    -webkit-transition: .3s;
    transition: .3s;
    background-position: 39% 35.3%;
}

.chess-head .chess-head-list .chess-head-middle .head-middle-img .right-icon i.on {
    margin-top: 1.0vw;
    -webkit-transform: rotate(180deg);
    transform: rotate(180deg);
}

.chess-head .chess-head-list .chess-head-middle .head-middle-img.head-middle-runtime {
    background-position: 42.5% 12.2%;
}

.chess-head .chess-head-list .chess-head-middle .head-middle-img.head-middle-runtime .left-icon {
    width: 5vw;
    height: 6vw;
    margin: 0 0 0 0;
    display: inline-block;
}

.chess-head .chess-head-list .chess-head-middle .head-middle-img.head-middle-runtime .left-icon>i {
    display: inline-block;
    width: 100%;
    height: 100%;
    -webkit-transition: .3s;
    transition: .3s;
    background-position: 39% 35.3%;
}

.chess-head .chess-head-list .chess-head-middle .head-middle-img.head-middle-runtime .left-icon>i.on {
    -webkit-transform: rotate(180deg);
    transform: rotate(180deg);
    margin-top: 1.0vw;
}

.chess-head .chess-head-list .chess-head-middle .head-middle-img.head-middle-runtime .right-icon {
    width: 8.5vw;
    height: 7vw;
    line-height: 6.5vw;
    margin: 1.5vw 0 0 0;
    text-align: center;
    font-size: 4vw;
    display: inline-block;
}

.chess-head .chess-head-list .chess-head-middle .head-middle-img.nn100-middle-img {
    background-position: 0% 45.9%;
}

.chess-head .chess-head-list .chess-head-middle .head-middle-img.nn100-middle-img.head-middle-runtime {
    background-position: 40% 45.9%;
}

.chess-head .chess-head-list .chess-head-middle .head-middle-img .padd1 {
    padding-top: 1vw;
}

.chess-head .chess-head-list .chess-head-middle .head-middle-img .padd5 {
    padding-top: .7vw;
}

.chess-head .chess-head-list .chess-head-right {
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    /*margin-top:.2rem;*/
    text-align: center;
    position: relative;
}

/* .head-left-btn{

  width:9vw;
  height:9vw;
  margin:0 auto;
  background-position:14.5% 12.3%;
}
.head-right-btn{
  width:9vw;
  height:9vw;
  margin:0 auto;
  background-position:1.9% 12.3%;
} */

.head-left-btn {
    /* width:1.5rem;
  height:1.5rem; */
    width: 9vw;
    height: 9vw;
    margin: 0 auto;
    background-position: 1.7% 35.1%
}

.head-left-btn>em {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    width: 100%;
    height: 100%;
    background-position: 14.7% 35.2%;
    -webkit-transition: .3s;
    transition: .3s;
}

.head-left-btn>em.on {
    -webkit-transform: rotate(180deg);
    transform: rotate(180deg);
}

.head-right-btn {
    /* width:1.5rem;
  height:1.5rem; */
    width: 9vw;
    height: 9vw;
    margin: 0 auto;
    background-position: 1.7% 35.1%
}

.head-right-btn>em {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    width: 100%;
    height: 100%;
    background-position: 26.7% 35.2%;
    -webkit-transition: .3s;
    transition: .3s;
}

.head-right-btn>em.on {
    -webkit-transform: rotate(180deg);
    transform: rotate(180deg);
}

/**公共头部结束 */

/**公共底部 */

.chess-foot {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    z-index: 20;
    height: 8vw;
    /* height:1.3rem; */
    background-position: 0 0
}

.chess-foot .game-foot-btn {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    height: 100%;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -ms-flex-wrap: nowrap;
    flex-wrap: nowrap;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    position: relative;
}

.chess-foot .game-foot-btn .resultMoney {
    position: absolute;
    width: 100%;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    z-index: 100;
    top: -100%;
}

.chess-foot .game-foot-btn>div {
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    height: 100%;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
}

.chess-foot .game-foot-btn .game-foot-left {
    background-position: 106% 34.4%;
}

.chess-foot .game-foot-btn .game-foot-left.not {
    opacity: .3;
}

.chess-foot .game-foot-btn .game-foot-middle {
    -webkit-box-flex: 2;
    -ms-flex: 2;
    flex: 2;
}

.chess-foot .game-foot-btn .game-foot-middle .game-foot-money {
    position: relative;
    display: block;
    width: 30vw;
    margin: 0 auto;
    background-position: 59% 8.2%;
}

.chess-foot .game-foot-btn .game-foot-middle .game-foot-money>span {
    color: #fff;
    display: block;
    width: 80%;
    height: 8vw;
    line-height: 8vw;
    font-size: 3vw;
    margin: 0 auto;
    text-align: center;
}

.chess-foot .game-foot-btn .game-foot-middle .game-foot-money>em {
    position: absolute;
}

.chess-foot .game-foot-btn .game-foot-middle .game-foot-money .foot-money-icon {
    left: .1vw;
    top: 0;
    width: 8vw;
    height: 8vw;
    background-position: 27% 8.2%;
}

.chess-foot .game-foot-btn .game-foot-middle .game-foot-money .foot-add-btn {
    right: 1vw;
    top: 0;
    width: 8vw;
    height: 8vw;
    background-position: 37% 8.2%;
}

.chess-foot .game-foot-btn .game-foot-right {
    background-position: 112% 38.5%;
}

.chess-foot .game-foot-btn .game-foot-right.not {
    opacity: .3;
}

.chess-foot {
    /**选择筹码*/
}

.chess-foot .foot-slide-chip {
    position: absolute;
    bottom: 8vw;
    width: 100%;
    height: 16vw;
}

.chess-foot .foot-slide-chip .foot-slide-list {
    position: absolute;
    top: -2vw;
    width: 100%;
}

.chess-foot .foot-slide-chip .chip-left-btn {
    position: absolute;
    left: 1vw;
    top: 5vw;
    width: 6vw;
    height: 8vw;
    background-position: 19% 8.5%;
    -webkit-transform: rotate(180deg);
    transform: rotate(180deg);
    opacity: .5;
}

.chess-foot .foot-slide-chip .chip-left-btn.on {
    opacity: 1;
}

.chess-foot .foot-slide-chip .chip-right-btn {
    position: absolute;
    right: 1vw;
    top: 5vw;
    width: 6vw;
    height: 8vw;
    background-position: 19% 8.5%;
    opacity: .5;
}

.chess-foot .foot-slide-chip .chip-right-btn.on {
    opacity: 1;
}

.chess-foot .foot-slide-chip .foot-slide-main {
    margin: 0 6vw;
    width: 88vw;
    overflow-y: hidden;
    overflow-x: hidden;
    height: 19vw;
}

.chess-foot .foot-slide-chip .foot-slide-main ul {
    display: block;
    width: 158.745vw;
    /*width:140.8vw; 少500*/
    -webkit-transition: .3s;
    transition: .3s;
    margin-top: .7vw;
    height: 100%;
}

.chess-foot .foot-slide-chip .foot-slide-main ul li {
    position: relative;
    display: inline-block;
    float: left;
    height: 100%;
    margin: 0 1vw;
    width: 15.6vw;
    background-position: -100% -100%;
}

.chess-foot .foot-slide-chip .foot-slide-main ul li.on.chipbg1 {
    background-position: 0.5% 6%;
}

.chess-foot .foot-slide-chip .foot-slide-main ul li.on.chipbg5 {
    background-position: 23.5% 6%;
}

.chess-foot .foot-slide-chip .foot-slide-main ul li.on.chipbg10 {
    background-position: 46.5% 6%;
}

.chess-foot .foot-slide-chip .foot-slide-main ul li.on.chipbg50 {
    background-position: 69.9% 6%;
}

.chess-foot .foot-slide-chip .foot-slide-main ul li.on.chipbg100 {
    background-position: 93% 6%;
}

.chess-foot .foot-slide-chip .foot-slide-main ul li.on.chipbg500 {
    background-position: 0.5% 37%;
}

.chess-foot .foot-slide-chip .foot-slide-main ul li.on.chipbg1000 {
    background-position: 23.5% 37%;
}

.chess-foot .foot-slide-chip .foot-slide-main ul li.on.chipbg5000 {
    background-position: 47% 37%;
}

.chess-foot .foot-slide-chip .foot-slide-main ul li.on.chipbg10000 {
    background-position: 69.9% 37%;
}

.chess-foot .foot-slide-chip .foot-slide-main ul li>em {
    position: absolute;
    left: 0;
    top: 0;
    display: block;
    width: 100%;
    height: 100%;
}

.chess-foot .foot-slide-chip .foot-slide-main ul .chip1 {
    background-position: .7% 67.8%;
}

.chess-foot .foot-slide-chip .foot-slide-main ul .chip5 {
    background-position: 23.6% 67.8%;
}

.chess-foot .foot-slide-chip .foot-slide-main ul .chip10 {
    background-position: 46.7% 67.8%;
}

.chess-foot .foot-slide-chip .foot-slide-main ul .chip50 {
    background-position: 69.7% 67.8%;
}

.chess-foot .foot-slide-chip .foot-slide-main ul .chip100 {
    background-position: 92.8% 67.8%;
}

.chess-foot .foot-slide-chip .foot-slide-main ul .chip500 {
    background-position: .5% 96.1%;
}

.chess-foot .foot-slide-chip .foot-slide-main ul .chip1000 {
    background-position: 23.8% 96.1%;
}

.chess-foot .foot-slide-chip .foot-slide-main ul .chip5000 {
    background-position: 46.8% 96.1%;
}

.chess-foot .foot-slide-chip .foot-slide-main ul .chip10000 {
    background-position: 69.8% 96.1%;
}

.chess-foot .foot-slide-chip .foot-slide-main ul {
    /*& .chip1{
          background-position: .7% 16.8%;
        }
        & .chip5{
          background-position: 18.8% 16.8%;
        }
        & .chip10{
          background-position: 36.7% 16.8%;
        }
        & .chip50{
          background-position: 54.7% 16.8%;
        }
        & .chip100{
          background-position: 72.8% 16.8%;
        }
        & .chip500{
          background-position: .7% 23.8%;
        }
        & .chip1000{
          background-position: 18.6% 23.8%;
        }
        & .chip10000{
          background-position: 36.8% 23.8%;
        }*/
}

.chess-foot .foot-slide-chip .foot-slide-main ul li.gray {
    /*filter: grayscale(100%) brightness(.5);
          filter: gray;*/
    opacity: .4;
}

.chess-foot .foot-slide-chip .foot-slide-main ul li.on {
    -webkit-transform: translateY(-1.5vw);
    transform: translateY(-1.5vw);
}

.chess-foot .foot-slide-chip .foot-slide-main ul.loongtiger-ul li.on {
    -webkit-transform: translateY(-1.9vw);
    transform: translateY(-1.9vw);
}

.chess-foot .foot-slide-chip .foot-chip-bg {
    display: block;
    margin-top: 8vw;
    width: 100%;
    height: 8vw;
    background: rgba(0, 0, 0, .5);
}

.chess-foot .foot-slide-chip .foot-chip-bg .foot-chip-bgli {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -ms-flex-wrap: nowrap;
    flex-wrap: nowrap;
    margin: 0 6vw;
    height: 100%;
}

.chess-foot .foot-slide-chip .foot-chip-bg .foot-chip-bgli span {
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    margin: 0;
    height: 100%;
    background-position: -2% 8.6%;
}

.chess-foot .foot-slide-chip .foot-chip-longtiger-bg {
    display: block;
    margin-top: -.5vw;
    width: 100%;
    height: 18vw;
}

.chess-foot .foot-slide-chip .foot-chip-longtiger-bg .foot-chip-bgli {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -ms-flex-wrap: nowrap;
    flex-wrap: nowrap;
    margin: 0 6vw;
    height: 100%;
}

.chess-foot .foot-slide-chip .foot-chip-longtiger-bg .foot-chip-bgli span {
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    margin: 0;
    height: 100%;
    background-position: 95.4% 38.4%;
}

/**滚动条 */

.foot-slide-main::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 0.27907rem rgba(0, 0, 0, .3);
    /* background-color: #F5F5F5; */
}

.foot-slide-main::-webkit-scrollbar {
    height: 1vw;
    /* background-color: #F5F5F5; */
}

.foot-slide-main::-webkit-scrollbar-thumb {
    /*  background-color: #666; */
}

/**公共底部结束 */

/**主体内容 */

.chess-all-body {
    position: fixed;
    height: 100%;
    width: 100%;
    overflow: hidden;
    /* overflow-x: hidden; */
    background: #48100f url(https://images.imags-google.com/game/nn100bg.jpg) top center no-repeat;
    background-size: 100vw auto
}

.chess-all-body.red-black-war {
    overflow: hidden;
    background: #bd7b4b url(https://images.imags-google.com/game/redBlackWar.jpg) top center no-repeat;
    background-size: 100vw auto;
}

.chess-all-body.loong-Tiger-body {
    overflow: hidden;
    background: url(https://images.imags-google.com/game/loongTigerBg.jpg) top center no-repeat;
    background-size: 100vw auto;
}

.chess-all-body.benzbmw-body {
    overflow: hidden;
    background: url(https://images.imags-google.com/game/benzBMW.jpg) top center no-repeat;
    background-size: 100vw auto;
}

.chess-all-body.sicbo-body {
    background: #0b0014 url(https://images.imags-google.com/game/sicbo-bg.jpg) top center no-repeat;
    background-size: 100vw auto;
}

/**百人牛牛 样式 */

.nn100-chipbg {
    position: fixed;
    z-index: 0;
    background: url(https://images.imags-google.com/game/nn100bg2.png) bottom center no-repeat;
    background-size: 100vw auto;
    width: 100%;
    height: 100%;
    bottom: -3vh;
}

.chess-nn100-start {
    margin-top: 12vw;
    height: calc(100vh - 20vw);
    position: relative;
    overflow: hidden
}

.chess-nn100-start .nn100-rotate-card {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -ms-flex-wrap: nowrap;
    flex-wrap: nowrap;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    margin: 0 4vw;
    height: 25vw;
}

.chess-nn100-start .nn100-rotate-card>div {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    width: 100%;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    margin: 0 1vw;
    height: 18vw;
}

.chess-nn100-start .nn100-rotate-card>div>span {
    display: block;
    width: 100%;
}

.chess-nn100-start .nn100-rotate-card>div .rotate-card-title {
    height: 6vw;
    text-align: center;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
}

.chess-nn100-start .nn100-rotate-card>div .rotate-card-title i:nth-of-type(1) {
    display: inline-block;
    width: 30%;
    height: 100%;
    background-position: 66% 12.6%;
}

.chess-nn100-start .nn100-rotate-card>div .rotate-card-title i:nth-of-type(1).card-1,
.chess-nn100-start .nn100-rotate-card>div .rotate-card-title i:nth-of-type(1).card-2,
.chess-nn100-start .nn100-rotate-card>div .rotate-card-title i:nth-of-type(1).card-3 {
    background-position: 74.5% 12.6%;
}

.chess-nn100-start .nn100-rotate-card>div .rotate-card-title i:nth-of-type(2) {
    display: inline-block;
    width: 20%;
    height: 100%;
    background-position: 83% 12.6%;
}

.chess-nn100-start .nn100-rotate-card>div .rotate-card-title i:nth-of-type(2).card-1 {
    background-position: 83% 12.6%;
}

.chess-nn100-start .nn100-rotate-card>div .rotate-card-title i:nth-of-type(2).card-2 {
    background-position: 90% 12.6%;
}

.chess-nn100-start .nn100-rotate-card>div .rotate-card-title i:nth-of-type(2).card-3 {
    background-position: 98.5% 12.6%;
}

.chess-nn100-start .nn100-rotate-card>div .rotate-card-list {
    height: 9vw;
    -webkit-transform: scale(.8);
    transform: scale(.8);
    position: relative;
}

.chess-nn100-start .nn100-rotate-card>div .rotate-card-list>em {
    position: absolute;
    left: 0;
    top: 0;
    width: 11vw;
    height: 15vw;
    background-position: 84.3% 98%;
}

.chess-nn100-start .nn100-rotate-card>div .rotate-card-list>em.card-0 {
    left: 0;
    top: 0;
}

.chess-nn100-start .nn100-rotate-card>div .rotate-card-list>em.card-1 {
    left: 3vw;
    top: 0;
}

.chess-nn100-start .nn100-rotate-card>div .rotate-card-list>em.card-2 {
    left: 6vw;
    top: 0;
}

.chess-nn100-start .nn100-rotate-card>div .rotate-card-list>em.card-3 {
    left: 9vw;
    top: 0;
}

.chess-nn100-start .nn100-rotate-card>div .rotate-card-list>em.card-4 {
    left: 12vw;
    top: 0;
}

/**开奖走势栏 */

.prev-open-number {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -ms-flex-wrap: nowrap;
    flex-wrap: nowrap;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    margin: 0 auto;
    border-radius: 1vw;
    width: 72vw;
    padding: 0 1vw;
    background-position: 2% 81%
    /* background:rgba(255,255,255,.1); */
}

.prev-open-number>div {
    /*width:100%;*/
    margin: .3vw .05vw;
    position: relative;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -ms-flex-wrap: nowrap;
    flex-wrap: nowrap;
    padding: 0 .9vw;
}

.prev-open-number>div:nth-of-type(1).new:before {
    content: '';
    background: url(https://images.imags-google.com/game/nnicon.png?1) no-repeat;
    background-size: 100vw auto;
    position: absolute;
    left: 4.5vw;
    top: -1.6vw;
    width: 5vw;
    height: 3vw;
    background-position: 63% 45.1%;
}

.prev-open-number>div>em {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    width: 4vw;
    height: 6vw;
}

.prev-open-number>div>em.win {
    background-position: 69.1% 47%;
    /*background-position:82.8% 9%;*/
}

.prev-open-number>div>em.win0 {
    background-position: 69.1% 47%;
    /*background-position:82.8% 9%;*/
}

.prev-open-number>div>em.win1 {
    background-position: 74% 47%;
    /*background-position:82.8% 9%;*/
}

.prev-open-number>div>em.win2 {
    background-position: 79.1% 47%;
    /*background-position:82.8% 9%;*/
}

.prev-open-number>div>em.lose {
    background-position: 69.1% 45.08%;
    /*background-position:75% 8.89%;*/
}

.prev-open-number>div>em.lose0 {
    background-position: 69.1% 45.08%;
    /*background-position:75% 8.89%;*/
}

.prev-open-number>div>em.lose1 {
    background-position: 74% 45.08%;
    /*background-position:75% 8.89%;*/
}

.prev-open-number>div>em.lose2 {
    background-position: 79% 45.08%;
    /*background-position:75% 8.89%;*/
}

.prev-open-number>div {
    /*&:before{
      position:absolute;
      right:0;
      content:'';
      top:0;
      width:1px;
      background:rgba(0,0,0,.2);
      box-shadow:.5px .5px 0 rgba(255,255,255,.2);
      height:4vw;
    }*/
    /*&:last-child:before{
      width:0;
    }*/
}

/** 牛牛总金额 **/

.nnall-beting-money {
    position: fixed;
    z-index: 1;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    width: 100%;
    bottom: 113vw
    /* top:54vw; */
}

.nnall-beting-money .all-beting-money {
    margin: 0 auto;
    font-size: .5em;
    padding: 1vw 3vw;
    display: inline-block;
    color: #fff;
    border-radius: 5vw;
    background: rgba(82, 14, 13, .4);
    /*text-shadow: 0.04651rem 0.04651rem 0.04651rem rgba(0, 0, 0, .3);*/
}

.nnall-beting-money .all-beting-money>span {
    color: #ce5855;
    position: relative;
}

.nnall-beting-money .all-beting-money>span:before {
    /*content: attr(data-text);*/
    position: absolute;
    /*text-shadow: 0 1px red, 1px 0 red, -1px 0 red, 0 -1px red;
        -webkit-text-stroke: 2px red;*/
    z-index: -1;
}

.nnall-beting-money .all-beting-money>em {
    /*font-weight: bold;*/
    color: #f9c970;
}

/** 牛牛100投注区 */

.betting-box {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-align: stretch;
    -ms-flex-align: stretch;
    align-items: stretch;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    text-align: center;
    /* height:calc(100vh-70vw); */
    height: 107vw;
    position: fixed;
    bottom: 18vw;
    width: 100%
}

.betting-box .betting-list {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    margin: 2vw 10vw;
    font-size: .7em;
}

.betting-box .betting-list>div {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    margin: 2vw 0;
    width: 35%;
    font-size: .7em;
    border-radius: 2vw;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    position: relative;
    overflow: hidden;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    height: 26vw;
}

.betting-box .betting-list>div:not(.bet-inset-icon) {
    background: rgba(82, 14, 13, .4);
}

.betting-box .betting-list>div.bet-inset-icon {
    width: 16%;
    height: 17vw;
    background-position: 23% 40%;
}

.betting-box .betting-list>div .opacity-ele {
    opacity: 0;
    z-index: 999;
    width: 100%;
    height: 100%;
    position: absolute;
}

.betting-box .betting-list>div>span {
    display: block;
    color: #ce5855;
    /*font-size:.7em;*/
    padding: .2vw;
    width: 100%;
}

.betting-box .betting-list>div>span>em {
    display: block;
}

.betting-box .betting-list>div>span>em:nth-of-type(1) {
    font-size: 1.8em;
    line-height: 100%;
}

.betting-box .betting-list>div>span>em:nth-of-type(2) {
    font-size: .4rem;
    line-height: 100%;
}

.betting-box .betting-list>div>span>em:nth-of-type(3) {
    font-size: .5rem !important;
}

.betting-box .betting-list>div>span.bet-bg {
    color: #000;
    font-size: .7em;
    /*font-weight: bold;*/
    opacity: .3;
}

.betting-box .betting-list>div>span.self-bet {
    color: #f9c970;
    /*font-weight: bold;*/
    background: rgba(82, 14, 13, .4);
}

.betting-box .betting-list>div>span.self-bet>em {
    font-size: 1em;
    color: #f9c970;
}

.betting-box .betting-list>div>span.other-bet {
    /*text-shadow: 1px 1px 1px rgba(0,0,0,.3);*/
}

.betting-box .betting-list>div>span.other-bet>em {
    font-size: 1em;
    color: #d15a56;
}

/** 牛牛100 样式结束 **/

/** 红黑大战样式开始 **/

.redblack-chipbg {
    position: fixed;
    background: url(https://images.imags-google.com/game/redblackbg.png) bottom center no-repeat;
    background-size: 100vw auto;
    z-index: 0;
    width: 100%;
    height: 100%;
}

.chess-redblackwar-start {
    /* margin-top:12vw; */
    position: relative;
    height: 100vh;
    /* height: calc(100vh - 24vw); */
    -webkit-perspective: 800;
    perspective: 800;
    overflow: hidden;
    -webkit-perspective-origin: 50% 50%;
    perspective-origin: 50% 50%;
    -webkit-transform-style: preserve-3d;
    transform-style: preserve-3d
}

.chess-redblackwar-start .redblackwar-chess-card {
    position: relative;
    width: 100%;
    height: 33vw;
}

.chess-redblackwar-start .redblackwar-chess-card .redblackwar-top-bg {
    width: 100%;
    height: 16vw;
    margin-top: 16.5vw;
    background-position: 0% 88.3%;
}

.chess-redblackwar-start .redblackwar-chess-card .redblackwar-top-left {
    position: absolute;
    left: -0.27907rem;
    top: -3vw;
    width: 23vw;
    height: 34vw;
    background-position: 10% 77.5%;
}

.chess-redblackwar-start .redblackwar-chess-card .redblackwar-top-right {
    position: absolute;
    right: 0;
    top: 0;
    width: 23vw;
    height: 34vw;
    background-position: 45% 77.5%;
}

.chess-redblackwar-start .redblackwar-chess-card .redblackwar-card {
    position: absolute;
    width: 57vw;
    height: 15vw;
    top: .2vw;
    left: 50%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -ms-flex-wrap: nowrap;
    flex-wrap: nowrap;
    margin-left: -28.5vw;
}

.chess-redblackwar-start .redblackwar-chess-card .redblackwar-card>div {
    position: relative;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    width: 100%;
    height: 100%;
    -webkit-transform: scale(.8);
    transform: scale(.8);
}

.chess-redblackwar-start .redblackwar-chess-card .redblackwar-card>div>em {
    position: absolute;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    width: 11vw;
    height: 100%;
    margin: 0 .2vw;
}

.chess-redblackwar-start .redblackwar-chess-card .redblackwar-card>div>em.rbcard1 {
    left: 2vw;
}

.chess-redblackwar-start .redblackwar-chess-card .redblackwar-card>div>em.rbcard2 {
    left: 8vw;
}

.chess-redblackwar-start .redblackwar-chess-card .redblackwar-card>div>em.rbcard3 {
    left: 14vw;
}

.chess-redblackwar-start .redblackwar-chess-card .redblackwar-card .reblackwar-vs {
    position: absolute;
    width: 10.1vw;
    left: 50%;
    height: 100%;
    margin-left: -5.5vw;
    -webkit-transform: scale(1);
    transform: scale(1);
    background-position: 97.2% 43%;
}

.chess-redblackwar-start {
    /** 红黑大战开奖走势区 **/
}

.chess-redblackwar-start .redblackwar-open-number {
    position: relative;
    margin: 0 auto;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -ms-flex-wrap: nowrap;
    flex-wrap: nowrap;
    width: 49vw;
    background: rgba(255, 255, 255, .3);
    border-radius: 1vw;
}

.chess-redblackwar-start .redblackwar-open-number>div {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    width: 100%;
}

.chess-redblackwar-start .redblackwar-open-number>div.redblackwar-open-left {
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    /*width: 56vw!important;*/
}

.chess-redblackwar-start .redblackwar-open-number .redblackwar-open-trend-btn {
    width: 9vw;
    height: 9vw;
    background-position: 92% 25%;
}

.chess-redblackwar-start .redblackwar-open-number .redblackwar-open-dot {
    position: relative;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -ms-flex-wrap: nowrap;
    flex-wrap: nowrap;
    width: 100%;
}

.chess-redblackwar-start .redblackwar-open-number .redblackwar-open-dot .redblack-new {
    position: absolute;
    left: 0;
    top: 0;
    width: 5vw;
    height: 4vw;
    background-position: 64.1% 47.2%;
}

.chess-redblackwar-start .redblackwar-open-number .redblackwar-open-dot>em {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    width: 4vw;
    height: 4vw;
    background-position: 89.8% 8.9%;
}

.chess-redblackwar-start .redblackwar-open-number .redblackwar-open-dot>em.red {
    background-position: 96.8% 8.9%;
}

.chess-redblackwar-start .redblackwar-open-number .redblackwar-open-square {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -ms-flex-wrap: nowrap;
    flex-wrap: nowrap;
    width: 100%;
}

.chess-redblackwar-start .redblackwar-open-number .redblackwar-open-square>em {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    width: 8vw;
    height: 5vw;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    background-position: 97.2% 70.3%;
}

.chess-redblackwar-start .redblackwar-open-number .redblackwar-open-square>em>i {
    font-size: 2.8vw;
    color: #fff;
    text-align: center;
    -webkit-transform: scale(.8);
    transform: scale(.8);
    /*transform: scale(.8) translateY(.7vw);*/
    font-style: normal;
    margin: 0 auto;
    margin-top: .5vw;
}

.chess-redblackwar-start .redblackwar-open-number .redblackwar-open-square>em.blue {
    background-position: 83.2% 70.3%;
}

.chess-redblackwar-start .redblackwar-all-money {
    margin: 0 auto;
    position: absolute;
    top: 31.5vh;
    width: 100%;
    text-align: center;
}

.chess-redblackwar-start .redblackwar-all-money>div {
    display: inline-block;
    background: rgba(114, 30, 14, .3);
    font-size: .5em;
    width: auto;
    padding: .8vw 3vw;
    border-radius: 5vw;
}

.chess-redblackwar-start .redblackwar-all-money>div span {
    /*color:#f9c970;
          font-size: .55rem;
          text-shadow: 1px 1px 2px rgba(3, 4, 4,.2);*/
}

.chess-redblackwar-start {
    /** 红黑大战投注区 **/
}

.chess-redblackwar-start .redblackwar-betting {
    position: fixed;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    bottom: 10vw;
    /*top:34vh;*/
    width: 100%;
    -webkit-box-pack: space-evenly;
    -ms-flex-pack: space-evenly;
    justify-content: space-evenly;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    /*height: calc(100vh-59vh);*/
    /*height: calc(100vh-65vh);*/
    height: 65vw;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-transform-origin: center center;
    transform-origin: center center;
    -webkit-transform: rotateX(31deg) rotateY(0deg) rotateZ(0deg);
    transform: rotateX(31deg) rotateY(0deg) rotateZ(0deg);
}

.chess-redblackwar-start .redblackwar-betting>div {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: nowrap;
    flex-wrap: nowrap;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    width: 70%;
    height: 100%;
}

.chess-redblackwar-start .redblackwar-betting>div>div {
    width: 100%;
    height: 100%;
    border-radius: 2vw;
    border: .5vw solid rgba(221, 98, 70, 0.43922);
    overflow: hidden;
}

.chess-redblackwar-start .redblackwar-betting>div>div.tl {
    border-radius: 2vw 0 0 0;
}

.chess-redblackwar-start .redblackwar-betting>div>div.tr {
    border-radius: 0 2vw 0 0;
    position: relative;
    left: -.5vw;
}

.chess-redblackwar-start .redblackwar-betting>div>div.redblackwar-hit {
    /*border-top: 0;*/
    margin-top: -.5vw;
    width: calc(100% - 0.5vw);
}

.chess-redblackwar-start .redblackwar-betting>div>div.on {
    -webkit-animation: lightshadow 3s infinite;
    animation: lightshadow 3s infinite;
    border-color: #fd9781;
}

.chess-redblackwar-start .redblackwar-betting>div .redblackwar-red,
.chess-redblackwar-start .redblackwar-betting>div .redblackwar-black,
.chess-redblackwar-start .redblackwar-betting>div .redblackwar-hit {
    font-size: .7em;
    color: rgba(86, 16, 2, .79);
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    text-align: center;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
}

.chess-redblackwar-start .redblackwar-betting>div .redblackwar-red div:nth-of-type(1),
.chess-redblackwar-start .redblackwar-betting>div .redblackwar-black div:nth-of-type(1),
.chess-redblackwar-start .redblackwar-betting>div .redblackwar-hit div:nth-of-type(1) {
    font-size: .7em;
    color: #ffdcab;
    width: 34vw;
    margin: 0 auto;
    border-radius: 0 0 2.5vw 2.5vw;
    display: block;
    background-image: -webkit-gradient(linear, left bottom, left top, from(#a91604), to(#c3330e));
    background-image: linear-gradient(to top, #a91604, #c3330e);
}

.chess-redblackwar-start .redblackwar-betting>div .redblackwar-red div:nth-of-type(2),
.chess-redblackwar-start .redblackwar-betting>div .redblackwar-black div:nth-of-type(2),
.chess-redblackwar-start .redblackwar-betting>div .redblackwar-hit div:nth-of-type(2) {
    opacity: .7;
    font-size: .8em;
}

.chess-redblackwar-start .redblackwar-betting>div .redblackwar-red div:nth-of-type(2)>span,
.chess-redblackwar-start .redblackwar-betting>div .redblackwar-black div:nth-of-type(2)>span,
.chess-redblackwar-start .redblackwar-betting>div .redblackwar-hit div:nth-of-type(2)>span {
    display: block;
    /*text-shadow: 1px 1px 0 #c36011;*/
}

.chess-redblackwar-start .redblackwar-betting>div .redblackwar-red div:nth-of-type(2)>span:nth-of-type(1),
.chess-redblackwar-start .redblackwar-betting>div .redblackwar-black div:nth-of-type(2)>span:nth-of-type(1),
.chess-redblackwar-start .redblackwar-betting>div .redblackwar-hit div:nth-of-type(2)>span:nth-of-type(1) {
    font-size: 1.3em;
    /*font-weight: bold;*/
}

.chess-redblackwar-start .redblackwar-betting>div .redblackwar-red div:nth-of-type(2)>span:nth-of-type(3),
.chess-redblackwar-start .redblackwar-betting>div .redblackwar-black div:nth-of-type(2)>span:nth-of-type(3),
.chess-redblackwar-start .redblackwar-betting>div .redblackwar-hit div:nth-of-type(2)>span:nth-of-type(3) {
    font-size: 0.55814rem;
    /*font-weight: bold;*/
}

.chess-redblackwar-start .redblackwar-betting>div .redblackwar-red div:nth-of-type(3),
.chess-redblackwar-start .redblackwar-betting>div .redblackwar-black div:nth-of-type(3),
.chess-redblackwar-start .redblackwar-betting>div .redblackwar-hit div:nth-of-type(3) {
    /*background: -webkit-linear-gradient(top,#a84032,#a84032 38%,#8b2713 68%,#8b2713);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;*/
    /*text-shadow: 1px 1px 1px #791e0c;*/
    font-size: .8em;
    padding: .2vw;
}

.chess-redblackwar-start .redblackwar-betting>div .redblackwar-red div:nth-of-type(1) {
    border-radius: 0 0 0 2.5vw;
}

.chess-redblackwar-start .redblackwar-betting>div .redblackwar-red div:nth-of-type(1)>em {
    font-style: normal;
}

.chess-redblackwar-start .redblackwar-betting>div .redblackwar-black div:nth-of-type(1) {
    border-radius: 0 0 2.5vw 0;
}

.chess-redblackwar-start .redblackwar-betting>div .redblackwar-black div:nth-of-type(1)>em {
    font-style: normal;
}

.chess-redblackwar-start .redblackwar-betting>div .redblackwar-hit.bl {
    border-radius: 0 0 2vw 2vw;
}

.chess-redblackwar-start .redblackwar-betting>div .redblackwar-hit.on {
    -webkit-animation: lightshadow 3s infinite;
    animation: lightshadow 3s infinite;
}

.chess-redblackwar-start .redblackwar-betting>div .redblackwar-hit div:nth-of-type(2)>span:nth-of-type(1) {
    font-size: 1.3em;
}

.chess-redblackwar-start .redblackwar-betting>div .redblackwar-hit div:nth-of-type(2)>span:nth-of-type(2) {
    font-size: .7em;
}

.chess-redblackwar-start .redblack-span>i {
    display: inline-block;
    font-style: normal;
}

/** 投注区高亮 **/

@-webkit-keyframes lightshadow {
    0% {
        -webkit-box-shadow: 0 0 0.83721rem #fd9781 inset;
        box-shadow: 0 0 0.83721rem #fd9781 inset;
    }
    25% {
        -webkit-box-shadow: 0 0 0 #fd9781 inset;
        box-shadow: 0 0 0 #fd9781 inset;
    }
    40% {
        -webkit-box-shadow: 0 0 0.83721rem #fd9781 inset;
        box-shadow: 0 0 0.83721rem #fd9781 inset;
    }
    55% {
        -webkit-box-shadow: 0 0 0 #fd9781 inset;
        box-shadow: 0 0 0 #fd9781 inset;
    }
    75% {
        -webkit-box-shadow: 0 0 0.83721rem #fd9781 inset;
        box-shadow: 0 0 0.83721rem #fd9781 inset;
    }
    90% {
        -webkit-box-shadow: 0 0 0 #fd9781 inset;
        box-shadow: 0 0 0 #fd9781 inset;
    }
    100% {
        -webkit-box-shadow: 0 0 0.83721rem #fd9781 inset;
        box-shadow: 0 0 0.83721rem #fd9781 inset;
    }
}

@keyframes lightshadow {
    0% {
        -webkit-box-shadow: 0 0 0.83721rem #fd9781 inset;
        box-shadow: 0 0 0.83721rem #fd9781 inset;
    }
    25% {
        -webkit-box-shadow: 0 0 0 #fd9781 inset;
        box-shadow: 0 0 0 #fd9781 inset;
    }
    40% {
        -webkit-box-shadow: 0 0 0.83721rem #fd9781 inset;
        box-shadow: 0 0 0.83721rem #fd9781 inset;
    }
    55% {
        -webkit-box-shadow: 0 0 0 #fd9781 inset;
        box-shadow: 0 0 0 #fd9781 inset;
    }
    75% {
        -webkit-box-shadow: 0 0 0.83721rem #fd9781 inset;
        box-shadow: 0 0 0.83721rem #fd9781 inset;
    }
    90% {
        -webkit-box-shadow: 0 0 0 #fd9781 inset;
        box-shadow: 0 0 0 #fd9781 inset;
    }
    100% {
        -webkit-box-shadow: 0 0 0.83721rem #fd9781 inset;
        box-shadow: 0 0 0.83721rem #fd9781 inset;
    }
}

/** loong **/

@-webkit-keyframes lightloong {
    0% {
        -webkit-box-shadow: 0 0 0.83721rem #6fbbf9 inset;
        box-shadow: 0 0 0.83721rem #6fbbf9 inset;
    }
    25% {
        -webkit-box-shadow: 0 0 0 #6fbbf9 inset;
        box-shadow: 0 0 0 #6fbbf9 inset;
    }
    40% {
        -webkit-box-shadow: 0 0 0.83721rem #6fbbf9 inset;
        box-shadow: 0 0 0.83721rem #6fbbf9 inset;
    }
    55% {
        -webkit-box-shadow: 0 0 0 #6fbbf9 inset;
        box-shadow: 0 0 0 #6fbbf9 inset;
    }
    75% {
        -webkit-box-shadow: 0 0 0.83721rem #6fbbf9 inset;
        box-shadow: 0 0 0.83721rem #6fbbf9 inset;
    }
    90% {
        -webkit-box-shadow: 0 0 0 #6fbbf9 inset;
        box-shadow: 0 0 0 #6fbbf9 inset;
    }
    100% {
        -webkit-box-shadow: 0 0 0.83721rem #6fbbf9 inset;
        box-shadow: 0 0 0.83721rem #6fbbf9 inset;
    }
}

@keyframes lightloong {
    0% {
        -webkit-box-shadow: 0 0 0.83721rem #6fbbf9 inset;
        box-shadow: 0 0 0.83721rem #6fbbf9 inset;
    }
    25% {
        -webkit-box-shadow: 0 0 0 #6fbbf9 inset;
        box-shadow: 0 0 0 #6fbbf9 inset;
    }
    40% {
        -webkit-box-shadow: 0 0 0.83721rem #6fbbf9 inset;
        box-shadow: 0 0 0.83721rem #6fbbf9 inset;
    }
    55% {
        -webkit-box-shadow: 0 0 0 #6fbbf9 inset;
        box-shadow: 0 0 0 #6fbbf9 inset;
    }
    75% {
        -webkit-box-shadow: 0 0 0.83721rem #6fbbf9 inset;
        box-shadow: 0 0 0.83721rem #6fbbf9 inset;
    }
    90% {
        -webkit-box-shadow: 0 0 0 #6fbbf9 inset;
        box-shadow: 0 0 0 #6fbbf9 inset;
    }
    100% {
        -webkit-box-shadow: 0 0 0.83721rem #6fbbf9 inset;
        box-shadow: 0 0 0.83721rem #6fbbf9 inset;
    }
}

/** tiger **/

@-webkit-keyframes lighttiger {
    0% {
        -webkit-box-shadow: 0 0 0.83721rem #f9ac56 inset;
        box-shadow: 0 0 0.83721rem #f9ac56 inset;
    }
    25% {
        -webkit-box-shadow: 0 0 0 #f9ac56 inset;
        box-shadow: 0 0 0 #f9ac56 inset;
    }
    40% {
        -webkit-box-shadow: 0 0 0.83721rem #f9ac56 inset;
        box-shadow: 0 0 0.83721rem #f9ac56 inset;
    }
    55% {
        -webkit-box-shadow: 0 0 0 #f9ac56 inset;
        box-shadow: 0 0 0 #f9ac56 inset;
    }
    75% {
        -webkit-box-shadow: 0 0 0.83721rem #f9ac56 inset;
        box-shadow: 0 0 0.83721rem #f9ac56 inset;
    }
    90% {
        -webkit-box-shadow: 0 0 0 #f9ac56 inset;
        box-shadow: 0 0 0 #f9ac56 inset;
    }
    100% {
        -webkit-box-shadow: 0 0 0.83721rem #f9ac56 inset;
        box-shadow: 0 0 0.83721rem #f9ac56 inset;
    }
}

@keyframes lighttiger {
    0% {
        -webkit-box-shadow: 0 0 0.83721rem #f9ac56 inset;
        box-shadow: 0 0 0.83721rem #f9ac56 inset;
    }
    25% {
        -webkit-box-shadow: 0 0 0 #f9ac56 inset;
        box-shadow: 0 0 0 #f9ac56 inset;
    }
    40% {
        -webkit-box-shadow: 0 0 0.83721rem #f9ac56 inset;
        box-shadow: 0 0 0.83721rem #f9ac56 inset;
    }
    55% {
        -webkit-box-shadow: 0 0 0 #f9ac56 inset;
        box-shadow: 0 0 0 #f9ac56 inset;
    }
    75% {
        -webkit-box-shadow: 0 0 0.83721rem #f9ac56 inset;
        box-shadow: 0 0 0.83721rem #f9ac56 inset;
    }
    90% {
        -webkit-box-shadow: 0 0 0 #f9ac56 inset;
        box-shadow: 0 0 0 #f9ac56 inset;
    }
    100% {
        -webkit-box-shadow: 0 0 0.83721rem #f9ac56 inset;
        box-shadow: 0 0 0.83721rem #f9ac56 inset;
    }
}

/** he **/

@-webkit-keyframes lighthe {
    0% {
        -webkit-box-shadow: 0 0 0.83721rem #64e74d inset;
        box-shadow: 0 0 0.83721rem #64e74d inset;
    }
    25% {
        -webkit-box-shadow: 0 0 0 #64e74d inset;
        box-shadow: 0 0 0 #64e74d inset;
    }
    40% {
        -webkit-box-shadow: 0 0 0.83721rem #64e74d inset;
        box-shadow: 0 0 0.83721rem #64e74d inset;
    }
    55% {
        -webkit-box-shadow: 0 0 0 #64e74d inset;
        box-shadow: 0 0 0 #64e74d inset;
    }
    75% {
        -webkit-box-shadow: 0 0 0.83721rem #64e74d inset;
        box-shadow: 0 0 0.83721rem #64e74d inset;
    }
    90% {
        -webkit-box-shadow: 0 0 0 #64e74d inset;
        box-shadow: 0 0 0 #64e74d inset;
    }
    100% {
        -webkit-box-shadow: 0 0 0.83721rem #64e74d inset;
        box-shadow: 0 0 0.83721rem #64e74d inset;
    }
}

@keyframes lighthe {
    0% {
        -webkit-box-shadow: 0 0 0.83721rem #64e74d inset;
        box-shadow: 0 0 0.83721rem #64e74d inset;
    }
    25% {
        -webkit-box-shadow: 0 0 0 #64e74d inset;
        box-shadow: 0 0 0 #64e74d inset;
    }
    40% {
        -webkit-box-shadow: 0 0 0.83721rem #64e74d inset;
        box-shadow: 0 0 0.83721rem #64e74d inset;
    }
    55% {
        -webkit-box-shadow: 0 0 0 #64e74d inset;
        box-shadow: 0 0 0 #64e74d inset;
    }
    75% {
        -webkit-box-shadow: 0 0 0.83721rem #64e74d inset;
        box-shadow: 0 0 0.83721rem #64e74d inset;
    }
    90% {
        -webkit-box-shadow: 0 0 0 #64e74d inset;
        box-shadow: 0 0 0 #64e74d inset;
    }
    100% {
        -webkit-box-shadow: 0 0 0.83721rem #64e74d inset;
        box-shadow: 0 0 0.83721rem #64e74d inset;
    }
}

/** 放大动画 **/

@-webkit-keyframes mini-to-big {
    from {
        -webkit-transform: scale(.5);
        transform: scale(.5);
        opacity: 0;
    }
    to {
        -webkit-transform: scale(1);
        transform: scale(1);
        opacity: 1;
    }
}

@keyframes mini-to-big {
    from {
        -webkit-transform: scale(.5);
        transform: scale(.5);
        opacity: 0;
    }
    to {
        -webkit-transform: scale(1);
        transform: scale(1);
        opacity: 1;
    }
}

/** 闪现动画 **/

@-webkit-keyframes flashshow {
    0% {
        opacity: 0;
    }
    35% {
        opacity: 1;
    }
    50% {
        opacity: 0;
    }
    75% {
        opacity: 1;
    }
    100% {
        opacity: 0;
    }
}

@keyframes flashshow {
    0% {
        opacity: 0;
    }
    35% {
        opacity: 1;
    }
    50% {
        opacity: 0;
    }
    75% {
        opacity: 1;
    }
    100% {
        opacity: 0;
    }
}

/** 右上角面板动画 **/

@-webkit-keyframes right-box {
    from {
        -webkit-transform: rotate(-91deg);
        transform: rotate(-91deg);
        -webkit-transform-origin: 85% 0;
        transform-origin: 85% 0;
    }
    to {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
        -webkit-transform-origin: 85% 0;
        transform-origin: 85% 0;
    }
}

@keyframes right-box {
    from {
        -webkit-transform: rotate(-91deg);
        transform: rotate(-91deg);
        -webkit-transform-origin: 85% 0;
        transform-origin: 85% 0;
    }
    to {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
        -webkit-transform-origin: 85% 0;
        transform-origin: 85% 0;
    }
}

/** 抖动 **/

@-webkit-keyframes fastPlay {
    0% {
        -webkit-transform: translate(0, 0);
        transform: translate(0, 0)
    }
    50% {
        -webkit-transform: translate(-1.5vw, 0);
        transform: translate(-1.5vw, 0)
    }
    100% {
        -webkit-transform: translate(0, 0);
        transform: translate(0, 0)
    }
}

@keyframes fastPlay {
    0% {
        -webkit-transform: translate(0, 0);
        transform: translate(0, 0)
    }
    50% {
        -webkit-transform: translate(-1.5vw, 0);
        transform: translate(-1.5vw, 0)
    }
    100% {
        -webkit-transform: translate(0, 0);
        transform: translate(0, 0)
    }
}

/** **/

.chess-popup {
    background: none !important;
}

/** 红黑大战样式结束 **/

/** 龙虎大战 开始 **/

.loongtiger-bg {
    position: fixed;
    bottom: 8vw;
    width: 100%;
    height: 50vh;
    z-index: 1;
    background: url(https://images.imags-google.com/game/loongTigerFloor.png) bottom center no-repeat;
    background-size: 100vw auto;
}

.loongTiger-head {
    position: fixed;
    left: 0;
    top: 0;
    z-index: 30;
    width: 100vw;
    height: 12vw;
    /* height:1.9rem; */
    background-position: 0 0
}

.loongTiger-head .chess-head-list {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: nowrap;
    flex-wrap: nowrap;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    height: 100%;
}

.loongTiger-head .chess-head-list .chess-head-left {
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    /*margin-top:.2rem;*/
    text-align: center;
}

.loongTiger-head .chess-head-list .chess-head-middle {
    -webkit-box-flex: 5;
    -ms-flex: 5;
    flex: 5;
    height: 8vw;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    text-align: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
}

.loongTiger-head .chess-head-list .chess-head-middle .head-zhuang {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
}

.loongTiger-head .chess-head-list .chess-head-middle .head-zhuang>em {
    display: block;
    width: 11vw;
    height: 9vw;
    background-position: 66% 5.2%;
}

.loongTiger-head .chess-head-list .chess-head-middle .head-middle-img {
    width: 36%;
    background-position: 1% 4.9%;
    color: #fff;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -ms-flex-line-pack: center;
    align-content: center;
}

.loongTiger-head .chess-head-list .chess-head-middle .head-middle-img .left-icon {
    float: left;
    width: 9.5vw;
    height: 7vw;
    line-height: 6.5vw;
    font-size: 4vw;
    margin-top: 1.5vw;
    text-align: center;
    display: inline-block;
}

.loongTiger-head .chess-head-list .chess-head-middle .head-middle-img .number-box {
    font-size: 3vw;
    width: 14vw;
    display: inline-block;
}

.loongTiger-head .chess-head-list .chess-head-middle .head-middle-img .right-icon {
    float: right;
    display: inline-block;
    margin-right: .5vw;
    width: 5vw;
    height: 6vw;
}

.loongTiger-head .chess-head-list .chess-head-middle .head-middle-img .right-icon i {
    display: block;
    width: 100%;
    height: 100%;
    -webkit-transition: .3s;
    transition: .3s;
    background-position: 39% 9.6%;
}

.loongTiger-head .chess-head-list .chess-head-middle .head-middle-img .right-icon i.on {
    -webkit-transform: rotate(180deg);
    transform: rotate(180deg);
    margin-top: .6vw;
}

.loongTiger-head .chess-head-list .chess-head-middle .head-middle-img.head-middle-runtime {
    background-position: 40.6% 4.9%;
}

.loongTiger-head .chess-head-list .chess-head-middle .head-middle-img.head-middle-runtime .left-icon {
    width: 5vw;
    height: 6vw;
    margin: 0 0 0 0;
    display: inline-block;
}

.loongTiger-head .chess-head-list .chess-head-middle .head-middle-img.head-middle-runtime .left-icon>i {
    display: inline-block;
    width: 100%;
    height: 100%;
    -webkit-transition: .3s;
    transition: .3s;
    background-position: 39% 9.6%;
}

.loongTiger-head .chess-head-list .chess-head-middle .head-middle-img.head-middle-runtime .left-icon>i.on {
    -webkit-transform: rotate(180deg);
    transform: rotate(180deg);
    margin-top: .8vw;
}

.loongTiger-head .chess-head-list .chess-head-middle .head-middle-img.head-middle-runtime .right-icon {
    width: 9vw;
    height: 7vw;
    line-height: 6.5vw;
    margin: 1.5vw 0 0 0;
    text-align: center;
    font-size: 4vw;
    display: inline-block;
}

.loongTiger-head .chess-head-list .chess-head-right {
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    /*margin-top:.2rem;*/
    text-align: center;
}

.loongTiger-head .head-left-btn {
    /*width:1.5rem;
    height:1.5rem;*/
    width: 9vw;
    height: 9vw;
    margin: 0 auto;
    background-position: 15.5% 9.1%;
}

.loongTiger-head .head-left-btn>em {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    width: 100%;
    height: 100%;
    background-position: 2.3% 9%;
}

.loongTiger-head .head-right-btn {
    /*width:1.5rem;
    height:1.5rem;*/
    width: 9vw;
    height: 9vw;
    margin: 0 auto;
    background-position: 2.3% 9%;
}

.loongTiger-head .head-right-btn>em {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    width: 100%;
    height: 100%;
    background-position: 27.3% 9%;
}

/** 龙虎牌面区 **/

.loongtiger-chip-head {
    position: fixed;
    top: 11vw;
    width: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -ms-flex-wrap: nowrap;
    flex-wrap: nowrap;
    height: 39vw
}

.loongtiger-chip-head>div {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    height: 100%;
    width: 100%;
}

.loongtiger-chip-head>div:nth-of-type(2) {
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    width: 58vw;
}

.loongtiger-chip-head>div:nth-of-type(2)>em {
    height: 12vw;
}

.loongtiger-chip-head>div>em {
    width: 100%;
}

.loongtiger-chip-head>div .loongtiger-chip-loong {
    background-position: 27% 15.2%;
}

.loongtiger-chip-head>div .loongtiger-chip-vs {
    background-position: 8.5% 49.7%;
}

.loongtiger-chip-head>div .loongtiger-chip-tiger {
    background-position: 0% 35%;
}

.loongtiger-chip-head>div .long-img {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    width: 100%;
    background-position: 100% 100%;
    /*background:url(https://images.imags-google.com/game/long.png) no-repeat;*/
    background-size: 250vw auto;
}

.loongtiger-chip-head>div .tiger-img {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    width: 100%;
    -webkit-box-pack: end;
    -ms-flex-pack: end;
    justify-content: flex-end;
}

.loongtiger-chip-head.loongtiger-chip-show {
    z-index: 20;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
}

.loongtiger-chip-head.loongtiger-chip-show>div {
    width: 15vw;
    height: 21vw;
    margin: 0 4vw;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
}

.loongtiger-chip-head.loongtiger-chip-show>div.loongtiger-chip-left {
    background-position: 70.6% 51%;
}

.loongtiger-chip-head.loongtiger-chip-show>div.loongtiger-chip-right {
    background-position: 95.5% 51%;
}

.loongtiger-chip-head.loongtiger-chip-show>div .loongtiger-chips {
    width: 11vw;
    height: 14.9vw;
    background-position: 84.6% 98%;
    position: relative;
    -webkit-transform: scale(1.07);
    transform: scale(1.07);
}

.loongtiger-chip-head.loongtiger-chip-show>div .loongtiger-chips>.loongtiger-fire {
    position: absolute;
    top: 50%;
    width: 100%;
    height: 50%;
    background-position: 46% 53%;
}

/** 龙虎开奖号码列表 **/

.loongtiger-open-list {
    position: fixed;
    top: 58vw;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    width: 100%;
    z-index: 8;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center
}

.loongtiger-open-list>.loongtiger-opennumber {
    width: 83vw;
    height: 10vw;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: nowrap;
    flex-wrap: nowrap;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    background-position: 4% 59.7%;
    padding: 0 2vw;
}

.loongtiger-open-list>.loongtiger-opennumber>em {
    position: relative;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    width: 100%;
    height: 7vw;
}

.loongtiger-open-list>.loongtiger-opennumber>em>i {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
}

.loongtiger-open-list>.loongtiger-opennumber>em .loongtiger-new {
    background-position: 72.1% 9.4%;
}

.loongtiger-open-list>.loongtiger-opennumber>em .loongtiger-ltwo {
    z-index: 0;
    background-position: 98.4% 12.45%;
}

.loongtiger-open-list>.loongtiger-opennumber>em .loongtiger-light {
    z-index: 1;
    background-position: 79.9% 9.4%;
    opacity: 0;
    -webkit-animation: flashshow 3s infinite;
    animation: flashshow 3s infinite;
}

.loongtiger-open-list>.loongtiger-opennumber>em .loongtiger-light.l-loong {
    background-position: 79.9% 9.4%;
}

.loongtiger-open-list>.loongtiger-opennumber>em .loongtiger-light.l-tiger {
    background-position: 89.2% 9.4%;
}

.loongtiger-open-list>.loongtiger-opennumber>em .loongtiger-light.l-he {
    background-position: 98.6% 9.4%;
}

.loongtiger-open-list>.loongtiger-opennumber>em.loong {
    background-position: 48.0% 9.4%;
}

.loongtiger-open-list>.loongtiger-opennumber>em.tiger {
    background-position: 56.0% 9.4%;
}

.loongtiger-open-list>.loongtiger-opennumber>em.he {
    background-position: 64.0% 9.4%;
}

/** 总投注 **/

.loongtiger-all-money {
    position: fixed;
    z-index: 8;
    top: 68vw;
    width: 100%;
    height: 15vw;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center
}

.loongtiger-all-money .loongtiger-all-mbg {
    width: 35vw;
    height: 7vw;
    font-size: .7em;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    text-align: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    background-position: 97% 30.9%;
}

.loongtiger-all-money .loongtiger-all-mbg>em {
    color: #f9e3b2;
    font-size: .7em;
    text-shadow: 0.04651rem 0.04651rem 0.04651rem #541e32;
}

.loongtiger-user {
    top: 44vw;
}

/** 龙虎盘口开始 **/

.loongtiger-betting {
    position: fixed;
    bottom: 18vw;
    height: 72vw;
    /* height: 65vw; */
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    z-index: 9;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    width: 100%
}

.loongtiger-betting>div {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    justify-content: flex-start;
}

.loongtiger-betting>div .loongtiger-betting-loong,
.loongtiger-betting>div .loongtiger-betting-tiger {
    width: 39vw;
    height: 33vw;
}

.loongtiger-betting>div .loongtiger-betting-loong {
    background: url(https://images.imags-google.com/game/loongBg.png) center center no-repeat;
    background-size: 50vw auto;
    /*background-position:0% 72%;*/
}

.loongtiger-betting>div .loongtiger-betting-loong .loongtiger-number-top {
    /*border-radius:1vw 1vw 0 0;*/
    position: relative;
    z-index: 100;
    background: -webkit-gradient(linear, left top, right top, from(#33417c), color-stop(#5c76d6), to(#33417c));
    background: linear-gradient(to right, #33417c, #5c76d6, #33417c);
}

.loongtiger-betting>div .loongtiger-betting-loong .loongtiger-number-middle {
    color: #31447f;
}

.loongtiger-betting>div .loongtiger-betting-loong .loongtiger-number-down {
    color: #afa5d5;
    text-shadow: 0.04651rem 0.04651rem 0.04651rem #231a4d;
}

.loongtiger-betting>div .loongtiger-betting-tiger {
    background: url(https://images.imags-google.com/game/tigerBg.png) center center no-repeat;
    background-size: 50vw auto;
    /*background-position:73% 72%;*/
}

.loongtiger-betting>div .loongtiger-betting-tiger .loongtiger-number-top {
    position: relative;
    z-index: 100;
    width: 39vw;
    background: -webkit-gradient(linear, left top, right top, from(#7d603b), color-stop(#b88e3f), to(#7d603b));
    background: linear-gradient(to right, #7d603b, #b88e3f, #7d603b);
    /*border-radius:1vw 1vw 0 0;*/
}

.loongtiger-betting>div .loongtiger-betting-tiger .loongtiger-number-middle {
    color: #723e32;
}

.loongtiger-betting>div .loongtiger-betting-tiger .loongtiger-number-down {
    color: #ffd3b3;
    text-shadow: 0.04651rem 0.04651rem 0.04651rem #503313;
}

.loongtiger-betting>div .loongtiger-betting-he {
    width: 80vw;
    height: 33vw;
    background: url(https://images.imags-google.com/game/heBg.png) bottom center no-repeat;
    background-size: auto 100%;
    /*background-position: 4% 89%;*/
}

.loongtiger-betting>div .loongtiger-betting-he .loongtiger-number-top {
    position: relative;
    z-index: 100;
    background: -webkit-gradient(linear, left top, right top, from(#557e3b), color-stop(#7baf5f), to(#557e3b));
    background: linear-gradient(to right, #557e3b, #7baf5f, #557e3b);
    /*border-radius:1vw 1vw 0 0;*/
}

.loongtiger-betting>div .loongtiger-betting-he .loongtiger-number-middle {
    color: #1f551c;
}

.loongtiger-betting>div .loongtiger-betting-he .loongtiger-number-down {
    color: #d4dfce;
    text-shadow: 0.04651rem 0.04651rem 0.04651rem #12531a;
}

.loongtiger-betting>div .loongtiger-betinfo {
    position: relative;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    /*font-size: .7em;*/
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    text-align: center;
}

.loongtiger-betting>div .loongtiger-betinfo>div {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
}

.loongtiger-betting>div .loongtiger-betinfo>div>div {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    width: 100%;
}

.loongtiger-betting>div .loongtiger-betinfo>div>em {
    font-size: .7em;
}

.loongtiger-betting>div .loongtiger-betinfo .loongtiger-number-top {
    /*height: 5.5vw;*/
    color: #f9e3b2;
    text-shadow: 0.04651rem 0.04651rem 0.04651rem #541e32;
}

.loongtiger-betting>div .loongtiger-betinfo .loongtiger-number-middle {
    height: 24vw;
}

.loongtiger-betting>div .loongtiger-betinfo .loongtiger-number-middle>div .loongtiger-nmiddle-loong,
.loongtiger-betting>div .loongtiger-betinfo .loongtiger-number-middle>div .loongtiger-nmiddle-tiger,
.loongtiger-betting>div .loongtiger-betinfo .loongtiger-number-middle>div .loongtiger-nmiddle-he {
    height: 9vw;
    width: 10vw;
    margin: 0 auto;
}

.loongtiger-betting>div .loongtiger-betinfo .loongtiger-number-middle>div:nth-of-type(1) {}

.loongtiger-betting>div .loongtiger-betinfo .loongtiger-number-middle>div:nth-of-type(2)>em {
    font-size: .5em;
}

.loongtiger-betting>div .loongtiger-betinfo .loongtiger-number-middle>div:nth-of-type(3)>em {
    font-size: .7em;
}

.loongtiger-betting>div .loongtiger-betinfo .loongtiger-number-middle>div .loongtiger-nmiddle-loong {
    background-position: 97.5% 25.2%;
}

.loongtiger-betting>div .loongtiger-betinfo .loongtiger-number-middle>div .loongtiger-nmiddle-tiger {
    background-position: 82.5% 25.2%;
}

.loongtiger-betting>div .loongtiger-betinfo .loongtiger-number-middle>div .loongtiger-nmiddle-he {
    background-position: 68.5% 25.2%;
}

.loongtiger-betting>div .loongtiger-betinfo .loongtiger-number-down {
    position: absolute;
    bottom: 0;
    width: 100%;
    /*height: 7vw;*/
}

.loongtiger-betting .loongtiger-first {
    width: 80vw;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
}

.loongtiger-betting .loongtiger-first>div {
    border-radius: 1vw;
    overflow: hidden;
}

.loongtiger-betting .loongtiger-first>div:nth-of-type(1) {
    margin-right: 2vw;
    border: 1Px solid #394d8f;
    background: -webkit-gradient(linear, left bottom, left top, from(#606192), to(#b0bfe9));
    background: linear-gradient(to top, #606192, #b0bfe9);
}

.loongtiger-betting .loongtiger-first>div:nth-of-type(1).on {
    -webkit-animation: lightloong 3s infinite;
    animation: lightloong 3s infinite;
}

.loongtiger-betting .loongtiger-first>div:nth-of-type(2) {
    border: 1Px solid #845019;
    background: -webkit-gradient(linear, left bottom, left top, from(#9c7659), to(#e6c496));
    background: linear-gradient(to top, #9c7659, #e6c496);
}

.loongtiger-betting .loongtiger-first>div:nth-of-type(2).on {
    -webkit-animation: lighttiger 3s infinite;
    animation: lighttiger 3s infinite;
}

.loongtiger-betting .loongtiger-second {
    width: 80vw;
    overflow: hidden;
    margin-top: 2vw;
    border-radius: 1vw;
    border: 1Px solid #1f6313;
    background: -webkit-gradient(linear, left bottom, left top, from(#6b865a), to(#c3cbb7));
    background: linear-gradient(to top, #6b865a, #c3cbb7);
}

.loongtiger-betting .loongtiger-second.on {
    -webkit-animation: lighthe 3s infinite;
    animation: lighthe 3s infinite;
    overflow: hidden;
}

/** 龙虎大战 结束 **/

/** 右上角面板start **/

.top-right-box {
    background-position: -3% 60.8%;
    position: absolute;
    right: 2vw;
    top: 9vw;
    width: 26vw;
    height: 34vw;
    z-index: 21;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-transition: .3s all;
    transition: .3s all;
    -webkit-transform: rotate(-91deg);
    transform: rotate(-91deg);
    -webkit-transform-origin: 100% 0;
    transform-origin: 100% 0
}

.top-right-box.animate-in {
    opacity: 1;
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
    /*animation:.3s right-box 1;*/
}

.top-right-box.animate-out {
    -webkit-transform: rotate(-91deg);
    transform: rotate(-91deg);
}

.top-right-box .top-right-info {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    width: 83%;
    margin: 0 auto;
    margin-top: 1vw;
    height: 25vw;
}

.top-right-box .top-right-info>div {
    width: 100%;
    height: 7vw;
    margin: 1vw auto;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
}

.top-right-box .top-right-info>div>em {
    display: block;
    width: 100%;
    height: 100%;
}

.top-right-box .top-right-info>div>em.top-right-playinfo-icon {
    background-position: 81.9% 38.6%;
}

.top-right-box .top-right-info>div>em.top-right-playinfo-txt {
    background-position: 40% 41.7%;
}

.top-right-box .top-right-info>div>em.top-right-sound-open {
    background-position: 59.5% 38.6%;
}

.top-right-box .top-right-info>div>em.top-right-sound-close {
    background-position: 70.5% 38.6%;
}

.top-right-box .top-right-info>div>em.top-right-sound-txt {
    background-position: 55.5% 41.7%;
}

.top-right-box .top-right-info>div>em.top-right-music-open {
    background-position: 48.2% 38.4%;
}

.top-right-box .top-right-info>div>em.top-right-music-close {
    background-position: 37.1% 38.4%;
}

.top-right-box .top-right-info>div>em.top-right-music-txt {
    background-position: 70.7% 41.5%;
}

/* 字体样式处理 */

.set-yellow {
    background: -webkit-linear-gradient(top, #f8dab2, #f8dab2 38%, #f2c250 68%, #f2c250);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    color: #f9c970;
}

.set-yellow-slide {
    background: -webkit-linear-gradient(top, #f8dab2, #f8dab2 38%, #f2c250 68%, #f2c250);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    color: #f9c970;
    -webkit-text-stroke: 1Px #5e3f28;
}

.set-yellow-slide-me {
    font-size: 1rem;
    /* color:#ac7207; */
}

.set-red {
    color: #d45c58;
}

.set-red-black {
    color: #ec8670;
}

.set-red-black-tran {
    color: rgba(236, 135, 112, 0.76863);
}

.slide-color {
    text-shadow: 1Px 1Px 1Px rgba(0, 0, 0, .3);
}

.set-reducemoney {
    background: -webkit-linear-gradient(top, #4a72bc, #4a72bc 38%, #aad1fc 68%, #aad1fc);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    color: #4a72bc;
    text-shadow: 0.04651rem 0.04651rem 0.09302rem rgba(0, 0, 0, .1);
}

/** 红黑和龙虎 牌面窗口样式 **/

.box-short {
    height: 42vw !important;
    top: 69% !important;
}

/** 右上角面板end **/

.how-to-play {
    position: relative;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: space-evenly;
    -ms-flex-pack: space-evenly;
    justify-content: space-evenly;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    width: 84vw;
    -webkit-animation: .3s mini-to-big 1;
    animation: .3s mini-to-big 1;
}

/** 牌面显示说明对照
**
    方块<梅花<红桃<黑桃   04>>2  牌大小；04%4  牌型花色
    0<1<2<3

    ♦️  1  2  3  4  5  6  7  8  9  10  J  Q  K
      04 08 12 16 20 24 28 32 36 40  44 48 52
    ♣️ 1  2  3  4  5  6  7  8  9  10  J  Q  K
      05 09 13 17 21 25 29 33 37 41  45 49 53
    ♥️ 1  2  3  4  5  6  7  8  9  10  J  Q  K
      06 10 14 18 22 26 30 34 38 42  46 50 54
    ♠️ 1  2  3  4  5  6  7  8  9  10  J  Q  K
      07 11 15 19 23 27 31 35 39 43  47 51 55
*/

.pkbg {
    background-position: 84.8% 98% !important;
}

/**1**/

.pk7 {
    background-position: 13.5% -.2% !important;
}

.pk6 {
    background-position: 0% -.2% !important;
}

.pk5 {
    background-position: 27.3% -.2% !important;
}

.pk4 {
    background-position: 40.7% -.2% !important;
}

/**2**/

.pk11 {
    background-position: 13.5% 16.2% !important;
}

.pk10 {
    background-position: 0% 16.2% !important;
}

.pk9 {
    background-position: 27.3% 16.2% !important;
}

.pk8 {
    background-position: 40.7% 16.2% !important;
}

/**3**/

.pk15 {
    background-position: 13.5% 32.6% !important;
}

.pk14 {
    background-position: 0% 32.6% !important;
}

.pk13 {
    background-position: 27.3% 32.6% !important;
}

.pk12 {
    background-position: 40.7% 32.6% !important;
}

/**4**/

.pk19 {
    background-position: 13.5% 48.9% !important;
}

.pk18 {
    background-position: 0% 48.9% !important;
}

.pk17 {
    background-position: 27.3% 48.9% !important;
}

.pk16 {
    background-position: 40.7% 48.9% !important;
}

/**5**/

.pk23 {
    background-position: 13.5% 65.3% !important;
}

.pk22 {
    background-position: 0% 65.3% !important;
}

.pk21 {
    background-position: 27.3% 65.3% !important;
}

.pk20 {
    background-position: 40.7% 65.3% !important;
}

/**6**/

.pk27 {
    background-position: 13.5% 81.7% !important;
}

.pk26 {
    background-position: 0% 81.7% !important;
}

.pk25 {
    background-position: 27.3% 81.7% !important;
}

.pk24 {
    background-position: 40.7% 81.7% !important;
}

/**7**/

.pk31 {
    background-position: 13.5% 98% !important;
}

.pk30 {
    background-position: 0% 98% !important;
}

.pk29 {
    background-position: 27.3% 98% !important;
}

.pk28 {
    background-position: 40.7% 98% !important;
}

/**8**/

.pk35 {
    background-position: 71% -.2% !important;
}

.pk34 {
    background-position: 57.5% -.2% !important;
}

.pk33 {
    background-position: 84.5% -.2% !important;
}

.pk32 {
    background-position: 98% -.2% !important;
}

/**9**/

.pk39 {
    background-position: 71% 16.2% !important;
}

.pk38 {
    background-position: 57.5% 16.2% !important;
}

.pk37 {
    background-position: 84.5% 16.2% !important;
}

.pk36 {
    background-position: 98% 16.2% !important;
}

/**10**/

.pk43 {
    background-position: 71% 32.7% !important;
}

.pk42 {
    background-position: 57.5% 32.7% !important;
}

.pk41 {
    background-position: 84.5% 32.7% !important;
}

.pk40 {
    background-position: 98% 32.7% !important;
}

/**J**/

.pk47 {
    background-position: 71% 48.9% !important;
}

.pk46 {
    background-position: 57.5% 48.9% !important;
}

.pk45 {
    background-position: 84.5% 48.9% !important;
}

.pk44 {
    background-position: 98% 48.9% !important;
}

/**Q**/

.pk51 {
    background-position: 71% 65.3% !important;
}

.pk50 {
    background-position: 57.5% 65.3% !important;
}

.pk49 {
    background-position: 84.5% 65.3% !important;
}

.pk48 {
    background-position: 98% 65.3% !important;
}

/**K**/

.pk55 {
    background-position: 71% 81.7% !important;
}

.pk54 {
    background-position: 57.5% 81.7% !important;
}

.pk53 {
    background-position: 84.5% 81.7% !important;
}

.pk52 {
    background-position: 98% 81.7% !important;
}

/**牌面样式结束 */

.align-text {
    text-align: center;
    padding: 10%;
}

/** 骰宝点数 **/

.sicbodot-1 {
    background-position: -0.7% 35%;
}

.sicbodot-2 {
    background-position: 16% 35%;
}

.sicbodot-3 {
    background-position: 32.8% 35%;
}

.sicbodot-4 {
    background-position: 49.6% 35%;
}

.sicbodot-5 {
    background-position: 66.4% 35%;
}

.sicbodot-6 {
    background-position: 83% 35%;
}

/* 奔驰宝马 start */

.benzbmw-body .benzbmw-user>.game-other-user {
    right: inherit !important;
    top: 24vw;
    left: 2vw;
}

.benzbmw-body .game-other-user .resultMoney {
    position: absolute;
    /*top: -1.11628rem;*/
    /*right: inherit;*/
    /*width: 10rem;*/
    left: 0;
    text-align: left;
}

/* 背景标识动画样式 */

.benzBMW-topbg-left {
    position: absolute;
    z-index: 0;
    left: -2.9vw;
    top: 8.7vw
}

.benzBMW-topbg-left>div {
    width: 13.333vw;
    height: 6.666vw;
    background: url(https://images.imags-google.com/game/benzBMW-TopLeft.png) no-repeat;
    background-size: 80vw auto;
    -webkit-animation: runTopBgLeft .8s forwards steps(5, start) infinite;
}

.benzBMW-topbg-left>div.fast {
    -webkit-animation: runTopBgLeft .2s forwards steps(5, start) infinite;
}

.benzBMW-topbg-right {
    position: absolute;
    z-index: 0;
    right: 2.2vw;
    top: 11.5vw
}

.benzBMW-topbg-right>div {
    width: 20vw;
    height: 13.333vw;
    background: url(https://images.imags-google.com/game/benzBMW-TopRight.png) no-repeat;
    background-size: 160vw auto;
    -webkit-animation: runTopBgRight 1s forwards steps(7, start) infinite;
}

.benzBMW-topbg-right>div.fast {
    -webkit-animation: runTopBgRight .2s forwards steps(7, start) infinite;
}

.benzBMW-topbg-middle {
    position: absolute;
    z-index: 0;
    left: 50%;
    top: 7.3vw;
    width: 16vw;
    height: 3vw;
    margin-left: -11.6vw
}

.benzBMW-topbg-middle>div {
    width: 100%;
    height: 100%;
    background: url(https://images.imags-google.com/game/benzBMW-top-middle.png) no-repeat;
    background-size: 192vw auto;
    -webkit-animation: runTopBgMiddle 1.5s forwards steps(11, start) infinite;
}

/** 盘口发光图start **/

.benzbmw-light-img {
    background: url(https://images.imags-google.com/game/benzBMW-light.png) no-repeat;
    background-size: 99vw auto;
}

/** 盘口保时捷车标发光动画 **/

.benzbmw-run-porsche-img {
    background: url(https://images.imags-google.com/game/benzBMW-porsche-light.png) no-repeat;
    background-size: 266.666vw auto;
    /* background-position:0vw -2vw; */
    -webkit-animation: carrun-porsche 1.5s forwards steps(9, start) infinite;
}

/** 盘口车标发光动画 **/

.benzbmw-run-img {
    background: url(https://images.imags-google.com/game/carRun.png) no-repeat;
    background-size: 280vw auto;
    /* background-position:0vw -2vw; */
    -webkit-animation: carrun 1.5s forwards steps(9, start) infinite;
}

.benzbmwlight-box {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    width: 100%;
    height: 100%;
    -webkit-animation: benzbmwlightline 1.5s infinite;
    animation: benzbmwlightline 1.5s infinite;
}

.benzbmw-light-red-porsche {
    background-position: 3% 44%;
}

.benzbmw-light-blue-porsche {
    -webkit-transform: scaleX(.99) rotateY(-180deg);
    transform: scaleX(.99) rotateY(-180deg);
    background-position: 3% 42%;
}

.benzbmw-light-red-bmw {
    background-position: 63% 44%;
}

.benzbmw-light-blue-bmw {
    -webkit-transform: rotateY(-180deg);
    transform: rotateY(-180deg);
    background-position: 63% 44%;
    -webkit-transform: scale(.99);
    transform: scale(.99);
    -webkit-transform: translateX(-.5vw);
    transform: translateX(-.5vw);
}

.benzbmw-light-red-benz {
    background-position: 63% 44%;
}

.benzbmw-light-blue-benz {
    -webkit-transform: rotateY(-180deg);
    transform: rotateY(-180deg);
    background-position: 63% 44%;
    -webkit-transform: scale(.99);
    transform: scale(.99);
    -webkit-transform: translateX(-.5vw);
    transform: translateX(-.5vw);
}

.benzbmw-light-red-public {
    -webkit-transform: rotateX(-180deg);
    transform: rotateX(-180deg);
    background-position: 3.5% 44%;
}

.benzbmw-light-blue-public {
    -webkit-transform: scaleX(.99) rotate(-180deg);
    transform: scaleX(.99) rotate(-180deg);
    background-position: 3% 44%;
}

/** 盘口发光图end **/

.benz-container {
    position: absolute;
    z-index: 2;
    padding: 12vw 0 24vw 0;
    height: 100%;
    overflow: hidden;
    /* background: url(https://images.imags-google.com/game/redblackbg.png) bottom center no-repeat; */
    background-size: 100vw auto
}

.benz-container .trend-content {
    height: auto;
    width: 100%;
    margin-top: 0vw;
    /** 走势图 **/
}

.benz-container .trend-content .benzbmw-trend {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    margin: 0 auto;
    width: 66vw;
    height: 10vw;
    background-position: -1.5% -0.45%;
}

.benz-container .trend-content .benzbmw-trend .benzbmw-ul {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    width: 61vw;
    margin: 0 auto;
}

.benz-container .trend-content .benzbmw-trend .benzbmw-ul>div {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    width: 6.56vw;
    height: 6.52vw;
    position: relative;
}

.benz-container .trend-content .benzbmw-trend .benzbmw-ul>div .benzbmw-position {
    position: absolute;
    left: 0;
    top: 0.1vw;
    width: 100%;
    height: 100%;
}

.benz-container .trend-content .benzbmw-trend .benzbmw-ul .benzbmw-trendbg {
    background-position: 98.2% 1.1%;
}

.benz-container .trend-content .benzbmw-trend .benzbmw-ul {
    /** 红标 **/
}

.benz-container .trend-content .benzbmw-trend .benzbmw-ul .red-benz {
    background-position: 82.75% 11.3%;
}

.benz-container .trend-content .benzbmw-trend .benzbmw-ul .red-bmw {
    background-position: 95.2% 11.2%;
}

.benz-container .trend-content .benzbmw-trend .benzbmw-ul .red-public {
    background-position: 70% 10.9%;
}

.benz-container .trend-content .benzbmw-trend .benzbmw-ul .red-porsche {
    background-position: 57.5% 10.9%;
}

.benz-container .trend-content .benzbmw-trend .benzbmw-ul {
    /** 蓝标 **/
}

.benz-container .trend-content .benzbmw-trend .benzbmw-ul .blue-benz {
    background-position: 82.6% 21.3%;
    -webkit-transform: scale(.8);
    transform: scale(.8);
}

.benz-container .trend-content .benzbmw-trend .benzbmw-ul .blue-bmw {
    background-position: 95.1% 21.2%;
    -webkit-transform: scale(.8);
    transform: scale(.8);
}

.benz-container .trend-content .benzbmw-trend .benzbmw-ul .blue-public {
    background-position: 69.85% 21%;
    -webkit-transform: scale(.8);
    transform: scale(.8);
}

.benz-container .trend-content .benzbmw-trend .benzbmw-ul .blue-porsche {
    background-position: 57.3% 20.9%;
    -webkit-transform: scale(.8);
    transform: scale(.8);
}

.benz-container .trend-content .benzbmw-trend .benzbmw-ul {
    /** 正常圆**/
}

.benz-container .trend-content .benzbmw-trend .benzbmw-ul .red-circle {
    background-position: 45.3% 10.9%;
}

.benz-container .trend-content .benzbmw-trend .benzbmw-ul .blue-circle {
    background-position: 31.7% 10.9%;
}

.benz-container .trend-content .benzbmw-trend .benzbmw-ul {
    /** 高亮圆 **/
}

.benz-container .trend-content .benzbmw-trend .benzbmw-ul .red-light {
    width: 8vw !important;
    height: 7.5vw !important;
    top: -0.15vw !important;
    left: -1vw !important;
    background-position: 3.65% 10.88%;
    opacity: 0;
    /*-webkit-animation:runsmall 1.5s infinite;*/
}

.benz-container .trend-content .benzbmw-trend .benzbmw-ul .blue-light {
    width: 8vw !important;
    height: 7.5vw !important;
    top: -0.1vw !important;
    left: -0.7vw !important;
    background-position: 17.55% 10.87%;
    opacity: 0;
    /*-webkit-animation:runsmall 1.5s infinite;*/
}

.benz-container .trend-content .benzbmw-trend .benzbmw-ul .show {
    -webkit-animation: trendshow 3s forwards;
}

.benz-container .trend-content .benzbmw-trend .benzbmw-ul .line-show {
    /*opacity: 1;*/
}

.benz-container .trend-content .benzbmw-trend .benzbmw-ul .trend-show {
    opacity: 0;
}

.benz-container .benz-content {
    position: relative;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    justify-content: flex-start;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    width: 100vw;
    height: 134vw;
    background: url(https://images.imags-google.com/game/benzBMW-inside-bg.png) center 0 no-repeat;
    background-size: 100vw auto;
    /*transform:scale(.8);*/
}

.benz-container .benz-content .benzbmw-allmoney {
    position: absolute;
    width: 40vw;
    height: 6vw;
    top: 19.5vw;
    left: 30vw;
    z-index: 2;
    text-align: center;
    font-size: .5rem;
}

.benz-container .benz-content .benzbmw-allmoney span {
    height: 100%;
    text-align: center;
    color: #f9c970;
}

.benz-container .benz-content .box {
    position: absolute;
    width: 11vw;
    height: 11vw;
    background-position: 93.5% 34.2%;
    border-radius: 50%;
}

.benz-container .benz-content .box:nth-of-type(1) {
    left: 49.7vw;
    top: 5.9vw;
}

.benz-container .benz-content .box:nth-of-type(1) .game-benzbmw-run-light {
    -webkit-transform: translate3d(0vw, -0.3vw, 0);
    transform: translate3d(0vw, -0.3vw, 0);
}

.benz-container .benz-content .box:nth-of-type(2) {
    left: 59.9vw;
    top: 7vw;
}

.benz-container .benz-content .box:nth-of-type(2) .box-blue-light {
    -webkit-transform: translate3d(0.3vw, -0.3vw, 0);
    transform: translate3d(0.3vw, -0.3vw, 0);
}

.benz-container .benz-content .box:nth-of-type(3) {
    left: 70.1vw;
    top: 10.8vw;
}

.benz-container .benz-content .box:nth-of-type(4) {
    left: 78.8vw;
    top: 16.8vw;
}

.benz-container .benz-content .box:nth-of-type(4) .box-blue-light {
    -webkit-transform: translate3d(0.4vw, -0.2vw, 0);
    transform: translate3d(0.4vw, -0.2vw, 0);
}

.benz-container .benz-content .box:nth-of-type(5) {
    left: 84.5vw;
    top: 25.8vw;
}

.benz-container .benz-content .box:nth-of-type(5) .game-benzbmw-run-light {
    -webkit-transform: translate3d(0vw, -0.3vw, 0);
    transform: translate3d(0vw, -0.3vw, 0);
}

.benz-container .benz-content .box:nth-of-type(5) .box-red-light {
    -webkit-transform: translate3d(-0.2vw, 0.1vw, 0);
    transform: translate3d(-0.2vw, 0.1vw, 0);
}

.benz-container .benz-content .box:nth-of-type(6) {
    left: 85.4vw;
    top: 36.1vw;
}

.benz-container .benz-content .box:nth-of-type(6) .box-blue-light {
    -webkit-transform: translate3d(0.3vw, -0.1vw, 0);
    transform: translate3d(0.3vw, -0.1vw, 0);
}

.benz-container .benz-content .box:nth-of-type(7) {
    left: 85.4vw;
    top: 46.7vw;
}

.benz-container .benz-content .box:nth-of-type(8) {
    left: 85.3vw;
    top: 57.3vw;
}

.benz-container .benz-content .box:nth-of-type(9) {
    left: 85.4vw;
    top: 67.8vw;
}

.benz-container .benz-content .box:nth-of-type(10) {
    left: 85.3vw;
    top: 78.3vw;
}

.benz-container .benz-content .box:nth-of-type(10) .game-benzbmw-run-light {
    -webkit-transform: translate3d(-0.4vw, -0.1vw, 0);
    transform: translate3d(-0.4vw, -0.1vw, 0);
}

.benz-container .benz-content .box:nth-of-type(11) {
    left: 85.3vw;
    top: 88.9vw;
}

.benz-container .benz-content .box:nth-of-type(11) .box-red-light {
    -webkit-transform: translate3d(0.2vw, 0.3vw, 0);
    transform: translate3d(0.2vw, 0.3vw, 0);
}

.benz-container .benz-content .box:nth-of-type(12) {
    left: 84.3vw;
    top: 99.4vw;
}

.benz-container .benz-content .box:nth-of-type(12) .box-blue-light {
    -webkit-transform: translate3d(0.4vw, -0.2vw, 0);
    transform: translate3d(0.4vw, -0.2vw, 0);
}

.benz-container .benz-content .box:nth-of-type(13) {
    left: 78.5vw;
    top: 108.2vw;
}

.benz-container .benz-content .box:nth-of-type(13) .game-benzbmw-run-light {
    -webkit-transform: translate3d(-0.05vw, -0.4vw, 0);
    transform: translate3d(-0.05vw, -0.4vw, 0);
}

.benz-container .benz-content .box:nth-of-type(14) {
    left: 69.5vw;
    top: 114.3vw;
}

.benz-container .benz-content .box:nth-of-type(14) .box-blue-light {
    -webkit-transform: translate3d(0.2vw, -0.2vw, 0);
    transform: translate3d(0.2vw, -0.2vw, 0);
}

.benz-container .benz-content .box:nth-of-type(15) {
    left: 59.9vw;
    top: 118.0vw;
}

.benz-container .benz-content .box:nth-of-type(16) {
    left: 49.6vw;
    top: 119.2vw;
}

.benz-container .benz-content .box:nth-of-type(17) {
    left: 39.3vw;
    top: 119.2vw;
}

.benz-container .benz-content .box:nth-of-type(18) {
    left: 28.8vw;
    top: 118.0vw;
}

.benz-container .benz-content .box:nth-of-type(18) .game-benzbmw-run-light {
    -webkit-transform: translate3d(-0.4vw, -0.4vw, 0);
    transform: translate3d(-0.4vw, -0.4vw, 0);
}

.benz-container .benz-content .box:nth-of-type(19) {
    left: 19.1vw;
    top: 114.5vw;
}

.benz-container .benz-content .box:nth-of-type(20) {
    left: 10.4vw;
    top: 108.1vw;
}

.benz-container .benz-content .box:nth-of-type(20) .box-blue-light {
    -webkit-transform: translate3d(0.3vw, -0.1vw, 0);
    transform: translate3d(0.3vw, -0.1vw, 0);
}

.benz-container .benz-content .box:nth-of-type(21) {
    left: 4.9vw;
    top: 99.2vw;
}

.benz-container .benz-content .box:nth-of-type(21) .game-benzbmw-run-light {
    -webkit-transform: translate3d(-0.05vw, -0.4vw, 0);
    transform: translate3d(-0.05vw, -0.4vw, 0);
}

.benz-container .benz-content .box:nth-of-type(22) {
    left: 3.4vw;
    top: 88.8vw;
}

.benz-container .benz-content .box:nth-of-type(23) {
    left: 3.4vw;
    top: 78.3vw;
}

.benz-container .benz-content .box:nth-of-type(24) {
    left: 3.4vw;
    top: 68vw;
}

.benz-container .benz-content .box:nth-of-type(25) {
    left: 3.4vw;
    top: 57.3vw;
}

.benz-container .benz-content .box:nth-of-type(26) {
    left: 3.4vw;
    top: 46.7vw;
}

.benz-container .benz-content .box:nth-of-type(27) {
    left: 3.4vw;
    top: 36.3vw;
}

.benz-container .benz-content .box:nth-of-type(28) {
    left: 4.4vw;
    top: 25.9vw;
}

.benz-container .benz-content .box:nth-of-type(28) .box-blue-light {
    -webkit-transform: translate3d(0.4vw, -0.2vw, 0);
    transform: translate3d(0.4vw, -0.2vw, 0);
}

.benz-container .benz-content .box:nth-of-type(29) {
    left: 10.4vw;
    top: 16.8vw;
}

.benz-container .benz-content .box:nth-of-type(30) {
    left: 18.8vw;
    top: 10.7vw;
}

.benz-container .benz-content .box:nth-of-type(30) .box-blue-light {
    -webkit-transform: translate3d(0.4vw, -0.2vw, 0);
    transform: translate3d(0.4vw, -0.2vw, 0);
}

.benz-container .benz-content .box:nth-of-type(31) {
    left: 28.9vw;
    top: 7vw;
}

.benz-container .benz-content .box:nth-of-type(32) {
    left: 39.1vw;
    top: 5.9vw;
}

.benz-container .benz-content .box>div {
    position: absolute;
    left: 0;
    top: 0;
    width: 11vw;
    height: 11vw;
}

.benz-container .benz-content .box {
    /** 红大标开奖 **/
}

.benz-container .benz-content .box .box-red-benz {
    background-position: 28.6% 20.6%;
}

.benz-container .benz-content .box .box-red-bmw {
    background-position: 43% 20.6%;
}

.benz-container .benz-content .box .box-red-public {
    background-position: 14.3% 20.6%;
}

.benz-container .benz-content .box .box-red-porsche {
    background-position: 0.2% 20.4%;
}

.benz-container .benz-content .box .box-red-circle {
    background-position: 2.1% 34.3%;
}

.benz-container .benz-content .box .box-red-light {
    top: -1.3vw;
    left: -1.1vw;
    width: 13vw;
    height: 13vw;
    z-index: 3;
    background-position: 47.7% 33.8%;
    /*-webkit-animation:runsmall 1.5s infinite;*/
}

.benz-container .benz-content .box .trailing-blue {
    background: url(https://images.imags-google.com/game/benzBMW-spirit.png) no-repeat;
    background-size: 100vw auto;
    top: -1.3vw;
    left: -1.1vw;
    width: 13vw;
    height: 13vw;
    z-index: 3;
    background-position: 47.7% 33.8%;
    opacity: .5;
    /*background: blue;*/
}

.benz-container .benz-content .box {
    /** 蓝小标开奖 **/
}

.benz-container .benz-content .box .box-blue-benz {
    -webkit-transform: scale(.7);
    transform: scale(.7);
    background-position: 28.5% 20.6%;
}

.benz-container .benz-content .box .box-blue-bmw {
    -webkit-transform: scale(.7);
    transform: scale(.7);
    background-position: 42.7% 20.5%;
}

.benz-container .benz-content .box .box-blue-public {
    -webkit-transform: scale(.7);
    transform: scale(.7);
    background-position: 14.3% 20.65%;
}

.benz-container .benz-content .box .box-blue-porsche {
    -webkit-transform: scale(.7);
    transform: scale(.7);
    background-position: 0.2% 20.4%;
}

.benz-container .benz-content .box .box-blue-circle {
    background-position: 25% 34.3%;
}

.benz-container .benz-content .box .box-blue-light {
    top: -1.3vw;
    left: -1.3vw;
    width: 13vw;
    height: 13vw;
    z-index: 3;
    background-position: 70.8% 33.6%;
    /*-webkit-animation:runsmall 1.5s infinite;*/
}

.benz-container .benz-content .box .trailing-red {
    background: url(https://images.imags-google.com/game/benzBMW-spirit.png) no-repeat;
    background-size: 100vw auto;
    top: -1.3vw;
    left: -1.2vw;
    width: 13vw;
    height: 13vw;
    z-index: 3;
    background-position: 70.9% 33.6%;
    /*background: red;*/
    opacity: .5;
}

.benz-container .benz-content .box {
    /** 跑马灯标选中开奖动画 start **/
}

.benz-container .benz-content .box .game-benzbmw-run-light {
    width: 20vw;
    height: 20vw;
    left: -4.2vw;
    top: -4.8vw;
    background: url(https://images.imags-google.com/game/benzBMW-inside-light.png) no-repeat;
    background-size: 251vw auto;
    -webkit-animation: runlight 1.5s forwards steps(9, start) infinite;
    z-index: 8;
}

.benz-container .benz-content .box {
    /** 跑马灯标选中开奖动画 end **/
}

.benz-container .benz-content {
    /** 红标盘面 **/
}

.benz-container .benz-content .benzbmw-abs {
    position: absolute;
    width: 34vw;
    height: 21vw;
}

.benz-container .benz-content .benzbmw-red-porsche {
    top: 24.7vw;
    left: 15.7vw;
    background-position: 23% 0%;
}

.benz-container .benz-content .benzbmw-red-bmw {
    top: 46.1vw;
    left: 15.7vw;
    background-position: 23% 49.6%;
}

.benz-container .benz-content .benzbmw-red-benz {
    top: 67.55vw;
    left: 15.7vw;
    background-position: 23% 49.6%;
}

.benz-container .benz-content .benzbmw-red-public {
    top: 89.2vw;
    left: 15.7vw;
    background-position: 23% 100%;
}

.benz-container .benz-content {
    /** 蓝标盘面 **/
}

.benz-container .benz-content .game-benzbmw-inside {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
}

.benz-container .benz-content .game-benzbmw-inside>div {
    position: absolute;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    width: 100%;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    text-align: center;
}

.benz-container .benz-content .game-benzbmw-inside>div>span {
    margin: 0 auto;
}

.benz-container .benz-content .game-benzbmw-inside .benzbmw-inside-up {
    font-size: .5em;
    top: 0;
}

.benz-container .benz-content .game-benzbmw-inside .benzbmw-inside-middle {
    -webkit-box-pack: space-evenly;
    -ms-flex-pack: space-evenly;
    justify-content: space-evenly;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    height: 13vw;
    -ms-flex-wrap: nowrap;
    flex-wrap: nowrap;
}

.benz-container .benz-content .game-benzbmw-inside .benzbmw-inside-middle>div {
    width: 100%;
    text-align: center;
}

.benz-container .benz-content .game-benzbmw-inside .benzbmw-inside-middle>div:nth-of-type(2) {
    margin-right: -4vw;
}

.benz-container .benz-content .game-benzbmw-inside .benzbmw-inside-middle>div .benzbmw-red-odds {
    margin-right: -.5vw;
    color: #742a4f;
    /*color:#96426c;*/
    text-align: right;
    font-size: .65em;
    /*-webkit-text-stroke: .5px rgba(183,96,134,.8);*/
}

.benz-container .benz-content .game-benzbmw-inside .benzbmw-inside-middle>div .benzbmw-blue-odds {
    margin-left: -0.9vw;
    color: #42437d;
    /*color:#686994;*/
    text-align: left;
    font-size: .65em;
    /*-webkit-text-stroke: .5px rgba(255,255,255,.2);*/
}

.benz-container .benz-content .game-benzbmw-inside .benzbmw-inside-middle>div .benzbmw-inside-red {
    position: relative;
    width: 12vw;
    height: 12vw;
    margin: 0 auto 0 1vw;
    opacity: 0.6;
}

.benz-container .benz-content .game-benzbmw-inside .benzbmw-inside-middle>div .benzbmw-inside-red>div {
    position: absolute;
    width: 25vw;
    height: 25vw;
    left: -8vw;
    top: -6.2vw;
    z-index: 2;
    opacity: 0;
}

.benz-container .benz-content .game-benzbmw-inside .benzbmw-inside-middle>div .benzbmw-inside-red.show {
    opacity: 1;
}

.benz-container .benz-content .game-benzbmw-inside .benzbmw-inside-middle>div .benzbmw-inside-red.show>div {
    opacity: 1;
}

.benz-container .benz-content .game-benzbmw-inside .benzbmw-inside-middle>div .benzbmw-inside-blue {
    position: relative;
    width: 12vw;
    height: 12vw;
    margin: 0 1vw 0 auto;
    -webkit-transform: scale(.7);
    transform: scale(.7);
    opacity: .6;
}

.benz-container .benz-content .game-benzbmw-inside .benzbmw-inside-middle>div .benzbmw-inside-blue>div {
    position: absolute;
    width: 25vw;
    height: 25vw;
    left: -8.5vw;
    top: -5.4vw;
    z-index: 2;
    opacity: 0;
}

.benz-container .benz-content .game-benzbmw-inside .benzbmw-inside-middle>div .benzbmw-inside-blue .benzbmw-run-small {
    background-position: -73.2vw -71vw;
    -webkit-transform: scale(1.5);
    transform: scale(1.5);
}

.benz-container .benz-content .game-benzbmw-inside .benzbmw-inside-middle>div .benzbmw-inside-blue.show {
    opacity: 1;
}

.benz-container .benz-content .game-benzbmw-inside .benzbmw-inside-middle>div .benzbmw-inside-blue.show>div {
    opacity: 1;
    -webkit-animation: runsmall 1.5s infinite;
}

.benz-container .benz-content .game-benzbmw-inside .benzbmw-inside-middle>div {
    /** 红标盘口 **/
}

.benz-container .benz-content .game-benzbmw-inside .benzbmw-inside-middle>div .inside-red-porsche {
    background-position: 5% 54.5%;
}

.benz-container .benz-content .game-benzbmw-inside .benzbmw-inside-middle>div .inside-red-bmw {
    background-position: 91% 54.5%;
}

.benz-container .benz-content .game-benzbmw-inside .benzbmw-inside-middle>div .inside-red-benz {
    background-position: 62.5% 54.5%;
}

.benz-container .benz-content .game-benzbmw-inside .benzbmw-inside-middle>div .inside-red-public {
    background-position: 33.5% 54.5%;
}

.benz-container .benz-content .game-benzbmw-inside .benzbmw-inside-middle>div {
    /** 蓝标盘口 **/
}

.benz-container .benz-content .game-benzbmw-inside .benzbmw-inside-middle>div .inside-blue-porsche {
    background-position: 5% 54.5%;
}

.benz-container .benz-content .game-benzbmw-inside .benzbmw-inside-middle>div .inside-blue-bmw {
    background-position: 91.5% 54.5%;
}

.benz-container .benz-content .game-benzbmw-inside .benzbmw-inside-middle>div .inside-blue-benz {
    background-position: 62.5% 54.5%;
}

.benz-container .benz-content .game-benzbmw-inside .benzbmw-inside-middle>div .inside-blue-public {
    background-position: 33.5% 54.5%;
}

.benz-container .benz-content .game-benzbmw-inside .benzbmw-inside-middle {
    /** 筹码展示区 **/
}

.benz-container .benz-content .game-benzbmw-inside .benzbmw-inside-middle .red-chipbox {
    position: absolute;
    left: 2vw;
    top: 0;
    width: 50%;
    height: 100%;
}

.benz-container .benz-content .game-benzbmw-inside .benzbmw-inside-middle .blue-chipbox {
    position: absolute;
    right: 2vw;
    top: 0;
    width: 50%;
    height: 100%;
}

.benz-container .benz-content .game-benzbmw-inside .benzbmw-inside-down {
    font-size: .5em;
    bottom: 0;
}

.benz-container .benz-content .game-benzbmw-inside {
    /** 盘口金额颜色 **/
}

.benz-container .benz-content .game-benzbmw-inside .benzbmw-money {
    color: rgba(215, 219, 253, 0.71765);
}

.benz-container .benz-content .game-benzbmw-inside .benzbmw-red {
    color: #b25b82;
}

.benz-container .benz-content .game-benzbmw-inside .benzbmw-blue {
    color: #7281b0;
}

.benz-container .benz-content .benzbmw-blue-porsche {
    top: 24.7vw;
    left: 49.8vw;
    background-position: 77.2% 0%;
}

.benz-container .benz-content .benzbmw-blue-porsche .benzbmw-inside-middle>div:nth-of-type(1) {
    margin-left: -7vw;
}

.benz-container .benz-content .benzbmw-blue-bmw {
    top: 46.1vw;
    left: 49.8vw;
    background-position: 77.2% 49.6%;
}

.benz-container .benz-content .benzbmw-blue-bmw .benzbmw-inside-middle>div:nth-of-type(1) {
    margin-left: -7vw;
}

.benz-container .benz-content .benzbmw-blue-benz {
    top: 67.55vw;
    left: 49.8vw;
    background-position: 77.2% 49.6%;
}

.benz-container .benz-content .benzbmw-blue-benz .benzbmw-inside-middle>div:nth-of-type(1) {
    margin-left: -7vw;
}

.benz-container .benz-content .benzbmw-blue-public {
    top: 89.2vw;
    left: 49.8vw;
    background-position: 77.2% 100%;
}

.benz-container .benz-content .benzbmw-blue-public .benzbmw-inside-middle>div:nth-of-type(1) {
    margin-left: -7vw;
}

.benz-container .benz-content .light {
    position: relative;
    border: 0.09302rem solid #fff;
}

.display {
    display: none;
}

@-webkit-keyframes benzbmwlightline {
    0% {
        opacity: 0;
    }
    50% {
        opacity: 1;
    }
    100% {
        opacity: 0;
    }
}

@keyframes benzbmwlightline {
    0% {
        opacity: 0;
    }
    50% {
        opacity: 1;
    }
    100% {
        opacity: 0;
    }
}

@-webkit-keyframes runTopBgLeft {
    0% {
        background-position: 0vw 0vw;
    }
    100% {
        background-position: -66.667vw 0vw;
    }
}

@keyframes runTopBgLeft {
    0% {
        background-position: 0vw 0vw;
    }
    100% {
        background-position: -66.667vw 0vw;
    }
}

@-webkit-keyframes runTopBgRight {
    0% {
        background-position: 0vw 0vw;
    }
    100% {
        background-position: -140vw 0vw;
    }
}

@keyframes runTopBgRight {
    0% {
        background-position: 0vw 0vw;
    }
    100% {
        background-position: -140vw 0vw;
    }
}

@-webkit-keyframes runTopBgMiddle {
    0% {
        background-position: 0vw 0vw;
    }
    100% {
        background-position: -176vw 0vw;
    }
}

@keyframes runTopBgMiddle {
    0% {
        background-position: 0vw 0vw;
    }
    100% {
        background-position: -176vw 0vw;
    }
}

@-webkit-keyframes carrun {
    0% {
        background-position: 0vw -2vw;
    }
    100% {
        background-position: -251.8vw -2vw;
    }
}

@keyframes carrun {
    0% {
        background-position: 0vw -2vw;
    }
    100% {
        background-position: -251.8vw -2vw;
    }
}

/* 保时捷专用呼吸灯 */

@-webkit-keyframes carrun-porsche {
    0% {
        background-position: 0vw -4.5vw;
    }
    100% {
        background-position: -240vw -4.5vw;
    }
}

@keyframes carrun-porsche {
    0% {
        background-position: 0vw -4.5vw;
    }
    100% {
        background-position: -240vw -4.5vw;
    }
}

@-webkit-keyframes runlight {
    0% {
        background-position: -2.6vw -2.3vw;
    }
    100% {
        background-position: -228.6vw -2.3vw;
    }
}

@keyframes runlight {
    0% {
        background-position: -2.6vw -2.3vw;
    }
    100% {
        background-position: -228.6vw -2.3vw;
    }
}

@-webkit-keyframes runsmall {
    0% {
        opacity: 0;
    }
    50% {
        opacity: 1;
    }
    100% {
        opacity: 0;
    }
}

@keyframes runsmall {
    0% {
        opacity: 0;
    }
    50% {
        opacity: 1;
    }
    100% {
        opacity: 0;
    }
}

@-webkit-keyframes trendshow {
    0% {
        opacity: 0;
    }
    20% {
        opacity: 1;
    }
    40% {
        opacity: 0;
    }
    60% {
        opacity: 1;
    }
    80% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}

@keyframes trendshow {
    0% {
        opacity: 0;
    }
    20% {
        opacity: 1;
    }
    40% {
        opacity: 0;
    }
    60% {
        opacity: 1;
    }
    80% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}

/* 奔驰宝马 end */

/** 适配不同屏幕显示 **/

/** 兼容处理开始 **/

/** 320宽 **/

@media screen and (min-width:320px) and (min-height:480px) {
    .benz-content {
        -webkit-transform: scale(.8);
        transform: scale(.8);
        bottom: 14vw;
    }
}

@media screen and (min-width:320px) and (min-height:510px) {
    .benz-content {
        -webkit-transform: scale(.9);
        transform: scale(.9);
        bottom: 9vw;
    }
}

@media screen and (min-width:320px) and (min-height:550px) {
    .benz-content {
        -webkit-transform: scale(1);
        transform: scale(1);
        bottom: 4vw;
    }
}

@media screen and (min-width:320px) and (min-height:560px) {
    .benz-content {
        -webkit-transform: scale(1);
        transform: scale(1);
        bottom: -1vw;
    }
}

@media screen and (min-width:320px) and (min-height:590px) {
    .benz-content {
        bottom: -2vw;
    }
}

@media screen and (min-width:320px) and (min-height:600px) {
    .benz-content {
        bottom: -3vw;
    }
}

@media screen and (min-width:320px) and (min-height:650px) {
    .benz-content {
        -webkit-transform: scale(1);
        transform: scale(1);
        bottom: -7vw;
    }
}

/** 360宽 **/

@media screen and (min-width:360px) and (min-height:480px) {
    .benz-content {
        -webkit-transform: scale(.7);
        transform: scale(.7);
        bottom: 21vw;
    }
}

@media screen and (min-width:360px) and (min-height:500px) {
    .benz-content {
        -webkit-transform: scale(.7);
        transform: scale(.7);
        bottom: 21vw;
    }
}

@media screen and (min-width:360px) and (min-height:510px) {
    .benz-content {
        bottom: 18vw;
    }
}

@media screen and (min-width:360px) and (min-height:530px) {
    .benz-content {
        -webkit-transform: scale(.75);
        transform: scale(.75);
        bottom: 16vw;
    }
}

@media screen and (min-width:360px) and (min-height:550px) {
    .benz-content {
        -webkit-transform: scale(.75);
        transform: scale(.75);
        bottom: 16vw;
    }
}

@media screen and (min-width:360px) and (min-height:556px) {
    .benz-content {
        -webkit-transform: scale(.75);
        transform: scale(.75);
        bottom: 13vw;
    }
}

@media screen and (min-width:360px) and (min-height:560px) {
    .benz-content {
        -webkit-transform: scale(.8);
        transform: scale(.8);
        bottom: 13vw;
    }
}

@media screen and (min-width:360px) and (min-height:580px) {
    .benz-content {
        -webkit-transform: scale(.85);
        transform: scale(.85);
        bottom: 10vw;
    }
}

@media screen and (min-width:360px) and (min-height:590px) {
    .benz-content {
        -webkit-transform: scale(.9);
        transform: scale(.9);
        bottom: 7vw;
    }
}

@media screen and (min-width:360px) and (min-height:600px) {
    .benz-content {
        -webkit-transform: scale(.9);
        transform: scale(.9);
        bottom: 7vw;
    }
}

@media screen and (min-width:360px) and (min-height:620px) {
    .benz-content {
        -webkit-transform: scale(1);
        transform: scale(1);
        bottom: 2vw;
    }
}

@media screen and (min-width:360px) and (min-height:650px) {
    .benz-content {
        -webkit-transform: scale(1);
        transform: scale(1);
        bottom: 0vw;
    }
}

@media screen and (min-width:360px) and (min-height:670px) {
    .benz-content {
        -webkit-transform: scale(1);
        transform: scale(1);
        bottom: -3vw;
    }
}

@media screen and (min-width:360px) and (min-height:690px) {
    .benz-content {
        -webkit-transform: scale(1);
        transform: scale(1);
        bottom: -4vw;
    }
}

@media screen and (min-width:360px) and (min-height:698px) {
    .benz-content {
        -webkit-transform: scale(1);
        transform: scale(1);
        bottom: -5vw;
    }
}

@media screen and (min-width:360px) and (min-height:700px) {
    .benz-content {
        -webkit-transform: scale(1);
        transform: scale(1);
        bottom: -5.5vw;
    }
}

@media screen and (min-width:360px) and (min-height:720px) {
    .benz-content {
        -webkit-transform: scale(1);
        transform: scale(1);
        bottom: -7vw;
    }
}

@media screen and (min-width:360px) and (min-height:740px) {
    .benz-content {
        -webkit-transform: scale(1);
        transform: scale(1);
        bottom: -10vw;
    }
}

@media screen and (min-width:360px) and (min-height:750px) {
    .benz-content {
        -webkit-transform: scale(1);
        transform: scale(1);
        bottom: -14vw;
    }
}

/** 375宽 **/

@media screen and (min-width:375px) and (min-height:480px) {
    .benz-content {
        -webkit-transform: scale(.65);
        transform: scale(.65);
        bottom: 25vw;
    }
}

@media screen and (min-width:375px) and (min-height:490px) {
    .benz-content {
        -webkit-transform: scale(.7);
        transform: scale(.7);
        bottom: 22vw;
    }
}

@media screen and (min-width:375px) and (min-height:500px) {
    .benz-content {
        -webkit-transform: scale(.7);
        transform: scale(.7);
        bottom: 22vw;
    }
}

@media screen and (min-width:375px) and (min-height:520px) {
    .benz-content {
        -webkit-transform: scale(.75);
        transform: scale(.75);
        bottom: 19vw;
    }
}

@media screen and (min-width:375px) and (min-height:540px) {
    .benz-content {
        -webkit-transform: scale(.75);
        transform: scale(.75);
        bottom: 18vw;
    }
}

@media screen and (min-width:375px) and (min-height:550px) {
    .benz-content {
        -webkit-transform: scale(.8);
        transform: scale(.8);
        bottom: 15vw;
    }
}

@media screen and (min-width:375px) and (min-height:570px) {
    .benz-content {
        -webkit-transform: scale(.8);
        transform: scale(.8);
        bottom: 14vw;
    }
}

@media screen and (min-width:375px) and (min-height:590px) {
    .benz-content {
        -webkit-transform: scale(.85);
        transform: scale(.85);
        bottom: 12vw;
    }
}

@media screen and (min-width:375px) and (min-height:600px) {
    .benz-content {
        -webkit-transform: scale(.9);
        transform: scale(.9);
        bottom: 9vw;
    }
}

@media screen and (min-width:375px) and (min-height:620px) {
    .benz-content {
        -webkit-transform: scale(.9);
        transform: scale(.9);
        bottom: 8vw;
    }
}

@media screen and (min-width:375px) and (min-height:630px) {
    .benz-content {
        -webkit-transform: scale(.95);
        transform: scale(.95);
        bottom: 5vw;
    }
}

@media screen and (min-width:375px) and (min-height:650px) {
    .benz-content {
        -webkit-transform: scale(1);
        transform: scale(1);
        bottom: 2vw;
    }
}

@media screen and (min-width:375px) and (min-height:660px) {
    .benz-content {
        -webkit-transform: scale(1);
        transform: scale(1);
        bottom: 1vw;
    }
}

@media screen and (min-width:375px) and (min-height:670px) {
    .benz-content {
        -webkit-transform: scale(1);
        transform: scale(1);
        bottom: 0vw;
    }
}

@media screen and (min-width:375px) and (min-height:700px) {
    .benz-content {
        -webkit-transform: scale(1);
        transform: scale(1);
        bottom: -2vw;
    }
}

@media screen and (min-width:375px) and (min-height:720px) {
    .benz-content {
        -webkit-transform: scale(1);
        transform: scale(1);
        bottom: -4vw;
    }
}

@media screen and (min-width:375px) and (min-height:740px) {
    .benz-content {
        -webkit-transform: scale(1);
        transform: scale(1);
        bottom: -7vw;
    }
}

@media screen and (min-width:375px) and (min-height:750px) {
    .benz-content {
        -webkit-transform: scale(1);
        transform: scale(1);
        bottom: -5vw;
    }
}

@media screen and (min-width:375px) and (min-height:800px) {
    .benz-content {
        -webkit-transform: scale(1);
        transform: scale(1);
        bottom: -15vw;
    }
}

/* 393宽 */

@media screen and (min-width:393px) and (min-height:500px) {
    .benz-content {
        -webkit-transform: scale(.65);
        transform: scale(.65);
        bottom: 25vw;
    }
}

@media screen and (min-width:393px) and (min-height:520px) {
    .benz-content {
        -webkit-transform: scale(.65);
        transform: scale(.65);
        bottom: 23vw;
    }
}

@media screen and (min-width:393px) and (min-height:540px) {
    .benz-content {
        -webkit-transform: scale(.7);
        transform: scale(.7);
        bottom: 21vw;
    }
}

@media screen and (min-width:393px) and (min-height:560px) {
    .benz-content {
        -webkit-transform: scale(.73);
        transform: scale(.73);
        bottom: 19vw;
    }
}

@media screen and (min-width:393px) and (min-height:580px) {
    .benz-content {
        -webkit-transform: scale(.76);
        transform: scale(.76);
        bottom: 17vw;
    }
}

@media screen and (min-width:393px) and (min-height:590px) {
    .benz-content {
        -webkit-transform: scale(.78);
        transform: scale(.78);
        bottom: 16vw;
    }
}

@media screen and (min-width:393px) and (min-height:600px) {
    .benz-content {
        -webkit-transform: scale(.8);
        transform: scale(.8);
        bottom: 14vw;
    }
}

@media screen and (min-width:393px) and (min-height:620px) {
    .benz-content {
        -webkit-transform: scale(.85);
        transform: scale(.85);
        bottom: 11vw;
    }
}

@media screen and (min-width:393px) and (min-height:640px) {
    .benz-content {
        -webkit-transform: scale(.88);
        transform: scale(.88);
        bottom: 9vw;
    }
}

@media screen and (min-width:393px) and (min-height:660px) {
    .benz-content {
        -webkit-transform: scale(.9);
        transform: scale(.9);
        bottom: 7vw;
    }
}

@media screen and (min-width:393px) and (min-height:670px) {
    .benz-content {
        -webkit-transform: scale(.9);
        transform: scale(.9);
        bottom: 5vw;
    }
}

@media screen and (min-width:393px) and (min-height:680px) {
    .benz-content {
        -webkit-transform: scale(.93);
        transform: scale(.93);
        bottom: 5vw;
    }
}

@media screen and (min-width:393px) and (min-height:690px) {
    .benz-content {
        -webkit-transform: scale(.96);
        transform: scale(.96);
        bottom: 2vw;
    }
}

@media screen and (min-width:393px) and (min-height:700px) {
    .benz-content {
        -webkit-transform: scale(1);
        transform: scale(1);
        bottom: 1vw;
    }
}

@media screen and (min-width:393px) and (min-height:720px) {
    .benz-content {
        -webkit-transform: scale(1);
        transform: scale(1);
        bottom: -1vw;
    }
}

@media screen and (min-width:393px) and (min-height:720px) {
    .benz-content {
        -webkit-transform: scale(1);
        transform: scale(1);
        bottom: -3vw;
    }
}

@media screen and (min-width:393px) and (min-height:750px) {
    .benz-content {
        -webkit-transform: scale(1);
        transform: scale(1);
        bottom: -6vw;
    }
}

/** 411宽 **/

@media screen and (min-width:411px) and (min-height:500px) {
    .benz-content {
        -webkit-transform: scale(.6);
        transform: scale(.6);
        bottom: 27vw;
    }
}

@media screen and (min-width:411px) and (min-height:530px) {
    .benz-content {
        -webkit-transform: scale(.65);
        transform: scale(.65);
        bottom: 25vw;
    }
}

@media screen and (min-width:411px) and (min-height:550px) {
    .benz-content {
        -webkit-transform: scale(.67);
        transform: scale(.67);
        bottom: 23vw;
    }
}

@media screen and (min-width:411px) and (min-height:570px) {
    .benz-content {
        -webkit-transform: scale(.7);
        transform: scale(.7);
        bottom: 21vw;
    }
}

@media screen and (min-width:411px) and (min-height:570px) {
    .benz-content {
        -webkit-transform: scale(.75);
        transform: scale(.75);
        bottom: 18vw;
    }
}

@media screen and (min-width:411px) and (min-height:620px) {
    .benz-content {
        -webkit-transform: scale(.8);
        transform: scale(.8);
        bottom: 14vw;
    }
}

@media screen and (min-width:411px) and (min-height:650px) {
    .benz-content {
        -webkit-transform: scale(.85);
        transform: scale(.85);
        bottom: 11vw;
    }
}

@media screen and (min-width:411px) and (min-height:670px) {
    .benz-content {
        -webkit-transform: scale(.9);
        transform: scale(.9);
        bottom: 8vw;
    }
}

@media screen and (min-width:411px) and (min-height:690px) {
    .benz-content {
        -webkit-transform: scale(.95);
        transform: scale(.95);
        bottom: 5vw;
    }
}

@media screen and (min-width:411px) and (min-height:720px) {
    .benz-content {
        -webkit-transform: scale(1);
        transform: scale(1);
        bottom: 2vw;
    }
}

@media screen and (min-width:411px) and (min-height:730px) {
    .benz-content {
        -webkit-transform: scale(1);
        transform: scale(1);
        bottom: 1vw;
    }
}

@media screen and (min-width:411px) and (min-height:740px) {
    .benz-content {
        -webkit-transform: scale(1);
        transform: scale(1);
        bottom: 0vw;
    }
}

@media screen and (min-width:411px) and (min-height:760px) {
    .benz-content {
        -webkit-transform: scale(1);
        transform: scale(1);
        bottom: -2vw;
    }
}

@media screen and (min-width:411px) and (min-height:800px) {
    .benz-content {
        -webkit-transform: scale(1);
        transform: scale(1);
        bottom: -8vw;
    }
}

@media screen and (min-width:411px) and (min-height:850px) {
    .benz-content {
        -webkit-transform: scale(1);
        transform: scale(1);
        bottom: -12vw;
    }
}

/** 600 **/

@media screen and (min-width:600px) and (min-height:800px) {
    .benz-content {
        -webkit-transform: scale(.7);
        transform: scale(.7);
        bottom: 22vw;
    }
}

@media screen and (min-width:600px) and (min-height:850px) {
    .benz-content {
        -webkit-transform: scale(.75);
        transform: scale(.75);
        bottom: 18vw;
    }
}

@media screen and (min-width:600px) and (min-height:900px) {
    .benz-content {
        -webkit-transform: scale(.8);
        transform: scale(.8);
        bottom: 14vw;
    }
}

@media screen and (min-width:600px) and (min-height:950px) {
    .benz-content {
        -webkit-transform: scale(.85);
        transform: scale(.85);
        bottom: 11vw;
    }
}

@media screen and (min-width:600px) and (min-height:1000px) {
    .benz-content {
        -webkit-transform: scale(.9);
        transform: scale(.9);
        bottom: 7vw;
    }
}

@media screen and (min-width:600px) and (min-height:1050px) {
    .benz-content {
        -webkit-transform: scale(1);
        transform: scale(1);
        bottom: 2vw;
    }
}

@media screen and (min-width:600px) and (min-height:1100px) {
    .benz-content {
        -webkit-transform: scale(1);
        transform: scale(1);
        bottom: -2vw;
    }
}

/** 768 **/

@media screen and (min-width:768px) and (min-height:900px) {
    .benz-content {
        -webkit-transform: scale(.6);
        transform: scale(.6);
        bottom: 28vw;
    }
}

@media screen and (min-width:768px) and (min-height:970px) {
    .benz-content {
        -webkit-transform: scale(.6);
        transform: scale(.6);
        bottom: 26vw;
    }
}

@media screen and (min-width:768px) and (min-height:990px) {
    .benz-content {
        -webkit-transform: scale(.65);
        transform: scale(.65);
        bottom: 25vw;
    }
}

@media screen and (min-width:768px) and (min-height:1050px) {
    .benz-content {
        -webkit-transform: scale(.7);
        transform: scale(.7);
        bottom: 21vw;
    }
}

@media screen and (min-width:768px) and (min-height:1100px) {
    .benz-content {
        -webkit-transform: scale(.75);
        transform: scale(.75);
        bottom: 18vw;
    }
}

@media screen and (min-width:768px) and (min-height:1200px) {
    .benz-content {
        -webkit-transform: scale(.85);
        transform: scale(.85);
        bottom: 11vw;
    }
}

@media screen and (min-width:768px) and (min-height:1300px) {
    .benz-content {
        -webkit-transform: scale(.95);
        transform: scale(.95);
        bottom: 4vw;
    }
}

/** 800 **/

@media screen and (min-width:800px) and (min-height:1000px) {
    .benz-content {
        -webkit-transform: scale(.65);
        transform: scale(.65);
        bottom: 25vw;
    }
}

@media screen and (min-width:800px) and (min-height:1050px) {
    .benz-content {
        -webkit-transform: scale(.65);
        transform: scale(.65);
        bottom: 24vw;
    }
}

@media screen and (min-width:800px) and (min-height:1100px) {
    .benz-content {
        -webkit-transform: scale(.7);
        transform: scale(.7);
        bottom: 21vw;
    }
}

@media screen and (min-width:800px) and (min-height:1150px) {
    .benz-content {
        -webkit-transform: scale(.75);
        transform: scale(.75);
        bottom: 17vw;
    }
}

@media screen and (min-width:800px) and (min-height:1200px) {
    .benz-content {
        -webkit-transform: scale(.8);
        transform: scale(.8);
        bottom: 14vw;
    }
}

@media screen and (min-width:800px) and (min-height:1250px) {
    .benz-content {
        -webkit-transform: scale(.85);
        transform: scale(.85);
        bottom: 11vw;
    }
}

@media screen and (min-width:800px) and (min-height:1300px) {
    .benz-content {
        -webkit-transform: scale(.95);
        transform: scale(.95);
        bottom: 6vw;
    }
}

@media screen and (min-width:800px) and (min-height:1350px) {
    .benz-content {
        -webkit-transform: scale(.95);
        transform: scale(.95);
        bottom: 5vw;
    }
}

@media screen and (min-width:800px) and (min-height:1400px) {
    .benz-content {
        -webkit-transform: scale(.95);
        transform: scale(.95);
        bottom: 3vw;
    }
}

@media screen and (min-width:800px) and (min-height:1500px) {
    .benz-content {
        -webkit-transform: scale(1);
        transform: scale(1);
        bottom: -2vw;
    }
}

@media screen and (min-width:800px) and (min-height:1600px) {
    .benz-content {
        -webkit-transform: scale(1);
        transform: scale(1);
        bottom: -8vw;
    }
}

/** 1024 */

@media screen and (min-width:1024px) and (min-height:1200px) {
    .benz-content {
        -webkit-transform: scale(.6);
        transform: scale(.6);
        bottom: 28vw;
    }
}

@media screen and (min-width:1024px) and (min-height:1300px) {
    .benz-content {
        -webkit-transform: scale(.65);
        transform: scale(.65);
        bottom: 25vw;
    }
}

@media screen and (min-width:1024px) and (min-height:1360px) {
    .benz-content {
        -webkit-transform: scale(.65);
        transform: scale(.65);
        bottom: 23vw;
    }
}

@media screen and (min-width:1024px) and (min-height:1400px) {
    .benz-content {
        -webkit-transform: scale(.7);
        transform: scale(.7);
        bottom: 21vw;
    }
}

@media screen and (min-width:1024px) and (min-height:1500px) {
    .benz-content {
        -webkit-transform: scale(.75);
        transform: scale(.75);
        bottom: 17vw;
    }
}

@media screen and (min-width:1024px) and (min-height:1600px) {
    .benz-content {
        -webkit-transform: scale(.8);
        transform: scale(.8);
        bottom: 12vw;
    }
}

#benzCar .dealer {
    width: 100vw;
    height: 40vw;
    z-index: 2;
}

.benz-container .benz-content #content1,
.benz-container .benz-content #content4 {
    width: 43% !important;
    left: 6vw !important;
}

.benz-container .benz-content #content5,
.benz-container .benz-content #content8 {
    width: 43% !important;
    right: 6vw !important;
}

.benz-container {
    padding: 0;
    height: 90%;
}
</style>