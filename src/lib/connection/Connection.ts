import {ClientConnection} from 'message-event-channel';

export class Connection {
  public client: ClientConnection = new ClientConnection();
  constructor() {
    this.client.init();
  }
}

const connection = new Connection();

export {
  connection,
  ClientConnection
}
