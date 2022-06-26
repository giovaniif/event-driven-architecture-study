import Quiz from "../entities/quiz";

export default interface QuizRepository {
  get: (idQuiz: number) => Promise<Quiz>
}