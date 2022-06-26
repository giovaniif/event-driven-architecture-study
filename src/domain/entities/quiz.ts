export default class Quiz {
  constructor (
    readonly quizId: number,
    readonly questions: Array<{
      id: number,
      description: string,
      answers: Array<{ id: string, description: string }>,
      correctAnswer: string
    }>
  ) {}
}