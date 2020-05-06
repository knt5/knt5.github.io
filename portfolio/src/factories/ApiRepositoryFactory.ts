import AppError from '@/errors/AppError';
import ApiRepository from '@/repositories/api/ApiRepository';
import SwimmingRepository from '@/repositories/api/portfolio/SwimmingRepository';

/** API repository factory */
export default class ApiRepositoryFactory {
	/** Get API repository instance */
	static get<T extends ApiRepository>(repositoryName: string): T {
		switch (repositoryName) {
			case ApiRepository.Name.Swimming:
				return (new SwimmingRepository(repositoryName) as unknown) as T;
		}

		throw new AppError(`Unknown repositoryName: ${repositoryName}`);
	}
}
