export const latestJobsBox = {
  id: "latest-jobs",
  title: "Latest Jobs",
  color: "red",
  viewMoreLink: "/latest-jobs",
  // ✅ BAS YE 2 LINE ADD KARNI HAIN AUTOMATIC KE LIYE:
  auto: true,               // Switch ON and Use false for OFF Automation
  categoryName: "Latest Jobs",   // Master Data wali Category ka naam match hona chahiye
  links: [
    { 
      title: "UP Police Constable Recruitment 2025", 
      url: "/job/up-police-constable-2025", 
      tag: "Last Date Today", tagColor: "red", emoji: "🔥" 
    },
    { 
      title: "SSC GD Constable 2025", 
      url: "/job/ssc-gd-constable-2025", 
      tag: "New", tagColor: "green" 
    }
    // Aur jobs yahan add karein...
  ]
};
