import { NewDiaryEntry } from '../types';
import { Weather, Visibility } from '../enums';

const isString = (string: string): boolean => {
  return typeof string === 'string';
};

const parseComment = (commentFromRequest: any): string => {
  if (!isString(commentFromRequest)) {
    throw new Error('Incorrect or missing comment ');
  }

  return commentFromRequest;
};

const toNewDiaryEntry = (object: any): NewDiaryEntry => {
  const newEntry: NewDiaryEntry = {
    comment: parseComment(object.comment),
    date: parseDate(object.date),
    weather: parseWeather(object.weather),
    visibility: parseVisibility(object.visibility)
  };

  return newEntry;
};

export default toNewDiaryEntry;
