<template></template>
<script>
    import '@/chat-bubble-sdk/sdk';

    export default {
        name: "WidgetTest",
        mounted() {
            var BASE_URL="http://localhost:5173";
            chatwootSDK.run({
              baseUrl: BASE_URL
            })
        }
    }
</script>