// 1. Sirf Latest Jobs ko import karein
import { latestJobs } from './latestJobs';
import { admitCard } from './admitCard';

// 2. Master List (Abhi isme sirf jobs hain)
export const allPosts = [
  ...latestJobs
  ...admitCard
];

// 3. Export for Home Page
export { latestJobs };
export { admitCard };

