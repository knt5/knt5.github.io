<template lang="pug">
	//- TODO: Make a swimming records chart
	.swimming
		.sub-section-title.title Swimming
		.sub-section-content
			.record-box
				.record(v-for="record in records" :key="record.year")
					| {{ record.year }}: {{ record.distance | digit }}m ({{ feet(record.distance) | digit }}ft)
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ApiRepositoryFactory from '@/factories/ApiRepositoryFactory';
import ApiRepository from '@/repositories/api/ApiRepository';
import SwimmingRepository from '@/repositories/api/portfolio/SwimmingRepository';
import GetSwimmingApiResponse from '@/models/api/portfolio/swimming/GetSwimmingApiResponse';

/** Swimming */
@Component({})
export default class ProfileSectionSwimming extends Vue {
	private readonly swimmingRepository = ApiRepositoryFactory.get<
		SwimmingRepository
	>(ApiRepository.Name.Swimming);

	private response: GetSwimmingApiResponse | null = null;

	private get records(): GetSwimmingApiResponse.Record[] {
		// TODO: to multiple columns
		return this.response && this.response.records ? this.response.records : [];
	}

	private feet(meter: number): number {
		return Math.round(meter * 3.28084);
	}

	private async mounted(): Promise<void> {
		this.response = await this.swimmingRepository.get({});
	}
}
</script>

<style lang="scss" scoped>
@import '~@/styles/layout';
@import '~@/styles/section';

.swimming {
	@extend %content;
}

.title {
	margin-top: 25px;
}

.record-box {
	display: inline-block;
}

.record {
	text-align: left;
}
</style>
