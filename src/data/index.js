// 1. Sirf Latest Jobs ko import karein
import { latestJobs } from './latestJobs';

// 2. Master List (Abhi isme sirf jobs hain)
export const allPosts = [
  ...latestJobs
];

// 3. Export for Home Page
export { latestJobs };
