<template>
  <span
    class="ti-voice"
    :class="classes"
    :style="{
      fontSize: fontSize,
      borderColor: color,
      background: `radial-gradient(circle 0.14em at top left,${color} 100%,transparent)`
    }"
  ></span>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'

export default defineComponent({
  name: 'Voice',
  props: {
    type: {
      type: String,
      default: 'default'
    },
    motion: {
      type: Boolean,
      default: false
    },
    color: String,
    fontSize: String
  },
  setup(props) {
    const classes = computed(() => [
      `ti-voice_type--${props.type}`,
      {
        'ti-voice--motion': props.motion
      }
    ])
    return {
      classes
    }
  }
})
</script>

<style lang="scss" rel="stylesheet/scss">
@keyframes twinkleInOut {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@mixin voice-types {
  @each $type in primary, success, warning, danger, info {
    .ti-voice_type--#{$type} {
      @content (map-get($globalThemeMap, $type));
    }
  }
}

@include themes {
  .ti-voice {
    position: relative;
    display: inline-block;
    width: 1.055em;
    height: 1.055em;
    overflow: hidden;
    font-size: 15px;
    background: radial-gradient(
      circle 0.14em at top left,
      map-get($globalThemeMap, default) 100%,
      transparent
    );
    border-color: map-get($globalThemeMap, default);
    transform: translateY(0.5275em) rotate(-45deg);
    transform-origin: 0 0;

    &.ti-voice--motion {
      &::before {
        animation: twinkleInOut 1s infinite 0.4s;
      }

      &::after {
        animation: twinkleInOut 1s infinite 0.2s;
      }
    }

    &::before {
      position: absolute;
      box-sizing: border-box;
      display: inline-block;
      width: 1.4em;
      height: 1.4em;
      content: '';
      border: 0.14em solid;
      border-color: inherit;
      border-radius: 50%;
      transform: translate(-50%, -50%);
    }

    &::after {
      position: absolute;
      box-sizing: border-box;
      display: inline-block;
      width: 0.84em;
      height: 0.84em;
      content: '';
      border: 0.14em solid;
      border-color: inherit;
      border-radius: 50%;
      transform: translate(-50%, -50%);
    }
  }

  @include voice-types using($color) {
    background: radial-gradient(
      circle 0.14em at top left,
      $color 100%,
      transparent
    );
    border-color: $color;
  }
}
</style>
