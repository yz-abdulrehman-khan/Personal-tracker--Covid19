import {FormValues} from './CreateMemberForm'
import {validateDate, validateTime, createDate} from '../../utils/date-helpers'

const validate = (values: FormValues): Record<string, string> => {
  const errors: Partial<FormValues> = {}

  if (!values.title) {
    errors.title = 'Title has to be filled up'
  }

  if (!values.name) {
    errors.name = 'Member name has to be filled up'
  }

  if (!values.date) {
    errors.date = 'Interaction Date has to be filled up'
  } else if (!validateDate(values.date)) {
    errors.date = 'Required date format: YYYY-MM-DD'
  }

  if (!values.time) {
    errors.time = 'Interaction Time has to be filled up, rough guess it'
  } else if (!validateTime(values.time)) {
    errors.time = 'Required time format: HH:MM'
  }

  if (!values.location) {
    errors.location = 'Please select a location from the map below, you can use map search for it'
  }

  if (!errors.date && !errors.time) {
    const date = createDate(values.date, values.time)
    if (date > new Date()) {
      errors.date = 'Interaction date must be in the past'
      errors.time = 'Interaction time must be in the past'
    }
  }

  return errors
}

export default validate