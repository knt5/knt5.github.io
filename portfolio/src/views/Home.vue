<template lang="pug">
	.home
		profile-section
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ProfileSection from '@/components/ProfileSection.vue';

/** Home */
@Component({
	components: {
		ProfileSection,
	},
	meta: () => ({ title: `Kenta Motomura` }),
})
export default class Home extends Vue {}
</script>
