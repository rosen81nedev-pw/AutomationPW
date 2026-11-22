// 1. Format ID
function formatId(id: number): string {
  return "ID-" + id;
}

// 2. Calculate SLA date
function calculateSla(createdDate: Date, hours: number): Date {
  const result = new Date(createdDate);

  result.setHours(result.getHours() + hours);

  return result;
}

// 3. Check if task is overdue
function isOverdue(dueDate: Date): boolean {
  const today = new Date();

  return today > dueDate;
}

// 4. Validate title (5-100 characters)
function validateTitle(title: string): boolean {
  const length = title.trim().length;

  if (length >= 5 && length <= 100) {
    return true;
  }

  return false;
}

// 5. Check category
function checkCategory(category: string): boolean {
  const allowedCategories: string[] = [
    "Bug",
    "Feature",
    "Task",
    "Support"
  ];

  return allowedCategories.includes(category);
}

// 6. Create summary text
function createSummary(
  title: string,
  category: string
): string {
  return category + ": " + title;
}
