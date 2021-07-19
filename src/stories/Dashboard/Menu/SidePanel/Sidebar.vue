<template>
    <div class="sidebar">
        <div class="sidebar-backdrop" @click="closeSidebarPanel" v-if="isPanelOpen"></div>
        <transition name="slide">
            <div v-if="isPanelOpen"
                 class="sidebar-panel">
                <slot></slot>
            </div>
        </transition>
    </div>
</template>
<script>
    export default {
        data: () => ({
            isPanelOpen: true
        }),
        methods: {
            closeSidebarPanel() {
                this.isPanelOpen = false
            }
        }
    }
</script>
