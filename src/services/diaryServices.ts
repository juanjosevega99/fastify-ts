import {
  DiaryEntry,
  NewDiaryEntry,
  NonSensitiveInfoDiaryEntry
} from '../types';
import diaryData from './diaries.json';

const diaries: DiaryEntry[] = diaryData as DiaryEntry[];

export const getEntries = (): DiaryEntry[] => diaries;

export const findById = (
  id: number
): NonSensitiveInfoDiaryEntry | undefined => {
  const entry = diaries.find(d => d.id === id);
  if (entry != null) {
    const { comment, ...restOfDiary } = entry;
    return restOfDiary;
  }

  return undefined;
};

export const addDiary = (NewDiaryEntry: NewDiaryEntry): DiaryEntry => {
  const newDiary = {
    id: Math.max(...diaries.map(d => d.id)) + 1,
    ...NewDiaryEntry
  };
  return newDiary;
};
