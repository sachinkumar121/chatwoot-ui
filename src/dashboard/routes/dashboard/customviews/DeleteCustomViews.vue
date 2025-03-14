<script>
import { useAlert } from '@/dashboard/composables';
import { CONTACTS_EVENTS } from '../../../helper/AnalyticsHelper/events';
import { useTrack } from '@/dashboard/composables';

export default {
  props: {
    show: {
      type: Boolean,
      default: false,
    },
    activeCustomView: {
      type: Object,
      default: () => {},
    },
    customViewsId: {
      type: [String, Number],
      default: 0,
    },
    activeFilterType: {
      type: Number,
      default: 0,
    },
    openLastItemAfterDelete: {
      type: Function,
      default: () => {},
    },
  },
  emits: ['close', 'update:show'],
  computed: {
    localShow: {
      get() {
        return this.show;
      },
      set(value) {
        this.$emit('update:show', value);
      },
    },
    activeCustomViews() {
      if (this.activeFilterType === 0) {
        return 'conversation';
      }
      if (this.activeFilterType === 1) {
        return 'contact';
      }
      return '';
    },
    deleteMessage() {
      return ` ${this.activeCustomView && this.activeCustomView.name}?`;
    },
    deleteConfirmText() {
      return `${this.$t('FILTER.CUSTOM_VIEWS.DELETE.MODAL.CONFIRM.YES')}`;
    },
    deleteRejectText() {
      return `${this.$t('FILTER.CUSTOM_VIEWS.DELETE.MODAL.CONFIRM.NO')}`;
    },
    isFolderSection() {
      return this.activeFilterType === 0 && this.$route.name !== 'home';
    },
    isSegmentSection() {
      return (
        this.activeFilterType === 1 && this.$route.name !== 'contacts_dashboard'
      );
    },
  },

  methods: {
    async deleteSavedCustomViews() {
      try {
        const id = Number(this.customViewsId);
        const filterType = this.activeCustomViews;
        await this.$store.dispatch('customViews/delete', { id, filterType });
        this.closeDeletePopup();
        useAlert(
          this.activeFilterType === 0
            ? this.$t('FILTER.CUSTOM_VIEWS.DELETE.API_FOLDERS.SUCCESS_MESSAGE')
            : this.$t('FILTER.CUSTOM_VIEWS.DELETE.API_SEGMENTS.SUCCESS_MESSAGE')
        );
        useTrack(CONTACTS_EVENTS.DELETE_FILTER, {
          type: this.filterType === 0 ? 'folder' : 'segment',
        });
      } catch (error) {
        const errorMessage =
          error?.response?.message || this.activeFilterType === 0
            ? this.$t('FILTER.CUSTOM_VIEWS.DELETE.API_FOLDERS.SUCCESS_MESSAGE')
            : this.$t(
                'FILTER.CUSTOM_VIEWS.DELETE.API_SEGMENTS.SUCCESS_MESSAGE'
              );
        useAlert(errorMessage);
      }
      this.openLastItemAfterDelete();
    },
    closeDeletePopup() {
      this.$emit('close');
    },
  },
};
</script>

<template>
  <div>
    <woot-delete-modal
      v-if="localShow"
      v-model:show="localShow"
      :on-close="closeDeletePopup"
      :on-confirm="deleteSavedCustomViews"
      :title="$t('FILTER.CUSTOM_VIEWS.DELETE.MODAL.CONFIRM.TITLE')"
      :message="$t('FILTER.CUSTOM_VIEWS.DELETE.MODAL.CONFIRM.MESSAGE')"
      :message-value="deleteMessage"
      :confirm-text="deleteConfirmText"
      :reject-text="deleteRejectText"
    />
  </div>
</template>
