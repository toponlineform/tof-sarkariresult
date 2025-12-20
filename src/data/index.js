// 1. Sirf Latest Jobs ko import karein
import { latestJobs } from './latestJobs';
import { admitCard } from './admitCard';
import { results } from './results';
import { admission } from './admission';
import { answerKey } from './answerKey';

// 2. Master List (Abhi isme sirf jobs hain)
export const allPosts = [
  ...latestJobs,
  ...admitCard,
  ...results,
  ...admission,
  ...answerKey
];

// 3. Export for Home Page
export { latestJobs };
export { admitCard };
export { results };
export { admission };
export { answerKey };

