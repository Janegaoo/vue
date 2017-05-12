<template>
	<div class="chooser-component">
        <ul class="chooser-list">
          <li v-for="(item, index) in selections"
          @click="toggleSelection(index)"
          :class="{active : checkActive(index)}">
            {{item.label}}
          </li>
        </ul>
      </div>
    </div>
</template>

<script>
import _ from 'lodash'
export default {
  props: {
    selections: {
      type: Array,
      default: [{
        label: 'test',
        value: 0
      }]
    }
  },
  data () {
    return {
      nowIndexs: [0]
    }
  },
  methods: {
    toggleSelection (index) {
      if (this.nowIndexs.indexOf(index) == -1){
        this.nowIndexs.push(index)
      }else{
        var newArr = [];
        for (let i = 0; i < this.nowIndexs.length; i++){
          if (this.nowIndexs[i] != index){
            newArr.push(this.nowIndexs[i]);
          }
        }
        this.nowIndexs = newArr;
      }

      let nowObjArray = _.map(this.nowIndexs, (idx) => {
        return this.selections[idx]
      })

      this.$emit('onChange', nowObjArray)

    },
    checkActive (index){
      return this.nowIndexs.indexOf(index) !== -1
    }
  }
}
</script>

<style scoped>
.chooser-component {
  position: relative;
  display: inline-block;
}
.chooser-list li{
  display: inline-block;
  border: 1px solid #e3e3e3;
  height: 25px;
  line-height: 25px;
  padding: 0 8px;
  margin-right: 5px;
  border-radius: 3px;
  text-align: center;
  cursor: pointer;
}
.chooser-list li.active {
  border-color: #4fc08d;
  background: #4fc08d;
  color: #fff;
}
</style>