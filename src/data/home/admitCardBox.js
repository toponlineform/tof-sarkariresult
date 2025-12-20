export const admitCardBox = {
  id: "admit-card",
  title: "Admit Card",
  color: "blue",
  viewMoreLink: "/admit-card",
    // ✅ BAS YE 2 LINE ADD KARNI HAIN AUTOMATIC KE LIYE:
  auto: true,               // Switch ON and Use false for OFF Automation
  categoryName: "Admit Card",   // Master Data wali Category ka naam match hona chahiye
  
  links: [
    { title: "UPSC Prelims Admit Card", url: "#", tag: "Released", tagColor: "green" },
    { title: "CTET Jan 2025 Hall Ticket", url: "#" }
  ]
};
