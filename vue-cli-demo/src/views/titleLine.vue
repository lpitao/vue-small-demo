<template>
  <div :class="classes" :style="style">
    <div class="title-content">
      <span></span>
      <span>{{message}}</span>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'titleLine',
  props: {
    message:{
      type: String,
      required: true
    },
    borderPosition: {
      type:String
    },
    topGap:{
      type: Number,
      default: 0
    },
    bottomGap: {
      type: Number,
      default: 0
    }
  },
  computed: {
    classes: function(){
      return [
        "title-line",
        {
          ["border_position_" + this.borderPosition] : this.borderPosition !== ""
        }
      ]
    },
    style(){
      return {
        paddingTop: this.topGap + 'px',
        paddingBottom: this.bottomGap + 'px'
      }
    }
  },
  mounted() {
    //console.log(this.classes,this.borderPosition)
  },
}
</script>
<style lang="stylus">
.title-line {
  // 默认的属性  
}
.title-content {
  font-size: 14px;
  span {
    display: inline-block;
    vertical-align: middle;
  }
  span:first-of-type {
    width: 2px;
    height: 14px;
    background-color: #ff7d41;
    margin-right: 8px;
  }
}
.border_position_top {
  border-top: 1px solid #e9e9e9;
}
.border_position_bottom {
  border-bottom: 1px solid #e9e9e9;
}
</style>
