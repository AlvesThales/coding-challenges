function gradingStudents(grades) {
  
    var nextMultiple = 0;

    for (let i = 0; i < grades.length; i++) {

        if (grades[i] > 37) {
            if (grades[i] % 5) {
                nextMultiple = grades[i] + (5 - grades[i] % 5);
                if (nextMultiple - grades[i] < 3) grades[i] = nextMultiple;
            }
        }
    }
    return grades;
}
