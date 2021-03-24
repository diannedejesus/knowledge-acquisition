function getGrade (s1, s2, s3) {
  const grade = (s1 + s2 + s3) /3
  
  return grade >= 90 ? "A" :
         grade >= 80 ? "B" :
         grade >= 70 ? "C" :
         grade >= 60 ? "D" : "F"
}