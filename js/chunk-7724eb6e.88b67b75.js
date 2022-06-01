(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7724eb6e"],{2320:function(e,n,t){},"41ce":function(e,n,t){"use strict";t.r(n);var r=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"learn"},[t("LearnComponent",{attrs:{decks:e.decks,numberOfSelectedDecks:e.numberOfSelectedDecks,learningSession:e.learningSession,cardLimit:e.cardLimit}})],1)},i=[],a=(t("a9e3"),t("d4ec")),s=t("262e"),o=t("2caf"),c=t("9ab4"),l=t("2b0e"),u=t("2fe1"),d=function(){var e=this,n=e.$createElement,t=e._self._c||n;return e.numberOfSelectedDecks>0?t("div",{staticClass:"learn"},[t("div",{staticClass:"max-height"},[e._v(e._s(e.curLearningElement.card.q))]),t("div",{staticClass:"max-height"},[e.curLearningElement.showAnswer?t("span",[e._v(e._s(e.curLearningElement.card.a))]):t("v-btn",{on:{click:e.revealAnswer}},[e._v("Reveal Answer")])],1),e.curLearningElement.showAnswer?t("Rating",{ref:"rating",attrs:{numberOfStars:e.numberOfStarsInRating},on:{rated:e.onRating}}):e._e(),t("v-card-actions",[t("v-btn",{attrs:{text:"",disabled:0===e.learningSessionManager.learningSession.currentElementIndex,color:"grey lighten-1"},on:{click:e.moveToPrev}},[e._v("Previous")]),t("v-spacer"),t("v-btn",{attrs:{text:"",color:e.buttonNext.color},on:{click:e.moveToNext}},[e._v(e._s(e.buttonNext.text))])],1)],1):e._e()},g=[],h=(t("4de4"),t("ac1f"),t("5319"),t("b85c")),v=t("bee2"),f=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"rating"},e._l(e.numberOfStars,(function(n){return t("div",{key:n,staticClass:"star-wrapper"},[t("span",{staticClass:"overline grey--text text--darken-1",class:{invisible:1!==n&&n!==e.numberOfStars}},[e._v(e._s(1===n?"Hard":"Easy"))]),t("svg",{staticClass:"star",class:{filled:e.numberOfSelectedStar>=n},attrs:{viewBox:"0 0 100 100"}},[t("polygon",{attrs:{points:"50,10 39.4,35.4 10.1,37 32.9,55.6 25.3,84 50,68, 74.7,84 67.1,55.6 89.9,37 60.6,35.4"},on:{click:function(t){return e.onClickStar(n)}}})])])})),0)},m=[],S=l["a"].extend({props:{numberOfStars:Number}}),b=function(e){Object(s["a"])(t,e);var n=Object(o["a"])(t);function t(){var e;return Object(a["a"])(this,t),e=n.apply(this,arguments),e.numberOfSelectedStar=0,e}return Object(v["a"])(t,[{key:"onClickStar",value:function(e){this.numberOfSelectedStar=e,this.$emit("rated",e)}},{key:"setRating",value:function(e){this.numberOfSelectedStar=e,this.$emit("rated",e,!0)}}]),t}(S);b=Object(c["a"])([u["a"]],b);var k=b,O=k,E=(t("6eaf"),t("2877")),p=Object(E["a"])(O,f,m,!1,null,"9d3d01fc",null),I=p.exports,y=t("ebe2"),C=(t("7db0"),t("4160"),t("13d5"),t("a434"),t("159b"),(new Date).getTime());function L(e){var n,t=80;if(void 0===e.r||0===e.r.length)n=t;else{var r=e.r.reduce((function(e,n){return n.t>e.t?n:e})),i=(C-r.t)/864e5,a=r.r-i;n=Math.max(0,100-a)||1}return n}var x=function(){function e(n){var t=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};Object(a["a"])(this,e),this.decks=[],this.numberOfRecentCardsToIgnoreWhenSelectingNextCard={},this.cardsToSelectFrom=[],this.learningSession={},this.decks=n,this.numberOfRecentCardsToIgnoreWhenSelectingNextCard=r,this.cardsToSelectFrom=[],this.decks.forEach((function(e){e.cards.forEach((function(n){t.cardsToSelectFrom.push({deckId:e.id,cardId:n.id,showAnswer:!1,rating:void 0,card:void 0,weight:L(n)})}))})),this.learningSession={elements:[],currentElementIndex:0},this.injectNewCard()}return Object(v["a"])(e,[{key:"injectNewCard",value:function(){if(0===this.cardsToSelectFrom.length)return!1;var e=this.getRandomCardIndex();for(var n in this.learningSession.elements.push(this.cardsToSelectFrom[e]),this.cardsToSelectFrom.splice(e,1),this.numberOfRecentCardsToIgnoreWhenSelectingNextCard){var t=this.learningSession.elements.length-(this.numberOfRecentCardsToIgnoreWhenSelectingNextCard[Number(n)]+1);if(t>=0){var r,i=this.learningSession.elements[t];(null===(r=i.rating)||void 0===r?void 0:r.r)===Number(n)&&this.cardsToSelectFrom.push({deckId:i.deckId,cardId:i.cardId})}}return!0}},{key:"getRandomCardIndex",value:function(){for(var e=this.cardsToSelectFrom.reduce((function(e,n){return e+(n.weight||0)}),0),n=Math.random()*e,t=0,r=0;r<this.cardsToSelectFrom.length;r++)if(t+=this.cardsToSelectFrom[r].weight||0,t>n)return r;return Math.floor(Math.random()*this.cardsToSelectFrom.length)}},{key:"getCurrentLearningSessionElementWithCardDetails",value:function(){var e,n=this.learningSession.elements[this.learningSession.currentElementIndex];return n.card=null===(e=this.decks.find((function(e){return e.id===n.deckId})))||void 0===e?void 0:e.cards.find((function(e){return e.id===n.cardId})),n}},{key:"moveToNextLearningSessionElement",value:function(){(this.learningSession.currentElementIndex!==this.learningSession.elements.length-1||this.injectNewCard())&&this.learningSession.currentElementIndex++}},{key:"moveToPrevLearningSessionElement",value:function(){this.learningSession.currentElementIndex>0&&this.learningSession.currentElementIndex--}},{key:"revealAnswerForCurrentLearningSessionElement",value:function(){var e=this.learningSession.elements[this.learningSession.currentElementIndex];e.showAnswer=!0}},{key:"saveRatingForCurrentLearningSessionElement",value:function(e){var n,t=this.learningSession.elements[this.learningSession.currentElementIndex],r=(new Date).getTime(),i=!1,a=this.decks.find((function(e){return e.id===t.deckId})),s=null===a||void 0===a?void 0:a.cards.find((function(e){return e.id===t.cardId}));if(null===(n=t.rating)||void 0===n?void 0:n.t){var o,c=null===s||void 0===s||null===(o=s.r)||void 0===o?void 0:o.find((function(e){var n;return e.t===(null===(n=t.rating)||void 0===n?void 0:n.t)}));c&&(c.t=r,c.r=e,i=!0)}else s&&(Array.isArray(null===s||void 0===s?void 0:s.r)||(s.r=[]),s.r.push({t:r,r:e}));return t.rating={t:r,r:e},Boolean(i)}}]),e}(),T=function(e){Object(s["a"])(t,e);var n=Object(o["a"])(t);function t(e){var r;return Object(a["a"])(this,t),r=n.call(this,e.decks,e.numberOfRecentCardsToIgnoreWhenSelectingNextCard),r.cardsToSelectFrom=e.cardsToSelectFrom,r.learningSession=e.learningSession,r}return t}(x),R=t("8276");function N(e,n,t){var r={title:"Finish Learning?",message:"You just finished your learning session. Do you want to finish and go to the deck selection?",barChart:{bars:n},buttons:[{name:"Review Cards",color:"grey"},{name:"Finish",color:"indigo",callback:function(){e.$eventHub.$emit(y["a"].QUIT_LEARNING,y["b"].NO_MORE_CARDS),Object(R["a"])(),t()}}]};e.$eventHub.$emit(y["a"].SHOW_CUSTOM_DIALOG,r)}function _(e,n){e.$eventHub.$emit("showCustomDialog",{title:"Quit Learning?",message:"Do you really want to quit learning? Nevertheless, your progress is saved.",barChart:{bars:n},buttons:[{name:"Cancel",color:"grey"},{name:"Quit",color:"orange darken-1",callback:function(){e.$eventHub.$emit(y["a"].QUIT_LEARNING,y["b"].USER_ACTION),Object(R["a"])()}}]})}var F=l["a"].extend({props:{decks:{type:Array},numberOfSelectedDecks:Number,cardLimit:String}}),w=function(e){Object(s["a"])(t,e);var n=Object(o["a"])(t);function t(){var e;return Object(a["a"])(this,t),e=n.apply(this,arguments),e.numberOfStarsInRating=5,e.learningSessionManager=new x([]),e.isLearningSessionFinishedAndComponentWillBeDestroyedSoon=!1,e.curLearningElement={deckId:0,cardId:0,showAnswer:!1,rating:{},card:{id:0,q:"",a:""}},e}return Object(v["a"])(t,[{key:"created",value:function(){var e=this;this.isLearningSessionFinishedAndComponentWillBeDestroyedSoon=!1,this.$eventHub.$on(y["a"].SWIPE_LEFT_IN_LEARN,(function(){e.moveToNext()})),this.$eventHub.$on(y["a"].SWIPE_RIGHT_IN_LEARN,(function(){e.moveToPrev()})),this.$eventHub.$on(y["a"].PREPARE_QUIT_LEARNING,(function(){e.quitLearning()}))}},{key:"destroyed",value:function(){this.$eventHub.$off(y["a"].SWIPE_LEFT_IN_LEARN),this.$eventHub.$off(y["a"].SWIPE_RIGHT_IN_LEARN),this.$eventHub.$off(y["a"].PREPARE_QUIT_LEARNING)}},{key:"updateCurLearningElement",value:function(){this.isLearningSessionFinishedAndComponentWillBeDestroyedSoon||(this.curLearningElement=this.learningSessionManager.getCurrentLearningSessionElementWithCardDetails(),this.updateRatingForCurrentLearningElement(),Object(R["c"])(this.learningSessionManager))}},{key:"updateRatingForCurrentLearningElement",value:function(){var e,n=this,t=0;void 0!==(null===(e=this.curLearningElement.rating)||void 0===e?void 0:e.r)&&(t=this.mapRatingFrom100ToStars(this.curLearningElement.rating.r)),this.$nextTick((function(){n.$refs.rating&&n.$refs.rating.setRating(t)}))}},{key:"beforeMount",value:function(){var e=Object(R["b"])();if(e)this.learningSessionManager=new T(e);else{if(0===this.numberOfSelectedDecks)return void this.$router.replace("/");this.learningSessionManager=new x(this.decks.filter((function(e){return e.selected})))}this.updateCurLearningElement()}},{key:"checkIfCardIsEndOfSession",value:function(){var e=this.learningSessionManager.learningSession.currentElementIndex===this.learningSessionManager.learningSession.elements.length-1&&0===this.learningSessionManager.cardsToSelectFrom.length||"0"!==this.cardLimit&&this.learningSessionManager.learningSession.currentElementIndex===parseInt(this.cardLimit)-1;return e}},{key:"moveToNext",value:function(){this.checkIfCardIsEndOfSession()&&this.finishSession(),this.learningSessionManager.moveToNextLearningSessionElement()}},{key:"moveToPrev",value:function(){this.learningSessionManager.moveToPrevLearningSessionElement()}},{key:"revealAnswer",value:function(){this.learningSessionManager.revealAnswerForCurrentLearningSessionElement()}},{key:"onRating",value:function(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(!n){var t=this.mapRatingFromStarsTo100(e);this.learningSessionManager.saveRatingForCurrentLearningSessionElement(t),Object(R["c"])(this.learningSessionManager)}}},{key:"mapRatingFromStarsTo100",value:function(e){return 100*(e-1)/(this.numberOfStarsInRating-1)}},{key:"mapRatingFrom100ToStars",value:function(e){return e*(this.numberOfStarsInRating-1)/100+1}},{key:"finishSession",value:function(){var e=this;N(this,this.getBarsForFinishLearningDialog(),(function(){e.isLearningSessionFinishedAndComponentWillBeDestroyedSoon=!0}))}},{key:"getBarsForFinishLearningDialog",value:function(){for(var e=[],n=1;n<=this.numberOfStarsInRating;n++)e.push({name:"".concat(n),value:0});var t,r=Object(h["a"])(this.learningSessionManager.learningSession.elements);try{for(r.s();!(t=r.n()).done;){var i,a=t.value;void 0!==(null===(i=a.rating)||void 0===i?void 0:i.r)&&(e[this.mapRatingFrom100ToStars(a.rating.r)-1].value+=1)}}catch(s){r.e(s)}finally{r.f()}return e}},{key:"quitLearning",value:function(){_(this,this.getBarsForFinishLearningDialog())}},{key:"updateVerticalCentering",value:function(){var e,n=Object(h["a"])(document.getElementsByClassName("max-height"));try{for(n.s();!(e=n.n()).done;){var t=e.value;t.scrollHeight>t.clientHeight?t.classList.remove("flex-center"):t.classList.add("flex-center")}}catch(r){n.e(r)}finally{n.f()}}},{key:"mounted",value:function(){this.updateVerticalCentering()}},{key:"updated",value:function(){this.updateVerticalCentering(),this.updateCurLearningElement()}},{key:"buttonNext",get:function(){return this.checkIfCardIsEndOfSession()?{text:"Finish",color:"indigo lighten-1"}:{text:"Next",color:"grey lighten-1"}}}]),t}(F);w=Object(c["a"])([Object(u["a"])({components:{Rating:I}})],w);var j=w,A=j,$=(t("f040"),t("6544")),M=t.n($),D=t("8336"),H=t("99d9"),W=t("2fa4"),P=Object(E["a"])(A,d,g,!1,null,"7b6129e6",null),B=P.exports;M()(P,{VBtn:D["a"],VCardActions:H["a"],VSpacer:W["a"]});var G=l["a"].extend({props:{decks:{type:Array},learningSession:{type:Object},numberOfSelectedDecks:Number,cardLimit:String}}),Q=function(e){Object(s["a"])(t,e);var n=Object(o["a"])(t);function t(){return Object(a["a"])(this,t),n.apply(this,arguments)}return t}(G);Q=Object(c["a"])([Object(u["a"])({components:{LearnComponent:B}})],Q);var U=Q,V=U,q=(t("991f"),Object(E["a"])(V,r,i,!1,null,"6cc4e3a0",null));n["default"]=q.exports},"6eaf":function(e,n,t){"use strict";var r=t("2320"),i=t.n(r);i.a},"991f":function(e,n,t){"use strict";var r=t("ed09"),i=t.n(r);i.a},a47c:function(e,n,t){},ed09:function(e,n,t){},f040:function(e,n,t){"use strict";var r=t("a47c"),i=t.n(r);i.a}}]);
//# sourceMappingURL=chunk-7724eb6e.88b67b75.js.map