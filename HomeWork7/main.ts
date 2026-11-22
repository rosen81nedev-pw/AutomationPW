

type RequestMain = {
  id: number;
  title: string;
  category: string;
  createdDate: Date;
  slaHours: number;
};

// Hard-coded requests
const requestsMain: RequestMain[] = [
  {
    id: 1,
    title: "Login page error",
    category: "Bug",
    createdDate: new Date("2025-01-01"),
    slaHours: 24
  },
  {
    id: 2,
    title: "Add dark mode",
    category: "Feature",
    createdDate: new Date("2026-11-20"),
    slaHours: 48
  },
  {
    id: 3,
    title: "Reset password help",
    category: "Support",
    createdDate: new Date("2026-11-21"),
    slaHours: 12
  },
  {
    id: 4,
    title: "Fix navbar",
    category: "Task",
    createdDate: new Date("2026-11-21"),
    slaHours: 24
  },
  {
    id: 5,
    title: "Bad",
    category: "Bug",
    createdDate: new Date("2026-11-22"),
    slaHours: 24
  },
  {
    id: 6,
    title: "Update user dashboard",
    category: "Feature",
    createdDate: new Date("2026-11-15"),
    slaHours: 72
  },
  {
    id: 7,
    title: "Printer setup",
    category: "Support",
    createdDate: new Date("2026-11-18"),
    slaHours: 24
  },
  {
    id: 8,
    title: "Improve API performance",
    category: "Other",
    createdDate: new Date("2026-11-19"),
    slaHours: 48
  }
];

console.log("REQUEST REPORT");

for (const request of requestsMain) {
  const formattedId = formatId(request.id);
  const slaDate = calculateSla(
    request.createdDate,
    request.slaHours
  );

  const overdue = isOverdue(slaDate);
  const validTitle = validateTitle(request.title);
  const validCategory = checkCategory(request.category);
  const summary = createSummary(
    request.title,
    request.category
  );

  console.log("ID:", formattedId);
  console.log("Summary:", summary);
  console.log("Title Valid:", validTitle);
  console.log("Category Valid:", validCategory);
  console.log("SLA Due:", slaDate);
  console.log("Overdue:", overdue);
}