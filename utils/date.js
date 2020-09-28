import { parseISO, isValid } from "date-fns"

export function parseDateString(dateString) {
  let date = parseISO(dateString)

  if (!isValid(date)) date = new Date(dateString)

  return date
}
