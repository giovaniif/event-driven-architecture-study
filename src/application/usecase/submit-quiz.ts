import QuizSubmitted from "@/domain/event/quiz-submitted"
import Mediator from "@/infra/mediator/mediator"

type Input = {
  idQuiz: number
  name: string
  email: string
  answers: { [id: number]: string }
}

export default class SubmitQuiz {
  constructor (readonly mediator: Mediator) {}

  async execute (input: Input): Promise<void> {
    const event = new QuizSubmitted(input.idQuiz, input.name, input.email, input.answers)
    this.mediator.publish(event)
  }
}