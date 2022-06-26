import DomainEvent from "./domain-event";

export default class QuizCorrected implements DomainEvent {
  name = "QuizCorrected"

  constructor (readonly userName: string, readonly email: string, readonly grade: number) {}
}