<template>
  <div class="content">
    <button class="add-to-cart" @click="addToCart()">Add to Cart</button>
    <div class="top-row">
      <!--      <div class="top part" :class="{'sale-border':selectedRobot.heads.onSale}">-->
      <!--        &lt;!&ndash;      <div class="top part" :style="headBorderStyle">&ndash;&gt;-->
      <!--        <div class="robot-name">-->
      <!--          {{ selectedRobot.heads.title }}-->
      <!--          <span class="sale" v-if="selectedRobot.heads.onSale">Sale!</span>-->
      <!--        </div>-->
      <!--        -->
      <!--      </div>-->
      <partSelector
        :parts="parts.heads"
        position="top"
      />
    </div>
    <div class="middle-row">
      <partSelector
        :parts="parts.arms"
        position="left"/>
      <partSelector
        :parts="parts.torsos"
        position="center"/>
      <partSelector
        :parts="parts.arms"
        position="right"/>
    </div>
    <div class="bottom-row">
      <partSelector
        :parts="parts.bases"
        position="bottom"/>
    </div>

    <div>
      <h1>Cart</h1>
      <table>
        <thead>
        <tr>
          <th>Robot</th>
          <th class="cost">cost</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(robot, index) in cart" :key="index">
          <td>{{ robot.heads.title }}</td>
          <td class="cost">{{ robot.cost }}</td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import parts from '../../data/parts';
import createdHookMixin from './created-hook-mixin';
import partSelector from './PartSelector.vue';

export default {
  name: 'RobotBuilder',
  components: { partSelector },
  data() {
    return {
      parts,
      cart: [],
      selectedRobot: {
        heads: {},
        arm: {},
        torsos: {},
        bases: {},
      },
    };
  },
  computed: {
    headBorderStyle() {
      return {
        border: this.selectedRobot.heads.onSale ? '3px solid red' : '3px solid green',
      };
    },
  },
  methods: {
    addToCart() {
      const robot = this.selectedRobot;
      const cost = robot.heads.cost + robot.arm.cost * 2 + robot.bases.cost + robot.torsos.cost;
      // Object.assign({}, robot, { cost }) =
      this.cart.push({ ...robot, cost });
    },
  },
  mixins: [createdHookMixin],
};
</script>

<style scoped>
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

.robot-name {
  position: absolute;
  top: -25px;
  text-align: center;
  width: 100%;
}

.sale {
  color: red;
}

.content {
  position: relative;
}

.add-to-cart {
  position: absolute;
  right: 30px;
  width: 220px;
  padding: 3px;
  font-size: 16px;
}

td, th {
  text-align: left;
  padding: 5px;
  padding-right: 20px;
}

.cost {
  text-align: right;
}

.sale-border {
  border: 3px solid red;
}
</style>
