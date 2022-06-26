import SubmitQuiz from "@/application/usecase/submit-quiz"
import QuizRepositoryMemory from "@/infra/repository/quiz-repository-memory"
import MailerMemory from "@/infra/service/mailer-memory"
import Mediator from "@/infra/mediator/mediator"
import QuizCorrectorHandler from "@/application/handler/quiz-corrector-handler"
import QuizComunicatorHandler from "@/application/handler/quiz-comunicator-handler"

test("Um usuário deve submeter um quiz respondido e a nota deve ser calculada e uma notificação por email deve ser enviada", async () => {
  const mediator = new Mediator()
  const quizRepository = new QuizRepositoryMemory()
  const quizCorrectorHandler = new QuizCorrectorHandler(quizRepository, mediator)
  mediator.register(quizCorrectorHandler)

  const mailer = new MailerMemory()
  const quizComunicatorHandler = new QuizComunicatorHandler(mailer)
  mediator.register(quizComunicatorHandler)

  const submitQuiz = new SubmitQuiz(mediator)
  const input = {
    name: 'John Doe',
    email: 'johndoe@example.com',
    idQuiz: 1,
    answers: {
      1: "a",
      2: "a"
    }
  }
  await submitQuiz.execute(input)
  expect(mailer.messages[0].message).toBe("Olá John Doe, a sua nota é 100")
})