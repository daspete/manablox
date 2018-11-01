<template>
    <div class="layout">
        <nuxt />
    </div>
</template>

<script>
import socket from '~/plugins/sockets.js'

export default {
    beforeMount(){
        this.$root.socket = socket;
    }
}
</script>
