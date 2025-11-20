import type { User as FirebaseUser } from 'firebase/auth';

export type User = FirebaseUser;

export const JOB_STATUSES = ['Applied', 'Interviewing', 'Offer', 'Rejected', 'Withdrawn'] as const;

export type JobStatus = (typeof JOB_STATUSES)[number];

export type JobApplication = {
  id: string;
  userId: string;
  company: string;
  role: string;
  url: string;
  status: JobStatus;
  dateApplied: string;
  lastUpdated: string;
};

export type Reminder = {
  id: string;
  userId: string;
  jobId: string;
  jobCompany: string;
  jobRole: string;
  title: string;
  date: string;
};
