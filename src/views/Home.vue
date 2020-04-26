<template lang="pug">
	.home home
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

/** Home */
@Component({
	components: {},
	meta: () => ({ title: `Kenta Motomura` }),
})
export default class Home extends Vue {}
</script>

<style lang="scss">
.home {
	font-size: 300px;
}
</style>
