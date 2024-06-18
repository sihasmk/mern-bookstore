export function truncateDescription(description, maxLength) {
  if (description.length <= maxLength) {
    return description;
  }

  // Find the last space within the truncated length
  const truncated = description.slice(0, maxLength);
  const lastSpaceIndex = truncated.lastIndexOf(" ");

  // Truncate at the last space and add ellipsis
  return truncated.slice(0, lastSpaceIndex) + "...";
}
