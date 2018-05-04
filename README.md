<h1 align="center">Vue.js Incrememnetal Game Tutorial</h1>
<p align="center"><em>Insert something witty here...</em></p>

<p align="center">
   <a href="LICENSE"><img src="https://img.shields.io/github/license/photogabble/parcel-vue-js-zero-config-project-skeleton.svg" alt="License"></a>
</p>

This is the source code for the Vue.js Incrememnetal Game Tutorial series on PhotoGabble.

## Part One
_Published May 3rd 2018_: [Demo](http://builds.photogabble.co.uk/vuejs-incremental-game-tutorial-p1/) | [Tutorial](https://www.photogabble.co.uk/blog/tutorials/build-an-incremental-web-game-with-vue-js/) | [Branch](https://github.com/photogabble/vuejs-incremental-game-tutorial/tree/tutorial-part-1) | [PR](https://github.com/photogabble/vuejs-incremental-game-tutorial/pull/1)

By the end of the first part the game is ugly but "playable" and incorporates the majority of the mechanics that the original _BASIC Space Mines_ game had. However there is a lot missing for example if you stop selling ore to buy food then you will eventually run out of food and colonists and in its present state you can only have one mine.

![I cant get no satisfaction...](https://www.photogabble.co.uk/img/build-an-incremental-web-game-with-vue-js-3.png "I cant get no satisfaction...")

## Part Two
_Unpublished_: Demo | Tutorial | [Branch](https://github.com/photogabble/vuejs-incremental-game-tutorial/tree/tutorial-part-2) | PR

In this part we expand upon the concept of _colonists_ beyond them simply being a number and begin taking into consideration their experience in mining as a factor in how much they can mine. We also add a reusable data structure for buildings as a precursor to adding more of them later on.

## Part Three
_Unpublished_: Demo | Tutorial | Branch | PR

In this part we work on adding three new buildings: the first of our habitation buildings, the science Lab and a greenhouse. As well as the beginning of the tech tree for research (this includes researching the green house). We will also begin differentiating between colonists and crew, crew can be hired/fired by the player from a random pool of candidates (including colonists) while colonists are transient in nature and will come and go with the passing of time (depending upon overal satisfaction.) Because crew can't yet quit if you run out of food they will simply starve (should we add a death mechanic this early?)

## Part Four
_Unpublished_: Demo | Tutorial | Branch | PR

In this part we work on the levelling up of buildings and add the Command Center and Silo buildings. With each level the production bonus of the building will increase as will the newly added resource capacity.

## Part Five
_Unpublished_: Demo | Tutorial | Branch | PR

Now that we have a largely working game its about time that it began looking pretty. In this part we work on the various user interfaces that the player will use to interact with the game and begin to define the game world as a concept.

## Part Six
_Unpublished_: Demo | Tutorial | Branch | PR

It's about time we added inventory to the colonists/crew in the future we will use these slots to suit up our crew with items that provide bonuses to their various activities (think lab coat, improved mining lance, etc) but for now we shall focus on food stuffs. While we are at it we will also expand upon the concept of food in our game beyond it simply being a number and add various different food-stuff items each able to sustain the hunger needs of our colonists by varying amounts and some will even be manufacturable in the future. At the end of part six our colonists will be able to hold up to three food stuffs in their inventory and each food stuff will upon consumption reduce their hunger by a certain percentage.

## Part Seven
_Unpublished_: Demo | Tutorial | Branch | PR

Thanks to part six we now have different food stuffs with which to feed our population. Building upon that in this part, part seven, we begin by adding the ability to research improved food stuffs so that our greenhouse can manufacture it... from ore. 

## Part Eight
_Unpublished_: Demo | Tutorial | Branch | PR

Now that we have enough game mechanics written to be able to build a self suficient base we now need to reduce the amount of micro-management that the player has to participate in. We dop this by adding "mainframe automation" to the research tech-tree and from that the ability for the player to define automated actions built upon a stack of `if-else` instructions.
