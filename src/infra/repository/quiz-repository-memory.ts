import Quiz from "@/domain/entities/quiz";
import QuizRepository from "@/domain/repository/quiz-repository";

export default class QuizRepositoryMemory implements QuizRepository {
  quizzes: Quiz[]

  constructor () {
    this.quizzes = [
      {
        quizId: 1,
        questions: [
          {
            id: 1,
            description: "Javascript  é legal?",
            answers: [{ id: "a", description: "Sim" }, { id: "b", description: "Não" }],
            correctAnswer: "a"
          },
          {
            id: 2,
            description: "Typescript é melhor?",
            answers: [{ id: "a", description: "Sim" }, { id: "b", description: "Não" }],
            correctAnswer: "a"
          } 
        ]
      }
    ]
  }

  async get (idQuiz: number): Promise<Quiz> {
    const quiz = this.quizzes.find(quiz => quiz.quizId === idQuiz)
    if (!quiz) throw new Error('Quiz not found')
    return quiz
  }
}