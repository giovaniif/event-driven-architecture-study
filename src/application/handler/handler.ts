import DomainEvent from "../../domain/event/domain-event"

export default interface Handler {
	eventName: string;
	handle(event: DomainEvent): Promise<void>;
}