<script>
import { CONVERSATION_STATUS } from '@/sharedconstants/messages';

export default {
  props: {
    status: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      CONVERSATION_STATUS,
    };
  },
};
</script>

<template>
  <div class="inline-flex items-center justify-center rounded-md">
    <!-- Pending -->
    <svg
      v-if="status === CONVERSATION_STATUS.PENDING"
      class="h-3.5 w-3.5"
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.1 0.0449978V1.8558C4.5486 2.2986 1.8 5.328 1.8 9C1.8 12.9762 5.0238 16.2 9 16.2C10.6641 16.2 12.195 15.6357 13.4154 14.688L14.6961 15.9687C13.1445 17.2377 11.16 18 9 18C4.0293 18 0 13.9707 0 9C0 4.3335 3.5523 0.495898 8.1 0.0449978ZM17.955 9.9C17.775 11.7099 17.0604 13.3623 15.9687 14.6952L14.688 13.4154C15.462 12.4191 15.9804 11.2149 16.1442 9.9H17.9559H17.955ZM9.9018 0.0449978C14.1534 0.467098 17.5338 3.8484 17.9568 8.1H16.1451C15.7392 4.8438 13.158 2.2626 9.9018 1.8558V0.0440979V0.0449978Z"
        class="fill-[#B9BBC6]"
      />
    </svg>
    <!-- Open -->
    <svg
      v-if="status === CONVERSATION_STATUS.OPEN"
      class="h-3.5 w-3.5"
      width="19"
      height="19"
      viewBox="0 0 19 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.375 18.875C4.19733 18.875 0 14.6776 0 9.5C0 4.32233 4.19733 0.125 9.375 0.125C14.5526 0.125 18.75 4.32233 18.75 9.5C18.75 14.6776 14.5526 18.875 9.375 18.875ZM9.375 17C13.5172 17 16.875 13.6422 16.875 9.5C16.875 5.35786 13.5172 2 9.375 2C5.23286 2 1.875 5.35786 1.875 9.5C1.875 13.6422 5.23286 17 9.375 17Z"
        class="fill-[#ED8A5C]"
      />
    </svg>

    <!-- Snoozed -->
    <svg
      v-if="status === CONVERSATION_STATUS.SNOOZED"
      class="h-3.5 w-3.5"
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9 18C4.0293 18 0 13.9707 0 9C0 4.0293 4.0293 0 9 0C13.9707 0 18 4.0293 18 9C18 13.9707 13.9707 18 9 18ZM2.9961 12.9825C3.58766 13.8676 4.36812 14.6105 5.28129 15.1577C6.19446 15.7049 7.21761 16.0428 8.27707 16.147C9.33652 16.2513 10.4059 16.1193 11.4082 15.7606C12.4105 15.4019 13.3208 14.8254 14.0736 14.0726C14.8263 13.3198 15.4027 12.4094 15.7613 11.4071C16.12 10.4047 16.2518 9.33532 16.1475 8.27588C16.0431 7.21644 15.7052 6.19332 15.1579 5.2802C14.6106 4.36707 13.8676 3.58668 12.9825 2.9952C13.3706 4.3796 13.383 5.84237 13.0186 7.23318C12.6542 8.62399 11.926 9.89269 10.9089 10.9089C9.89277 11.9258 8.62423 12.6539 7.23359 13.0183C5.84296 13.3828 4.38037 13.3704 2.9961 12.9825Z"
        class="fill-[#0B68CB]"
      />
    </svg>

    <!-- Resolved -->
    <svg
      v-if="status === CONVERSATION_STATUS.RESOLVED"
      class="h-3.5 w-3.5"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="3 3 17.92 17.92"
    >
      <path
        d="M11.96 20.92C7.01152 20.92 3 16.9084 3 11.96C3 7.01152 7.01152 3 11.96 3C16.9084 3 20.92 7.01152 20.92 11.96C20.92 16.9084 16.9084 20.92 11.96 20.92ZM11.96 19.128C15.9188 19.128 19.128 15.9188 19.128 11.96C19.128 8.00122 15.9188 4.792 11.96 4.792C8.00122 4.792 4.792 8.00122 4.792 11.96C4.792 15.9188 8.00122 19.128 11.96 19.128Z"
        class="fill-[#5BB98C]"
      />
      <path
        d="M11.9599 17.9333C15.2589 17.9333 17.9332 15.2589 17.9332 11.96C17.9332 8.66098 15.2589 5.98663 11.9599 5.98663C8.66092 5.98663 5.98657 8.66098 5.98657 11.96C5.98657 15.2589 8.66092 17.9333 11.9599 17.9333Z"
        class="fill-[#5BB98C]"
      />
    </svg>
  </div>
</template>
