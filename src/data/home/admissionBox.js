export const admissionBox = {
  id: "results",
  title: "Results",
  color: "green",
  viewMoreLink: "/results",
    // ✅ BAS YE 2 LINE ADD KARNI HAIN AUTOMATIC KE LIYE:
  auto: true,               // Switch ON and Use false for OFF Automation
  categoryName: "Latest Jobs",   // Master Data wali Category ka naam match hona chahiye
  
  links: [
    { title: "Bihar Board 12th Result", url: "#", tag: "Declared", tagColor: "red" },
    { title: "SSC CGL Tier 1 Result", url: "#" }
  ]
};
