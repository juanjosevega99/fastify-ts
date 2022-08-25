import {
  DiaryEntry,
  NewDiaryEntry,
  NonSensitiveInfoDiaryEntry
} from '../types';
import diaryData from './diaries.json';

const diaries: DiaryEntry[] = diaryData as DiaryEntry[];

export const getEntries = (): DiaryEntry[] => diaries;

export const findById = (id: number): NonSensitiveInfoDiaryEntry[] => {
  return diaries.map(({ id, date, weather, visibility }) => {
    return {
      id,
      date,
      weather,
      visibility
    };
  });
};

export const addDiary = (NewDiaryEntry: NewDiaryEntry) => {
  const newDiary = {
    id: Math.max(...diaries.map(d => d.id)) + 1,
    ...NewDiaryEntry
  };
  return newDiary;
};
