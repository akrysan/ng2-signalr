import { Observable } from 'rxjs';
import { BroadcastEventListener } from '../eventing/broadcast.event.listener';
import { ConnectionStatus } from './connection.status';

export interface ISignalRConnection {
    readonly status: Observable<ConnectionStatus>;
    readonly errors: Observable<any>;
    readonly id: string;
    invoke(hubName: string, method: string, ...parameters: any[]): Promise<any>;
    listen<T>(hubName: string, listener: BroadcastEventListener<T>): void;
    listenFor<T>(hubName: string, listener: string): BroadcastEventListener<T>;
    listenForRaw(hubName: string, listener: string): BroadcastEventListener<any[]>;
    stop(): void;
    start(): Promise<any>;
    stopListening<T>(hubName: string, listener: BroadcastEventListener<T>): void;
}
