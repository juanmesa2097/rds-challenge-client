export const calculateAge = (dateOfBirth: Date): number => {
  const yearDiff = Date.now() - new Date(dateOfBirth).getTime();
  const year = new Date(yearDiff).getUTCFullYear();
  const age = year - 1970;
  return age;
};
