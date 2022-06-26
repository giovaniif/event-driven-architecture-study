import DomainEvent from "./domain-event";

export default class QuizSubmitted implements DomainEvent {
  name: string = "QuizSubmitted"

  constructor (
    readonly idQuiz: number,
    readonly userName: string, 
    readonly email: string, 
    readonly answers: { [id: number]: string }
  ) {}
}