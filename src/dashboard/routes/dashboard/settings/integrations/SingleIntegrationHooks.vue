<script>
import { useIntegrationHook } from '@/dashboard/composables/useIntegrationHook';
export default {
  props: {
    integrationId: {
      type: String,
      required: true,
    },
  },
  emits: ['add', 'delete'],
  setup(props) {
    const { integration, hasConnectedHooks } = useIntegrationHook(
      props.integrationId
    );
    return { integration, hasConnectedHooks };
  },
};
</script>

<template>
  <div class="flex-shrink flex-grow overflow-auto p-4">
    <div class="flex flex-col">
      <div
        class="bg-white dark:bg-slate-800 border border-solid border-slate-75 dark:border-slate-700/50 rounded-xl mb-4 p-4"
      >
        <div class="flex">
          <div class="flex h-[6.25rem] w-[6.25rem]">
            <img
              :src="`/dashboard/images/integrations/${integration.id}.png`"
              class="max-w-full rounded-md border border-slate-50 dark:border-slate-700/50 shadow-sm block dark:hidden bg-white dark:bg-slate-900"
            />
            <img
              :src="`/dashboard/images/integrations/${integration.id}-dark.png`"
              class="max-w-full rounded-md border border-slate-50 dark:border-slate-700/50 shadow-sm hidden dark:block bg-white dark:bg-slate-900"
            />
          </div>
          <div class="flex flex-col justify-center m-0 mx-4 flex-1">
            <h3
              class="text-xl font-medium mb-1 text-slate-800 dark:text-slate-100"
            >
              {{ integration.name }}
            </h3>
            <p class="text-slate-700 dark:text-slate-200">
              {{ integration.description }}
            </p>
          </div>
          <div class="flex justify-center items-center mb-0 w-[15%]">
            <div v-if="hasConnectedHooks">
              <div @click="$emit('delete', integration.hooks[0])">
                <woot-button class="nice alert">
                  {{ $t('INTEGRATION_APPS.DISCONNECT.BUTTON_TEXT') }}
                </woot-button>
              </div>
            </div>
            <div v-else>
              <woot-button class="button nice" @click="$emit('add')">
                {{ $t('INTEGRATION_APPS.CONNECT.BUTTON_TEXT') }}
              </woot-button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
