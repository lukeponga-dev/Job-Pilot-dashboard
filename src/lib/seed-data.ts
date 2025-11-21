import type { JobApplication } from './types';

export const seedApplications: Omit<JobApplication, 'id' | 'userId' | 'lastUpdated'>[] = [];
