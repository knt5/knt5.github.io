<template lang="pug">
	//- TODO: Swimming chart
	.swimming
		.sub-section-title Swimming 🏊‍♂️
		.sub-section-content
			.record-column(v-for="(columnRecords, index) in records" :key="index")
				.record-row(v-for="record in columnRecords" :key="record.year")
					.record-year {{ record.year }}
					.record : {{ record.distance | digit }}m ({{ feet(record.distance) | digit }}ft)
					.notice-mark(v-show="record.year === 2020") *
		.notice * 2020: 🦠 COVID-19 closed many swimming pools
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ApiRepositoryFactory from '@/factories/ApiRepositoryFactory';
import ApiRepository from '@/repositories/api/ApiRepository';
import SwimmingRepository from '@/repositories/api/portfolio/SwimmingRepository';
import GetSwimmingApiResponse from '@/models/api/portfolio/swimming/GetSwimmingApiResponse';

/** Max rows a column */
const maxRow = 4;

/** Swimming */
@Component({})
export default class ProfileSectionSwimming extends Vue {
	private readonly swimmingRepository = ApiRepositoryFactory.get<
		SwimmingRepository
	>(ApiRepository.Name.Swimming);

	private response: GetSwimmingApiResponse | null = null;

	private get records(): GetSwimmingApiResponse.Record[][] {
		const records: GetSwimmingApiResponse.Record[][] = [];

		if (this.response) {
			let columnIndex = -1;
			this.response.records.forEach((record, index) => {
				if (index % maxRow === 0) {
					columnIndex++;
					records[columnIndex] = [];
				}
				records[columnIndex].push(record);
			});
		}

		return records;
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
@import '~@/styles/notice';

.swimming {
	@extend %content;
	margin-top: 20px;
}

.record-column {
	display: inline-block;
	padding: 0 $content-padding;
	vertical-align: top;
}

.record-row {
	text-align: left;
}

.record {
	display: inline-block;
}

.record-year {
	display: inline-block;
	font-weight: bold;
	font-size: 16px;
}

.notice-mark {
	display: inline-block;
	padding-left: 4px;
}

.notice {
	@extend %notice;
	text-align: center;
}
</style>
