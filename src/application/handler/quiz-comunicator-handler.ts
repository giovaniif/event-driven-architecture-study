import DomainEvent from "@/domain/event/domain-event";
import QuizCorrected from "@/domain/event/quiz-corrected";
import Mailer from "../service/mailer";
import Handler from "./handler";

export default class QuizComunicatorHandler implements Handler {
  eventName = "QuizCorrected"

  constructor (readonly mailer: Mailer) {}

  async handle (event: QuizCorrected): Promise<void> {
    this.mailer.send(event.email, `Olá ${event.userName}, a sua nota é ${event.grade}`) 
  }
}