import { format } from "date-fns"
import { parseDateString } from "utils/date"

export default function Date({ dateString }) {
  return (
    <time dateTime={dateString}>
      {format(parseDateString(dateString), "LLLL d, yyyy")}
    </time>
  )
}
