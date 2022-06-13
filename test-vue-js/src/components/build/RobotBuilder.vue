<template>
  <div>
    <div class="top-row">
      <div class="top part">
        <img v-bind:src="parts.heads[indexHead].src" title="head" alt=""/>
        <button v-on:click="selectPreviousHead()" class="prev-selector">&#9668;</button>
        <button v-on:click="selectNextHead()" class="next-selector">&#9658;</button>
      </div>
    </div>
    <div class="middle-row">
      <div class="left part">
        <img v-bind:src="parts.arms[indexArms].src" title="left arm" alt=""/>
        <button v-on:click="selectPreviousArm()" class="prev-selector">&#9650;</button>
        <button v-on:click="selectNextArm()" class="next-selector">&#9660;</button>
      </div>
      <div class="center part">
        <img v-bind:src="parts.torsos[indexTorso].src" title="left arm" alt=""/>
        <button v-on:click="selectPreviousTorso()" class="prev-selector">&#9668;</button>
        <button v-on:click="selectNextTorso()" class="next-selector">&#9658;</button>
      </div>
      <div class="right part">
        <img v-bind:src="parts.arms[indexArms].src" title="left arm" alt=""/>
        <button v-on:click="selectPreviousArm()" class="prev-selector">&#9650;</button>
        <button v-on:click="selectNextArm()" class="next-selector">&#9660;</button>
      </div>
    </div>
    <div class="bottom-row">
      <div class="bottom part">
        <img v-bind:src="parts.bases[indexBase].src" title="left arm" alt=""/>
        <button v-on:click="selectPreviousBase()" class="prev-selector">&#9668;</button>
        <button v-on:click="selectNextBase()" class="next-selector">&#9658;</button>
      </div>
    </div>
  </div>
</template>

<script>
import parts from '../../data/parts';

function getNextValidIndex(index, lenght) {
  const incrementIndex = index + 1;
  return incrementIndex > lenght - 1 ? 0 : incrementIndex;
}

function getPreviousValidIndex(index, lenght) {
  const decrementIndex = index - 1;
  return decrementIndex < 0 ? lenght - 1 : decrementIndex;
}

export default {
  name: 'RobotBuilder',
  data() {
    return {
      parts,
      indexHead: 0,
      indexArms: 0,
      indexTorso: 0,
      indexBase: 0,
    };
  },
  methods: {
    selectNextHead() {
      this.indexHead = getNextValidIndex(this.indexHead, this.parts.heads.length);
    },
    selectPreviousHead() {
      this.indexHead = getPreviousValidIndex(this.indexHead, this.parts.heads.length);
    },
    selectNextArm() {
      this.indexArms = getNextValidIndex(this.indexArms, this.parts.arms.length);
    },
    selectPreviousArm() {
      this.indexArms = getPreviousValidIndex(this.indexArms, this.parts.arms.length);
    },
    selectNextTorso() {
      this.indexTorso = getNextValidIndex(this.indexTorso, this.parts.torsos.length);
    },
    selectPreviousTorso() {
      this.indexTorso = getPreviousValidIndex(this.indexTorso, this.parts.torsos.length);
    },
    selectNextBase() {
      this.indexBase = getNextValidIndex(this.indexBase, this.parts.bases.length);
    },
    selectPreviousBase() {
      this.indexBase = getPreviousValidIndex(this.indexBase, this.parts.bases.length);
    },
  },
};
</script>

<style>
.part {
  position: relative;
  width: 165px;
  height: 165px;
  border: 3px solid #aaa;
}

.part img {
  width: 165px;
}

.top-row {
  display: flex;
  justify-content: space-around;
}

.middle-row {
  display: flex;
  justify-content: center;
}

.bottom-row {
  display: flex;
  justify-content: space-around;
  border-top: none;
}

.head {
  border-bottom: none;
}

.left {
  border-right: none;
}

.right {
  border-left: none;
}

.left img {
  transform: rotate(-90deg);
}

.right img {
  transform: rotate(90deg);
}

.bottom {
  border-top: none;
}

.prev-selector {
  position: absolute;
  z-index: 1;
  top: -3px;
  left: -28px;
  width: 25px;
  height: 171px;
}

.next-selector {
  position: absolute;
  z-index: 1;
  top: -3px;
  right: -28px;
  width: 25px;
  height: 171px;
}

.center .prev-selector, .center .next-selector {
  opacity: 0.8;
}

.left .prev-selector {
  top: -28px;
  left: -3px;
  width: 144px;
  height: 25px;
}

.left .next-selector {
  top: auto;
  bottom: -28px;
  left: -3px;
  width: 144px;
  height: 25px;
}

.right .prev-selector {
  top: -28px;
  left: 24px;
  width: 144px;
  height: 25px;
}

.right .next-selector {
  top: auto;
  bottom: -28px;
  left: 24px;
  width: 144px;
  height: 25px;
}

.right .next-selector {
  right: -3px;
}
</style>
