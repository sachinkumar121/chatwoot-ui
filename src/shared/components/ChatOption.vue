<script>
import { mapGetters } from 'vuex';

export default {
  components: {},
  props: {
    action: {
      type: Object,
      default: () => {},
    },
    isSelected: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['optionSelect'],
  computed: {
    ...mapGetters({
      widgetColor: 'appConfig/getWidgetColor',
    }),
  },
  methods: {
    onClick() {
      this.$emit('optionSelect', this.action);
    },
  },
};
</script>

<template>
  <li
    class="option"
    :class="{ 'is-selected': isSelected }"
    :style="{ borderColor: widgetColor }"
  >
    <button class="option-button button" @click="onClick">
      <span :style="{ color: widgetColor }">{{ action.title }}</span>
    </button>
  </li>
</template>

<style scoped lang="scss">
@import '@/assets/scss/variables.scss';

.option {
  border-radius: $space-jumbo;
  border: 1px solid $color-woot;
  float: left;
  margin: $space-smaller;
  max-width: 100%;

  .option-button {
    background: transparent;
    border-radius: $space-large;
    border: 0;
    cursor: pointer;
    height: auto;
    line-height: 1.5;
    min-height: $space-two * 2;
    text-align: left;
    white-space: normal;

    span {
      display: inline-block;
      vertical-align: middle;
    }

    > .icon {
      margin-right: $space-smaller;
      font-size: $font-size-medium;
    }
  }
}
</style>
