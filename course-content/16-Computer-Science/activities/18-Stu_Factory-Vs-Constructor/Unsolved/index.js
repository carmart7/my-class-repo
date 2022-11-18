// // TODO: Refactor the class to a factory function.
// class Lesson {
//   constructor() {
//     this.title = 'Unit 17 - Computer Science';
//     this.description = 'CS for JS';
//   }
//   information() {
//     console.log(this.title, this.description);
//   }
// }

// const csForJS = new Lesson();
// csForJS.information();

const logInformation = (state) => ({
  information: () => console.log(state.title, state.description),
});

const Lesson = (title, description) => {
  const state = {
    title,
    description
  };

  return {
    ...logInformation(state),
  };

}

const csForJS = Lesson('Unit 17 - Computer Science', 'CS for JS');
csForJS.information();