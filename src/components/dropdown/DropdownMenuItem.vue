<script>
import FluentIcon from '@/shared/components/FluentIcon/Index.vue';

export default {
  components: { FluentIcon },
  props: {
    text: {
      type: String,
      default: 'Default',
    },
    textClass: {
      type: String,
      default: 'text-sm leading-3',
    },
    icon: {
      type: Boolean,
      default: true,
    },
    iconName: {
      type: String,
      default: '',
    },
    iconSize: {
      type: String,
      default: '15',
    },
    iconClass: {
      type: String,
      default: 'text-black-900',
    },
    itemClass: {
      type: String,
      default:
        'flex items-center p-3 cursor-pointer ml-0 border-b border-slate-100',
    },
    action: {
      type: Function,
      default: () => {},
    },
  },
};
</script>

<template>
  <button class="menu-item" :class="[itemClass]" @click="action">
    <FluentIcon
      v-if="icon"
      :icon="iconName"
      :size="iconSize"
      :class="iconClass"
    />
    <span :class="[{ 'pl-3': icon }, textClass]">{{ text }}</span>
  </button>
</template>

<style scoped lang="scss">
@import '@/assets/scss/variables.scss';

.menu-item {
  margin-left: $zero !important;
  outline: none;

  &:last-child {
    border-bottom: none;
  }

  &:disabled {
    cursor: not-allowed;
  }
}
</style>
